import createOrganizationEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/createOrganizationEmitTargetAndPayload.schema'
import createOrgResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/createOrgResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const createOrganizationEventContract = buildEventContract({
	eventSignatures: {
		'create-organization::v2020_12_25': {
			emitPayloadSchema: createOrganizationEmitTargetAndPayloadSchema,
			responsePayloadSchema: createOrgResponsePayloadSchema,
		},
	},
})
export default createOrganizationEventContract

export type CreateOrganizationEventContract =
	typeof createOrganizationEventContract
