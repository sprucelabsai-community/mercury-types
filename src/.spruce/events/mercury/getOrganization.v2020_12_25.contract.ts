import getOrganizationEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getOrganizationEmitTargetAndPayload.schema'
import getOrgResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getOrgResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const getOrganizationEventContract = buildEventContract({
	eventSignatures: {
		'get-organization::v2020_12_25': {
			emitPayloadSchema: getOrganizationEmitTargetAndPayloadSchema,
			responsePayloadSchema: getOrgResponsePayloadSchema,
		},
	},
})
export default getOrganizationEventContract

export type GetOrganizationEventContract = typeof getOrganizationEventContract
