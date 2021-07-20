import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const updatePersonEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.UpdatePersonEmitTargetSchema  = {
	id: 'updatePersonEmitTarget',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'personId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updatePersonEmitTargetSchema)

export default updatePersonEmitTargetSchema
