import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSource.schema'
import deleteOrganizationTargetPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/deleteOrganizationTargetPayload.schema'

const deleteOrganizationEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DeleteOrganizationEmitTargetAndPayloadSchema  = {
	id: 'deleteOrganizationEmitTargetAndPayload',
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
	                options: {schema: deleteOrganizationTargetPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(deleteOrganizationEmitTargetAndPayloadSchema)

export default deleteOrganizationEmitTargetAndPayloadSchema
