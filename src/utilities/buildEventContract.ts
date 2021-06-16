import { validateSchemaValues } from '@sprucelabs/schema'
import eventContractSchema from '#spruce/schemas/mercury/v2020_12_25/eventContract.schema'
import { EventContract } from '../types/mercury.types'

export default function buildEventContract<C extends EventContract>(
	contract: C
): C {
	validateSchemaValues(eventContractSchema, contract)
	return contract as C
}
