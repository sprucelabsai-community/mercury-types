import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSource.schema'
import installSkillEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/installSkillEmitTarget.schema'
import installSkillEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/installSkillEmitPayload.schema'

const installSkillEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitTargetAndPayloadSchema  = {
	id: 'installSkillEmitTargetAndPayload',
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
	                options: {schema: installSkillEmitTargetSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: installSkillEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(installSkillEmitTargetAndPayloadSchema)

export default installSkillEmitTargetAndPayloadSchema
