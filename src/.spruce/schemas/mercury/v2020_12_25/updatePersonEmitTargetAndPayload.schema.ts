import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import updatePersonEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/updatePersonEmitTarget.schema'
import updatePersonEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/updatePersonEmitPayload.schema'

const updatePersonEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UpdatePersonEmitTargetAndPayloadSchema  = {
	id: 'updatePersonEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'target': {
	                type: 'schema',
	                options: {schema: updatePersonEmitTargetSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: updatePersonEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updatePersonEmitTargetAndPayloadSchema)

export default updatePersonEmitTargetAndPayloadSchema
