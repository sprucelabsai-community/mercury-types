import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSource.schema'

const getConversationTopicsEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetConversationTopicsEmitTargetAndPayloadSchema  = {
	id: 'getConversationTopicsEmitTargetAndPayload',
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
	    }
}

SchemaRegistry.getInstance().trackSchema(getConversationTopicsEmitTargetAndPayloadSchema)

export default getConversationTopicsEmitTargetAndPayloadSchema
