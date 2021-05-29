import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const setRoleResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SetRoleResponsePayloadSchema  = {
	id: 'setRoleResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	    }
}

SchemaRegistry.getInstance().trackSchema(setRoleResponsePayloadSchema)

export default setRoleResponsePayloadSchema
