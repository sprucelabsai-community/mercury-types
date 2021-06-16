import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import confirmPinEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/confirmPinEmitPayload.schema'

const confirmPinEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ConfirmPinEmitTargetAndPayloadSchema  = {
	id: 'confirmPinEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: confirmPinEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(confirmPinEmitTargetAndPayloadSchema)

export default confirmPinEmitTargetAndPayloadSchema
