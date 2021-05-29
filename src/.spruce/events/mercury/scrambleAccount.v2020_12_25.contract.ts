import scrambleAccountResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/scrambleAccountResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const scrambleAccountEventContract = buildEventContract({
	eventSignatures: {
		'scramble-account::v2020_12_25': {
			responsePayloadSchema: scrambleAccountResponsePayloadSchema,
		},
	},
})
export default scrambleAccountEventContract

export type ScrambleAccountEventContract = typeof scrambleAccountEventContract
