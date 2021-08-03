import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSource.schema'
import createPersonEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/createPersonEmitPayload.schema'

const createPersonEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.CreatePersonEmitTargetAndPayloadSchema  = {
	id: 'createPersonEmitTargetAndPayload',
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
	                isRequired: true,
	                options: {schema: createPersonEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createPersonEmitTargetAndPayloadSchema)

export default createPersonEmitTargetAndPayloadSchema
