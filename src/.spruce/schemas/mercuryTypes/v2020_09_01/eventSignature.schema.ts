import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import permissionContractSchema from '#spruce/schemas/mercuryTypes/v2020_09_01/permissionContract.schema'

const eventSignatureSchema: SpruceSchemas.MercuryTypes.v2020_09_01.EventSignatureSchema  = {
	id: 'eventSignature',
	version: 'v2020_09_01',
	namespace: 'MercuryTypes',
	name: 'Event Signature',
	    fields: {
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
	                options: {schema: permissionContractSchema,}
	            },
	            /** . */
	            'emitPermissionContract': {
	                type: 'schema',
	                options: {schema: permissionContractSchema,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(eventSignatureSchema)

export default eventSignatureSchema
