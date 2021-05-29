import createLocationEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/createLocationEmitTargetAndPayload.schema'
import createLocationResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/createLocationResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const createLocationEventContract = buildEventContract({
	eventSignatures: {
		'create-location::v2020_12_25': {
			emitPayloadSchema: createLocationEmitTargetAndPayloadSchema,
			responsePayloadSchema: createLocationResponsePayloadSchema,
		},
	},
})
export default createLocationEventContract

export type CreateLocationEventContract = typeof createLocationEventContract
