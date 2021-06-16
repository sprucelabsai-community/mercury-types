import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSignaturesByNameSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSignaturesByName.schema'

const eventContractSchema: SpruceSchemas.Mercury.v2020_12_25.EventContractSchema  = {
	id: 'eventContract',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: 'Event contract',
	description: 'A Mercury Event Contract.',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'eventSignatures': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: eventSignaturesByNameSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(eventContractSchema)

export default eventContractSchema
