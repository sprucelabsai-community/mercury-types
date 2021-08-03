import authenticateResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/authenticateResponsePayload.schema'
import whoamiEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/whoamiEmitTargetAndPayload.schema'
import { buildEventContract } from '../../../utilities'

const whoamiEventContract = buildEventContract({
	eventSignatures: {
		'whoami::v2020_12_25': {
			emitPayloadSchema: whoamiEmitTargetAndPayloadSchema,
			responsePayloadSchema: authenticateResponsePayloadSchema,
		},
	},
})
export default whoamiEventContract

export type WhoamiEventContract = typeof whoamiEventContract
