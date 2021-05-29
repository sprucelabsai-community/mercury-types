import authenticateResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/authenticateResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const whoamiEventContract = buildEventContract({
	eventSignatures: {
		'whoami::v2020_12_25': {
			responsePayloadSchema: authenticateResponsePayloadSchema,
		},
	},
})
export default whoamiEventContract

export type WhoamiEventContract = typeof whoamiEventContract
