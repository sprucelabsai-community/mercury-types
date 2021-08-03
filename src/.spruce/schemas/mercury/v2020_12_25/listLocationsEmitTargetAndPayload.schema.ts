import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSource.schema'
import listLocationsTargetPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listLocationsTargetPayload.schema'
import listLocationsEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listLocationsEmitPayload.schema'

const listLocationsEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitTargetAndPayloadSchema  = {
	id: 'listLocationsEmitTargetAndPayload',
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
	                isRequired: true,
	                options: {schema: listLocationsTargetPayloadSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: listLocationsEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listLocationsEmitTargetAndPayloadSchema)

export default listLocationsEmitTargetAndPayloadSchema
