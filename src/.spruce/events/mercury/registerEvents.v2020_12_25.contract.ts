import registerEventsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerEventsEmitTargetAndPayload.schema'
import registerEventsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerEventsResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const registerEventsEventContract = buildEventContract({
	eventSignatures: {
		'register-events::v2020_12_25': {
			emitPayloadSchema: registerEventsEmitTargetAndPayloadSchema,
			responsePayloadSchema: registerEventsResponsePayloadSchema,
		},
	},
})
export default registerEventsEventContract

export type RegisterEventsEventContract = typeof registerEventsEventContract
