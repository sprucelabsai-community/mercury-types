import { validateSchemaValues } from '@sprucelabs/schema'
import eventContractSchema from '#spruce/schemas/mercury/v2020_12_25/eventContract.schema'
import SpruceError from '../errors/SpruceError'
import { EventContract } from '../types/mercury.types'

export default function validateEventContract<C extends EventContract>(
	contract: C
): asserts contract is C {
	try {
		validateSchemaValues(eventContractSchema, contract)
	} catch (err: any) {
		throw new SpruceError({
			code: 'INVALID_EVENT_CONTRACT',
			originalError: err,
		})
	}
}
