import SpruceError from '../errors/SpruceError'
import { EventContract, EventNames, EventSignature } from '../mercury.types'

export interface NamedEventSignature {
	eventNameWithOptionalNamespace: string
	eventName: string
	eventNamespace?: string
	signature: EventSignature
}

const eventContractUtil = {
	getEventNames(contract: EventContract) {
		return Object.keys(contract.eventSignatures)
	},

	splitEventNameWithOptionalNamespace(
		name: string
	): { eventName: string; eventNamespace?: string } {
		const parts = name.split('.')
		const eventNamespace = parts[1] ? parts[0] : undefined
		const eventName = parts[1] || parts[0]

		return {
			eventName,
			eventNamespace,
		}
	},

	joinEventNameWithOptionalNamespace(options: {
		eventName: string
		eventNamespace?: string
	}): string {
		const { eventName, eventNamespace } = options

		if (!eventNamespace) {
			return eventName
		}

		return !eventNamespace ? eventName : `${eventNamespace}.${eventName}`
	},

	getNamedEventSignatures(contract: EventContract): NamedEventSignature[] {
		const names = this.getEventNames(contract)

		return names.map((name) => {
			const nameParts = this.splitEventNameWithOptionalNamespace(name)
			return {
				eventNameWithOptionalNamespace: name,
				eventName: nameParts.eventName,
				eventNamespace: nameParts.eventNamespace,
				signature: contract.eventSignatures[name],
			}
		})
	},

	unifyContracts<Contract extends EventContract = EventContract>(
		contracts: EventContract[]
	) {
		const unifiedContract: EventContract = {
			eventSignatures: {},
		}

		for (const contract of contracts ?? []) {
			unifiedContract.eventSignatures = {
				...unifiedContract.eventSignatures,
				...contract.eventSignatures,
			}
		}

		const eventContract =
			contracts && contracts.length > 0
				? (unifiedContract as Contract)
				: undefined

		return eventContract
	},

	getSignatureByName<Contract extends EventContract>(
		contract: Contract,
		eventNameWithOptionalNamespace: EventNames<Contract>
	) {
		const match = this.getNamedEventSignatures(contract).find(
			(event) =>
				event.eventNameWithOptionalNamespace === eventNameWithOptionalNamespace
		)

		if (!match) {
			throw new SpruceError({
				code: 'INVALID_EVENT_NAME',
				eventNameWithOptionalNamespace,
				validNames: this.getEventNames(contract),
			})
		}

		return match.signature
	},

	generateResponseEventName(eventNameWithOptionalNamespace: string) {
		return `${eventNameWithOptionalNamespace}:response`
	},
}

export default eventContractUtil
