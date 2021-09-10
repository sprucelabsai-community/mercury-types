import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import statusFlagsSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/statusFlags.schema'

const permissionDefaultsSchema: SpruceSchemas.Mercury.v2020_12_25.PermissionDefaultsSchema  = {
	id: 'permissionDefaults',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	moduleToImportFromWhenRemote: '@sprucelabs/mercury-types',
	    fields: {
	            /** . */
	            'skill': {
	                type: 'boolean',
	                options: undefined
	            },
	            /** Owner. */
	            'owner': {
	                label: 'Owner',
	                type: 'schema',
	                options: {schema: statusFlagsSchema_v2020_12_25,}
	            },
	            /** Group manager. */
	            'groupManager': {
	                label: 'Group manager',
	                type: 'schema',
	                options: {schema: statusFlagsSchema_v2020_12_25,}
	            },
	            /** Manager. */
	            'manager': {
	                label: 'Manager',
	                type: 'schema',
	                options: {schema: statusFlagsSchema_v2020_12_25,}
	            },
	            /** Teammate. */
	            'teammate': {
	                label: 'Teammate',
	                type: 'schema',
	                options: {schema: statusFlagsSchema_v2020_12_25,}
	            },
	            /** Guest. */
	            'guest': {
	                label: 'Guest',
	                type: 'schema',
	                options: {schema: statusFlagsSchema_v2020_12_25,}
	            },
	            /** Anonymous. */
	            'anonymous': {
	                label: 'Anonymous',
	                type: 'schema',
	                options: {schema: statusFlagsSchema_v2020_12_25,}
	            },
	            /** Logged in. */
	            'loggedIn': {
	                label: 'Logged in',
	                type: 'schema',
	                options: {schema: statusFlagsSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(permissionDefaultsSchema)

export default permissionDefaultsSchema
