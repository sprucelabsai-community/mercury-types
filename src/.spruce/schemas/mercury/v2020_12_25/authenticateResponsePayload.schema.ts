import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import authSchemaSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/authSchema.schema'

const authenticateResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.AuthenticateResponsePayloadSchema  = {
	id: 'authenticateResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'type': {
	                type: 'select',
	                isRequired: true,
	                options: {choices: [{"value":"authenticated","label":"Authenticated"},{"value":"anonymous","label":"Anonymous"}],}
	            },
	            /** . */
	            'auth': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: authSchemaSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(authenticateResponsePayloadSchema)

export default authenticateResponsePayloadSchema
