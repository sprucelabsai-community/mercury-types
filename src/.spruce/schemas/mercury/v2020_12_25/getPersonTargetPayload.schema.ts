import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getPersonTargetPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetPersonTargetPayloadSchema  = {
	id: 'getPersonTargetPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'personId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'phone': {
	                type: 'phone',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getPersonTargetPayloadSchema)

export default getPersonTargetPayloadSchema
