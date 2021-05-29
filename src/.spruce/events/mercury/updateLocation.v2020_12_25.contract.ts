import updateLocationEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/updateLocationEmitTargetAndPayload.schema'
import updateLocationResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/updateLocationResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const updateLocationEventContract = buildEventContract({
	eventSignatures: {
		'update-location::v2020_12_25': {
			emitPayloadSchema: updateLocationEmitTargetAndPayloadSchema,
			responsePayloadSchema: updateLocationResponsePayloadSchema,
		},
	},
})
export default updateLocationEventContract

export type UpdateLocationEventContract = typeof updateLocationEventContract
