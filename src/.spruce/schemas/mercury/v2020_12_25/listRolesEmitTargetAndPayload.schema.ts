import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSource.schema'
import listRolesEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listRolesEmitTarget.schema'
import listRolesEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listRolesEmitPayload.schema'

const listRolesEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitTargetAndPayloadSchema  = {
	id: 'listRolesEmitTargetAndPayload',
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
	                options: {schema: listRolesEmitTargetSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: listRolesEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listRolesEmitTargetAndPayloadSchema)

export default listRolesEmitTargetAndPayloadSchema
