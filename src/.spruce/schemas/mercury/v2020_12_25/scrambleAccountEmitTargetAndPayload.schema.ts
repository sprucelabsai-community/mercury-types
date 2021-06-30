import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import scrambleAccountEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/scrambleAccountEmitTarget.schema'

const scrambleAccountEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ScrambleAccountEmitTargetAndPayloadSchema  = {
	id: 'scrambleAccountEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'target': {
	                type: 'schema',
	                options: {schema: scrambleAccountEmitTargetSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(scrambleAccountEmitTargetAndPayloadSchema)

export default scrambleAccountEmitTargetAndPayloadSchema
