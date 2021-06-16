import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import roleSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/role.schema'

const updateRoleResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UpdateRoleResponsePayloadSchema  = {
	id: 'updateRoleResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'role': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: roleSchema_v2020_07_22,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateRoleResponsePayloadSchema)

export default updateRoleResponsePayloadSchema
