import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSource.schema'
import sendMessageTargetPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/sendMessageTargetPayload.schema'
import sendMessageEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/sendMessageEmitPayload.schema'

const sendMessageEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SendMessageEmitTargetAndPayloadSchema  = {
	id: 'sendMessageEmitTargetAndPayload',
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
	                options: {schema: sendMessageTargetPayloadSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: sendMessageEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(sendMessageEmitTargetAndPayloadSchema)

export default sendMessageEmitTargetAndPayloadSchema
