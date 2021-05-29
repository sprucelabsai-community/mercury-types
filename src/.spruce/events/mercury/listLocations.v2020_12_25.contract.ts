import listLocationsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listLocationsEmitTargetAndPayload.schema'
import listLocationsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listLocationsResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const listLocationsEventContract = buildEventContract({
	eventSignatures: {
		'list-locations::v2020_12_25': {
			emitPayloadSchema: listLocationsEmitTargetAndPayloadSchema,
			responsePayloadSchema: listLocationsResponsePayloadSchema,
		},
	},
})
export default listLocationsEventContract

export type ListLocationsEventContract = typeof listLocationsEventContract
