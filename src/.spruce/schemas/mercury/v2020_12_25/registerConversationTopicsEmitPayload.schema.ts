import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import registerConversationTopicEmitPayloadTopicSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/registerConversationTopicEmitPayloadTopic.schema'

const registerConversationTopicsEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicsEmitPayloadSchema  = {
	id: 'registerConversationTopicsEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'topics': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                options: {schema: registerConversationTopicEmitPayloadTopicSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerConversationTopicsEmitPayloadSchema)

export default registerConversationTopicsEmitPayloadSchema
