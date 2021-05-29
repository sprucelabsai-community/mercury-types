import deleteRoleEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/deleteRoleEmitTargetAndPayload.schema'
import deleteRoleResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/deleteRoleResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const deleteRoleEventContract = buildEventContract({
	eventSignatures: {
		'delete-role::v2020_12_25': {
			emitPayloadSchema: deleteRoleEmitTargetAndPayloadSchema,
			responsePayloadSchema: deleteRoleResponsePayloadSchema,
		},
	},
})
export default deleteRoleEventContract

export type DeleteRoleEventContract = typeof deleteRoleEventContract
