import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventSource.schema'
import doesHonorPermissionContractEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/doesHonorPermissionContractEmitTarget.schema'
import doesHonorPermissionContractEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/doesHonorPermissionContractEmitPayload.schema'

const doesHonorPermissionContractEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitTargetAndPayloadSchema  = {
	id: 'doesHonorPermissionContractEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2020_12_25,}
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                options: {schema: doesHonorPermissionContractEmitTargetSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: doesHonorPermissionContractEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(doesHonorPermissionContractEmitTargetAndPayloadSchema)

export default doesHonorPermissionContractEmitTargetAndPayloadSchema
