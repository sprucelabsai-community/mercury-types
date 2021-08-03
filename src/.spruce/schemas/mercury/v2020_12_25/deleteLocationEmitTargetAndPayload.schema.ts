import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSource.schema'
import deleteLocationTargetPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/deleteLocationTargetPayload.schema'

const deleteLocationEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DeleteLocationEmitTargetAndPayloadSchema  = {
	id: 'deleteLocationEmitTargetAndPayload',
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
	                options: {schema: deleteLocationTargetPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(deleteLocationEmitTargetAndPayloadSchema)

export default deleteLocationEmitTargetAndPayloadSchema
