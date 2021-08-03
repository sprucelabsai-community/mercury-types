import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSource.schema'
import unInstallSkillEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/unInstallSkillEmitTarget.schema'

const uninstallSkillEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UninstallSkillEmitTargetAndPayloadSchema  = {
	id: 'uninstallSkillEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2020_12_25,}
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: unInstallSkillEmitTargetSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(uninstallSkillEmitTargetAndPayloadSchema)

export default uninstallSkillEmitTargetAndPayloadSchema
