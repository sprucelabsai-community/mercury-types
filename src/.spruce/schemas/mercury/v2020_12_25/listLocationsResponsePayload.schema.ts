import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import locationSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/location.schema'

const listLocationsResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListLocationsResponsePayloadSchema  = {
	id: 'listLocationsResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'locations': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                options: {schema: locationSchema_v2020_07_22,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listLocationsResponsePayloadSchema)

export default listLocationsResponsePayloadSchema
