import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getPersonEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitPayloadSchema  = {
	id: 'getPersonEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'includePrivateFields': {
	                type: 'boolean',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getPersonEmitPayloadSchema)

export default getPersonEmitPayloadSchema
