import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import personSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/person.schema'

const listPeopleResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListPeopleResponsePayloadSchema  = {
	id: 'listPeopleResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'people': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                options: {schema: personSchema_v2020_07_22,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listPeopleResponsePayloadSchema)

export default listPeopleResponsePayloadSchema
