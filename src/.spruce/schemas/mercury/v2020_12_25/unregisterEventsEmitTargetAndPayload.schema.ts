import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSource.schema'
import unregisterEventsEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/unregisterEventsEmitPayload.schema'

const unregisterEventsEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UnregisterEventsEmitTargetAndPayloadSchema  = {
	id: 'unregisterEventsEmitTargetAndPayload',
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
	                options: {schema: unregisterEventsEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(unregisterEventsEmitTargetAndPayloadSchema)

export default unregisterEventsEmitTargetAndPayloadSchema
