import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSource.schema'

const healthEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.HealthEmitTargetAndPayloadSchema  = {
	id: 'healthEmitTargetAndPayload',
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

SchemaRegistry.getInstance().trackSchema(healthEmitTargetAndPayloadSchema)

export default healthEmitTargetAndPayloadSchema
