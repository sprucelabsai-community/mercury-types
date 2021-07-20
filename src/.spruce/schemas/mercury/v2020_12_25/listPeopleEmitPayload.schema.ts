import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const listPeopleEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitPayloadSchema  = {
	id: 'listPeopleEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'ids': {
	                type: 'id',
	                isArray: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listPeopleEmitPayloadSchema)

export default listPeopleEmitPayloadSchema
