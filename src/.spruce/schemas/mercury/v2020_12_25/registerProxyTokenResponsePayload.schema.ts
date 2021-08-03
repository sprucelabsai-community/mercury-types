import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const registerProxyTokenResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterProxyTokenResponsePayloadSchema  = {
	id: 'registerProxyTokenResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	    }
}

SchemaRegistry.getInstance().trackSchema(registerProxyTokenResponsePayloadSchema)

export default registerProxyTokenResponsePayloadSchema
