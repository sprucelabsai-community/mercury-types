import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import permissionSchema from '#spruce/schemas/mercury/v2020_09_01/permission.schema'

const permissionContractSchema: SpruceSchemas.Mercury.v2020_09_01.PermissionContractSchema  = {
	id: 'permissionContract',
	version: 'v2020_09_01',
	namespace: 'Mercury',
	name: 'Permission contract',
	description: 'A Mercury Permission Contract',
	    fields: {
	            /** . */
	            'id': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Name. Human readable name for this contract */
	            'name': {
	                label: 'Name',
	                type: 'text',
	                isRequired: true,
	                hint: 'Human readable name for this contract',
	                options: undefined
	            },
	            /** Description. */
	            'description': {
	                label: 'Description',
	                type: 'text',
	                options: undefined
	            },
	            /** Require all permissions. */
	            'requireAllPermissions': {
	                label: 'Require all permissions',
	                type: 'boolean',
	                defaultValue: false,
	                options: undefined
	            },
	            /** . */
	            'permissions': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: permissionSchema,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(permissionContractSchema)

export default permissionContractSchema
