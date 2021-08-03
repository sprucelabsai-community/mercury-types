import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import registerProxyTokenEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/registerProxyTokenEmitPayload.schema'

const registerProxyTokenEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterProxyTokenEmitTargetAndPayloadSchema  = {
	id: 'registerProxyTokenEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: registerProxyTokenEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerProxyTokenEmitTargetAndPayloadSchema)

export default registerProxyTokenEmitTargetAndPayloadSchema
