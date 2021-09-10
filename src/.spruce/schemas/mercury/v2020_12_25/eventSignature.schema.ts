import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import permissionReferenceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/permissionReference.schema'

const eventSignatureSchema: SpruceSchemas.Mercury.v2020_12_25.EventSignatureSchema  = {
	id: 'eventSignature',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: 'Event Signature',
	    fields: {
	            /** . */
	            'isGlobal': {
	                type: 'boolean',
	                defaultValue: false,
	                options: undefined
	            },
	            /** . */
	            'responsePayloadSchema': {
	                type: 'raw',
	                options: {valueType: `SpruceSchema.Schema`,}
	            },
	            /** . */
	            'emitPayloadSchema': {
	                type: 'raw',
	                options: {valueType: `SpruceSchema.Schema`,}
	            },
	            /** . */
	            'listenPermissions': {
	                type: 'schema',
	                options: {schema: permissionReferenceSchema_v2020_12_25,}
	            },
	            /** . */
	            'emitPermissions': {
	                type: 'schema',
	                options: {schema: permissionReferenceSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(eventSignatureSchema)

export default eventSignatureSchema
