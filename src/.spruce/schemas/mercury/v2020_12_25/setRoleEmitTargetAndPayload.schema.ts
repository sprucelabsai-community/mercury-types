import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import setRoleEmitTargetSchema from '#spruce/schemas/mercury/v2020_12_25/setRoleEmitTarget.schema'
import setRoleEmitPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/setRoleEmitPayload.schema'

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
	                options: {schema: setRoleEmitTargetSchema,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: setRoleEmitPayloadSchema,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(setRoleEmitTargetAndPayloadSchema)

export default setRoleEmitTargetAndPayloadSchema
