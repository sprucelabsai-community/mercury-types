import getEventContractsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getEventContractsResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const getEventContractsEventContract = buildEventContract({
	eventSignatures: {
		'get-event-contracts::v2020_12_25': {
			responsePayloadSchema: getEventContractsResponsePayloadSchema,
		},
	},
})
export default getEventContractsEventContract

export type GetEventContractsEventContract =
	typeof getEventContractsEventContract
