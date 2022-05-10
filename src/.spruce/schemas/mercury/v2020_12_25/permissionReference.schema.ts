import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const permissionReferenceSchema: SpruceSchemas.Mercury.v2020_12_25.PermissionReferenceSchema  = {
	id: 'permissionReference',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	moduleToImportFromWhenRemote: '@sprucelabs/mercury-types',
	    fields: {
	            /** . */
	            'contractId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'permissionIdsAny': {
	                type: 'id',
	                isArray: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(permissionReferenceSchema)

export default permissionReferenceSchema
