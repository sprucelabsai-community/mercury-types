import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSource.schema'
import messageTargetSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/messageTarget.schema'
import didMessageEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/didMessageEmitPayload.schema'

const didMessageEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DidMessageEmitTargetAndPayloadSchema  = {
	id: 'didMessageEmitTargetAndPayload',
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
	                options: {schema: messageTargetSchema_v2020_07_22,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: didMessageEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(didMessageEmitTargetAndPayloadSchema)

export default didMessageEmitTargetAndPayloadSchema
