import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSource.schema'

const whoamiEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.WhoamiEmitTargetAndPayloadSchema  = {
	id: 'whoamiEmitTargetAndPayload',
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

SchemaRegistry.getInstance().trackSchema(whoamiEmitTargetAndPayloadSchema)

export default whoamiEmitTargetAndPayloadSchema
