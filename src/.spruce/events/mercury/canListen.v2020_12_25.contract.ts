import canListenEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/canListenEmitTargetAndPayload.schema'
import canListenResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/canListenResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const canListenEventContract = buildEventContract({
	eventSignatures: {
		'can-listen::v2020_12_25': {
			emitPayloadSchema: canListenEmitTargetAndPayloadSchema,
			responsePayloadSchema: canListenResponsePayloadSchema,
		},
	},
})
export default canListenEventContract

export type CanListenEventContract = typeof canListenEventContract
