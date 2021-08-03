import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSource.schema'
import listSkillsEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listSkillsEmitPayload.schema'

const listSkillsEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListSkillsEmitTargetAndPayloadSchema  = {
	id: 'listSkillsEmitTargetAndPayload',
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
	            'payload': {
	                type: 'schema',
	                options: {schema: listSkillsEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listSkillsEmitTargetAndPayloadSchema)

export default listSkillsEmitTargetAndPayloadSchema
