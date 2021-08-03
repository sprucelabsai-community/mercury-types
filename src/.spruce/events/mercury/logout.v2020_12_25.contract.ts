import logoutEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/logoutEmitTargetAndPayload.schema'
import logoutResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/logoutResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const logoutEventContract = buildEventContract({
	eventSignatures: {
		'logout::v2020_12_25': {
			emitPayloadSchema: logoutEmitTargetAndPayloadSchema,
			responsePayloadSchema: logoutResponsePayloadSchema,
		},
	},
})
export default logoutEventContract

export type LogoutEventContract = typeof logoutEventContract
