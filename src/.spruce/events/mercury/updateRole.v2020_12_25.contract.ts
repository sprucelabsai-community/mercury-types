import updateRoleEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/updateRoleEmitTargetAndPayload.schema'
import updateRoleResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/updateRoleResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const updateRoleEventContract = buildEventContract({
	eventSignatures: {
		'update-role::v2020_12_25': {
			emitPayloadSchema: updateRoleEmitTargetAndPayloadSchema,
			responsePayloadSchema: updateRoleResponsePayloadSchema,
		},
	},
})
export default updateRoleEventContract

export type UpdateRoleEventContract = typeof updateRoleEventContract
