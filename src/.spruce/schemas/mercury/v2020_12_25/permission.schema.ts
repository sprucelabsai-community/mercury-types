import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import permissionDefaultsSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/permissionDefaults.schema'
import statusFlagsSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/statusFlags.schema'

const permissionSchema: SpruceSchemas.Mercury.v2020_12_25.PermissionSchema  = {
	id: 'permission',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: 'Permission',
	    fields: {
	            /** id. Hyphen separated id for this permission, e.g. can-unlock-doors */
	            'id': {
	                label: 'id',
	                type: 'text',
	                isRequired: true,
	                hint: 'Hyphen separated id for this permission, e.g. can-unlock-doors',
	                options: undefined
	            },
	            /** Name. Human readable name for this permission */
	            'name': {
	                label: 'Name',
	                type: 'text',
	                isRequired: true,
	                hint: 'Human readable name for this permission',
	                options: undefined
	            },
	            /** Description. */
	            'description': {
	                label: 'Description',
	                type: 'text',
	                options: undefined
	            },
	            /** Require all statuses. */
	            'requireAllStatuses': {
	                label: 'Require all statuses',
	                type: 'boolean',
	                defaultValue: false,
	                options: undefined
	            },
	            /** . */
	            'defaults': {
	                type: 'schema',
	                options: {schema: permissionDefaultsSchema_v2020_12_25,}
	            },
	            /** . */
	            'can': {
	                type: 'schema',
	                options: {schema: statusFlagsSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(permissionSchema)

export default permissionSchema
