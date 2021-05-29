import registerSkillEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerSkillEmitTargetAndPayload.schema'
import registerSkillResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerSkillResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const registerSkillEventContract = buildEventContract({
	eventSignatures: {
		'register-skill::v2020_12_25': {
			emitPayloadSchema: registerSkillEmitTargetAndPayloadSchema,
			responsePayloadSchema: registerSkillResponsePayloadSchema,
		},
	},
})
export default registerSkillEventContract

export type RegisterSkillEventContract = typeof registerSkillEventContract
