import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import permissionContractSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/permissionContract.schema'

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
	            'listenPermissionContract': {
	                type: 'schema',
	                options: {schema: permissionContractSchema_v2020_12_25,}
	            },
	            /** . */
	            'emitPermissionContract': {
	                type: 'schema',
	                options: {schema: permissionContractSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(eventSignatureSchema)

export default eventSignatureSchema
