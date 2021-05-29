import listOrganizationsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listOrganizationsEmitTargetAndPayload.schema'
import listOrgsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listOrgsResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const listOrganizationsEventContract = buildEventContract({
	eventSignatures: {
		'list-organizations::v2020_12_25': {
			emitPayloadSchema: listOrganizationsEmitTargetAndPayloadSchema,
			responsePayloadSchema: listOrgsResponsePayloadSchema,
		},
	},
})
export default listOrganizationsEventContract

export type ListOrganizationsEventContract =
	typeof listOrganizationsEventContract
