import uninstallSkillEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/uninstallSkillEmitTargetAndPayload.schema'
import unInstallSkillResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/unInstallSkillResponsePayload.schema'
import { buildEventContract } from '../../../utilities'

const uninstallSkillEventContract = buildEventContract({
	eventSignatures: {
		'uninstall-skill::v2020_12_25': {
			emitPayloadSchema: uninstallSkillEmitTargetAndPayloadSchema,
			responsePayloadSchema: unInstallSkillResponsePayloadSchema,
		},
	},
})
export default uninstallSkillEventContract

export type UninstallSkillEventContract = typeof uninstallSkillEventContract
