import listPeopleEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listPeopleEmitTargetAndPayload.schema'
import listPeopleResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listPeopleResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const listPeopleEventContract = buildEventContract({
	eventSignatures: {
		'list-people::v2020_12_25': {
			emitPayloadSchema: listPeopleEmitTargetAndPayloadSchema,
			responsePayloadSchema: listPeopleResponsePayloadSchema,
		},
	},
})
export default listPeopleEventContract

export type ListPeopleEventContract = typeof listPeopleEventContract
