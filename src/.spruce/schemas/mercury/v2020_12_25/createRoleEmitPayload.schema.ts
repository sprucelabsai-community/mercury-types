import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const createRoleEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.CreateRoleEmitPayloadSchema  = {
	id: 'createRoleEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** Name. */
	            'name': {
	                label: 'Name',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Base. Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role. */
	            'base': {
	                label: 'Base',
	                type: 'select',
	                hint: 'Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role.',
	                options: {choices: [{"label":"Owner","value":"owner"},{"label":"Group manager","value":"groupManager"},{"label":"Manager","value":"manager"},{"label":"Teammate","value":"teammate"},{"label":"Guest","value":"guest"},{"label":"Anonymous","value":"anonymous"},{"label":"Logged in","value":"loggedIn"}],}
	            },
	            /** Description. */
	            'description': {
	                label: 'Description',
	                type: 'text',
	                options: undefined
	            },
	            /** . */
	            'dateDeleted': {
	                type: 'number',
	                options: undefined
	            },
	            /** Public. Should I let people that are not part of this organization this role? */
	            'isPublic': {
	                label: 'Public',
	                type: 'boolean',
	                hint: 'Should I let people that are not part of this organization this role?',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createRoleEmitPayloadSchema)

export default createRoleEmitPayloadSchema
