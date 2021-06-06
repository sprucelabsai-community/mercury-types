import { validateSchemaValues } from '@sprucelabs/schema'
import eventContractSchema from '#spruce/schemas/mercury/v2020_09_01/eventContract.schema'
import SpruceError from '../errors/SpruceError'
import { EventContract } from '../types/mercury.types'

export default function validateEventContract<C extends EventContract>(
	contract: C
): asserts contract is C {
	try {
		validateSchemaValues(eventContractSchema, contract)
	} catch (err) {
		throw new SpruceError({
			code: 'INVALID_EVENT_CONTRACT',
			originalError: err,
		})
	}
}
