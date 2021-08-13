import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const permissionReferenceSchema: SpruceSchemas.Mercury.v2020_12_25.PermissionReferenceSchema  = {
	id: 'permissionReference',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'contractId': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'requiredPermissionsAll': {
	                type: 'text',
	                isArray: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(permissionReferenceSchema)

export default permissionReferenceSchema
