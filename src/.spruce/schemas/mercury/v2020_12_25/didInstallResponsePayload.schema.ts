import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const didInstallResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DidInstallResponsePayloadSchema  = {
	id: 'didInstallResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	    }
}

SchemaRegistry.getInstance().trackSchema(didInstallResponsePayloadSchema)

export default didInstallResponsePayloadSchema
