import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventContractSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventContract.schema'

const registerEventsEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterEventsEmitPayloadSchema  = {
	id: 'registerEventsEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	importsWhenRemote: ['import \'@sprucelabs/mercury-types\'',],
	    fields: {
	            /** . */
	            'contract': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: eventContractSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerEventsEmitPayloadSchema)

export default registerEventsEmitPayloadSchema
