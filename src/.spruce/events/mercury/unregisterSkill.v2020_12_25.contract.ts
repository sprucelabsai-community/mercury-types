import unregisterSkillEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/unregisterSkillEmitTargetAndPayload.schema'
import unregisterSkillResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/unregisterSkillResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const unregisterSkillEventContract = buildEventContract({
	eventSignatures: {
		'unregister-skill::v2020_12_25': {
			emitPayloadSchema: unregisterSkillEmitTargetAndPayloadSchema,
			responsePayloadSchema: unregisterSkillResponsePayloadSchema,
		},
	},
})
export default unregisterSkillEventContract

export type UnregisterSkillEventContract = typeof unregisterSkillEventContract
