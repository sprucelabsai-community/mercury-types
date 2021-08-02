import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import getPersonTargetPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/getPersonTargetPayload.schema'
import getPersonEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/getPersonEmitPayload.schema'

const getPersonEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitTargetAndPayloadSchema  = {
	id: 'getPersonEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'target': {
	                type: 'schema',
	                options: {schema: getPersonTargetPayloadSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: getPersonEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getPersonEmitTargetAndPayloadSchema)

export default getPersonEmitTargetAndPayloadSchema
