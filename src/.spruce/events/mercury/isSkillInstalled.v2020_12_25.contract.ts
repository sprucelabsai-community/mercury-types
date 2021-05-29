import isSkillInstalledEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/isSkillInstalledEmitTargetAndPayload.schema'
import isSkillInstalledResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/isSkillInstalledResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const isSkillInstalledEventContract = buildEventContract({
	eventSignatures: {
		'is-skill-installed::v2020_12_25': {
			emitPayloadSchema: isSkillInstalledEmitTargetAndPayloadSchema,
			responsePayloadSchema: isSkillInstalledResponsePayloadSchema,
		},
	},
})
export default isSkillInstalledEventContract

export type IsSkillInstalledEventContract = typeof isSkillInstalledEventContract
