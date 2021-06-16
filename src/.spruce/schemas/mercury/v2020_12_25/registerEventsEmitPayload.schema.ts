import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventContractSchema_v2020_09_01 from '#spruce/schemas/mercury/v2020_09_01/eventContract.schema'

const registerEventsEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterEventsEmitPayloadSchema  = {
	id: 'registerEventsEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'contract': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: eventContractSchema_v2020_09_01,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerEventsEmitPayloadSchema)

export default registerEventsEmitPayloadSchema
