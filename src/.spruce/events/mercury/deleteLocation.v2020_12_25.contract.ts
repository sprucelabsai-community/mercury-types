import deleteLocationEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/deleteLocationEmitTargetAndPayload.schema'
import deleteLocationResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/deleteLocationResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const deleteLocationEventContract = buildEventContract({
	eventSignatures: {
		'delete-location::v2020_12_25': {
			emitPayloadSchema: deleteLocationEmitTargetAndPayloadSchema,
			responsePayloadSchema: deleteLocationResponsePayloadSchema,
		},
	},
})
export default deleteLocationEventContract

export type DeleteLocationEventContract = typeof deleteLocationEventContract
