import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import messageSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/message.schema'

const sendMessageResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SendMessageResponsePayloadSchema  = {
	id: 'sendMessageResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'message': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: messageSchema_v2020_07_22,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(sendMessageResponsePayloadSchema)

export default sendMessageResponsePayloadSchema
