import getConversationTopicsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getConversationTopicsResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const getConversationTopicsEventContract = buildEventContract({
	eventSignatures: {
		'get-conversation-topics::v2020_12_25': {
			responsePayloadSchema: getConversationTopicsResponsePayloadSchema,
		},
	},
})
export default getConversationTopicsEventContract

export type GetConversationTopicsEventContract =
	typeof getConversationTopicsEventContract
