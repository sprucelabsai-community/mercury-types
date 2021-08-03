import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSource.schema'
import getRoleEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/getRoleEmitTarget.schema'

const getRoleEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetRoleEmitTargetAndPayloadSchema  = {
	id: 'getRoleEmitTargetAndPayload',
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
	                options: {schema: getRoleEmitTargetSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getRoleEmitTargetAndPayloadSchema)

export default getRoleEmitTargetAndPayloadSchema
