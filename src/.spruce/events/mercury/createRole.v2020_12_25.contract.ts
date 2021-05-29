import createRoleEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/createRoleEmitTargetAndPayload.schema'
import createRoleResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/createRoleResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const createRoleEventContract = buildEventContract({
	eventSignatures: {
		'create-role::v2020_12_25': {
			emitPayloadSchema: createRoleEmitTargetAndPayloadSchema,
			responsePayloadSchema: createRoleResponsePayloadSchema,
		},
	},
})
export default createRoleEventContract

export type CreateRoleEventContract = typeof createRoleEventContract
