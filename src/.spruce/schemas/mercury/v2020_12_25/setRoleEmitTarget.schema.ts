import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const setRoleEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.SetRoleEmitTargetSchema  = {
	id: 'setRoleEmitTarget',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'organizationId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(setRoleEmitTargetSchema)

export default setRoleEmitTargetSchema
