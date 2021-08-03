import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSource.schema'
import unregisterListenersEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/unregisterListenersEmitPayload.schema'

const unregisterListenersEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UnregisterListenersEmitTargetAndPayloadSchema  = {
	id: 'unregisterListenersEmitTargetAndPayload',
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
	                options: {schema: unregisterListenersEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(unregisterListenersEmitTargetAndPayloadSchema)

export default unregisterListenersEmitTargetAndPayloadSchema
