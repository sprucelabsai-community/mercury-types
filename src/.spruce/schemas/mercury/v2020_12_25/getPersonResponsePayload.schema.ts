import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import personSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/person.schema'

const getPersonResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetPersonResponsePayloadSchema  = {
	id: 'getPersonResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'person': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: personSchema_v2020_07_22,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getPersonResponsePayloadSchema)

export default getPersonResponsePayloadSchema
