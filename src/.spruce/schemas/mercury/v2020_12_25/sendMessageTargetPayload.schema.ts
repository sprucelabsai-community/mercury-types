import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const sendMessageTargetPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SendMessageTargetPayloadSchema  = {
	id: 'sendMessageTargetPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'locationId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'personId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'organizationId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'skillId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'roleId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'phone': {
	                type: 'phone',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(sendMessageTargetPayloadSchema)

export default sendMessageTargetPayloadSchema
