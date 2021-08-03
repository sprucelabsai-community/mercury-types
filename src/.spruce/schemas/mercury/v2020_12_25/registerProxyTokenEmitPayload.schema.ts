import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const registerProxyTokenEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterProxyTokenEmitPayloadSchema  = {
	id: 'registerProxyTokenEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** Token. */
	            'token': {
	                label: 'Token',
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerProxyTokenEmitPayloadSchema)

export default registerProxyTokenEmitPayloadSchema
