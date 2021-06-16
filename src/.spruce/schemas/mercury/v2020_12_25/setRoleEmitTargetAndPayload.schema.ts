import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import setRoleEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/setRoleEmitTarget.schema'
import setRoleEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/setRoleEmitPayload.schema'

const setRoleEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SetRoleEmitTargetAndPayloadSchema  = {
	id: 'setRoleEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: setRoleEmitTargetSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: setRoleEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(setRoleEmitTargetAndPayloadSchema)

export default setRoleEmitTargetAndPayloadSchema
