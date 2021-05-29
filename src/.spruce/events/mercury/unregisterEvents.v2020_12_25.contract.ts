import unregisterEventsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/unregisterEventsEmitTargetAndPayload.schema'
import unregisterEventsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/unregisterEventsResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const unregisterEventsEventContract = buildEventContract({
	eventSignatures: {
		'unregister-events::v2020_12_25': {
			emitPayloadSchema: unregisterEventsEmitTargetAndPayloadSchema,
			responsePayloadSchema: unregisterEventsResponsePayloadSchema,
		},
	},
})
export default unregisterEventsEventContract

export type UnregisterEventsEventContract = typeof unregisterEventsEventContract
