import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import locationSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/location.schema'

const getLocationResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetLocationResponsePayloadSchema  = {
	id: 'getLocationResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'location': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: locationSchema_v2020_07_22,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getLocationResponsePayloadSchema)

export default getLocationResponsePayloadSchema
