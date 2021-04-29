import { validateSchemaValues } from '@sprucelabs/schema'
import eventContractSchema from '#spruce/schemas/mercury/v2020_09_01/eventContract.schema'
import { EventContract } from '../types/mercury.types'

export default function validateEventContract<C extends EventContract>(
	contract: C
): asserts contract is C {
	validateSchemaValues(eventContractSchema, contract)
}
