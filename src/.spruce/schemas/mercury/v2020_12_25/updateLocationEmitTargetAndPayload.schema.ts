import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSource.schema'
import updateLocationEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/updateLocationEmitTarget.schema'
import updateLocationEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/updateLocationEmitPayload.schema'

const updateLocationEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitTargetAndPayloadSchema  = {
	id: 'updateLocationEmitTargetAndPayload',
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
	                options: {schema: updateLocationEmitTargetSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: updateLocationEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateLocationEmitTargetAndPayloadSchema)

export default updateLocationEmitTargetAndPayloadSchema
