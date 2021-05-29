import sendMessageEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/sendMessageEmitTargetAndPayload.schema'
import sendMessageResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/sendMessageResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const sendMessageEventContract = buildEventContract({
	eventSignatures: {
		'send-message::v2020_12_25': {
			emitPayloadSchema: sendMessageEmitTargetAndPayloadSchema,
			responsePayloadSchema: sendMessageResponsePayloadSchema,
		},
	},
})
export default sendMessageEventContract

export type SendMessageEventContract = typeof sendMessageEventContract
