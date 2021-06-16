import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventContractSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventContract.schema'

const getEventContractsResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetEventContractsResponsePayloadSchema  = {
	id: 'getEventContractsResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'contracts': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                options: {schema: eventContractSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getEventContractsResponsePayloadSchema)

export default getEventContractsResponsePayloadSchema
