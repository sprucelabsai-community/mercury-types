import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const setRoleEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SetRoleEmitPayloadSchema  = {
	id: 'setRoleEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'personId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'roleId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(setRoleEmitPayloadSchema)

export default setRoleEmitPayloadSchema
