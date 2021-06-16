import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import createLocationTargetPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/createLocationTargetPayload.schema'
import createLocationEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/createLocationEmitPayload.schema'

const createLocationEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.CreateLocationEmitTargetAndPayloadSchema  = {
	id: 'createLocationEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: createLocationTargetPayloadSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: createLocationEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(createLocationEmitTargetAndPayloadSchema)

export default createLocationEmitTargetAndPayloadSchema
