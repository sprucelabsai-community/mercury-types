import listRolesEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listRolesEmitTargetAndPayload.schema'
import listRolesResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listRolesResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const listRolesEventContract = buildEventContract({
	eventSignatures: {
		'list-roles::v2020_12_25': {
			emitPayloadSchema: listRolesEmitTargetAndPayloadSchema,
			responsePayloadSchema: listRolesResponsePayloadSchema,
		},
	},
})
export default listRolesEventContract

export type ListRolesEventContract = typeof listRolesEventContract
