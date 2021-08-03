import getEventContractsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getEventContractsEmitTargetAndPayload.schema'
import getEventContractsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getEventContractsResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const getEventContractsEventContract = buildEventContract({
	eventSignatures: {
		'get-event-contracts::v2020_12_25': {
			emitPayloadSchema: getEventContractsEmitTargetAndPayloadSchema,
			responsePayloadSchema: getEventContractsResponsePayloadSchema,
		},
	},
})
export default getEventContractsEventContract

export type GetEventContractsEventContract =
	typeof getEventContractsEventContract
