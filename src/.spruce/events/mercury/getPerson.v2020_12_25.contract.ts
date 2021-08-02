import getPersonEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getPersonEmitTargetAndPayload.schema'
import getPersonResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getPersonResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const getPersonEventContract = buildEventContract({
	eventSignatures: {
		'get-person::v2020_12_25': {
			emitPayloadSchema: getPersonEmitTargetAndPayloadSchema,
			responsePayloadSchema: getPersonResponsePayloadSchema,
		},
	},
})
export default getPersonEventContract

export type GetPersonEventContract = typeof getPersonEventContract
