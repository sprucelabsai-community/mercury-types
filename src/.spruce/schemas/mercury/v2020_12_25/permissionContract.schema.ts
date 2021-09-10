import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import permissionSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/permission.schema'

const permissionContractSchema: SpruceSchemas.Mercury.v2020_12_25.PermissionContractSchema  = {
	id: 'permissionContract',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: 'Permission contract',
	moduleToImportFromWhenRemote: '@sprucelabs/mercury-types',
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
	                options: {schema: permissionSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(permissionContractSchema)

export default permissionContractSchema
