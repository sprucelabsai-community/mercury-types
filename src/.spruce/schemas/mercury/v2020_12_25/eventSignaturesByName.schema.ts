import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSignatureSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSignature.schema'

const eventSignaturesByNameSchema: SpruceSchemas.Mercury.v2020_12_25.EventSignaturesByNameSchema  = {
	id: 'eventSignaturesByName',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	dynamicFieldSignature: { 
	    type: 'schema',
	    keyName: 'eventName',
	    isRequired: true,
	    options: {schema: eventSignatureSchema_v2020_12_25,}
	},}

SchemaRegistry.getInstance().trackSchema(eventSignaturesByNameSchema)

export default eventSignaturesByNameSchema
