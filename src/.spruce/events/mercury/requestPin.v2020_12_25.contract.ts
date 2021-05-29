import requestPinEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/requestPinEmitTargetAndPayload.schema'
import requestPinResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/requestPinResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const requestPinEventContract = buildEventContract({
	eventSignatures: {
		'request-pin::v2020_12_25': {
			emitPayloadSchema: requestPinEmitTargetAndPayloadSchema,
			responsePayloadSchema: requestPinResponsePayloadSchema,
		},
	},
})
export default requestPinEventContract

export type RequestPinEventContract = typeof requestPinEventContract
