import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSource.schema'
import scrambleAccountEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/scrambleAccountEmitTarget.schema'

const scrambleAccountEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ScrambleAccountEmitTargetAndPayloadSchema  = {
	id: 'scrambleAccountEmitTargetAndPayload',
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
	            'target': {
	                type: 'schema',
	                options: {schema: scrambleAccountEmitTargetSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(scrambleAccountEmitTargetAndPayloadSchema)

export default scrambleAccountEmitTargetAndPayloadSchema
