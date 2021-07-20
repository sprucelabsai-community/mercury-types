import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import listPeopleEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listPeopleEmitPayload.schema'

const listPeopleEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitTargetAndPayloadSchema  = {
	id: 'listPeopleEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: listPeopleEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listPeopleEmitTargetAndPayloadSchema)

export default listPeopleEmitTargetAndPayloadSchema
