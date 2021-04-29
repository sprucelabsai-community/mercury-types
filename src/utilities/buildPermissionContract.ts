import { validateSchemaValues } from '@sprucelabs/schema'
import permissionContractSchema from '#spruce/schemas/mercury/v2020_09_01/permissionContract.schema'
import { PermissionContract } from '../types/mercury.types'

export default function buildPermissionContract<C extends PermissionContract>(
	contract: C
): C {
	validateSchemaValues(permissionContractSchema, contract)
	return contract as C
}
