import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSource.schema'
import listPeopleEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listPeopleEmitPayload.schema'

const listPeopleEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitTargetAndPayloadSchema  = {
	id: 'listPeopleEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: listPeopleEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listPeopleEmitTargetAndPayloadSchema)

export default listPeopleEmitTargetAndPayloadSchema
