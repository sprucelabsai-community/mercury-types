import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSource.schema'
import requestPinEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/requestPinEmitPayload.schema'

const requestPinEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RequestPinEmitTargetAndPayloadSchema  = {
	id: 'requestPinEmitTargetAndPayload',
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
	                options: {schema: requestPinEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(requestPinEmitTargetAndPayloadSchema)

export default requestPinEmitTargetAndPayloadSchema
