import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import profileImageSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/profileImage.schema'

const updatePersonEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UpdatePersonEmitPayloadSchema  = {
	id: 'updatePersonEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** First name. */
	            'firstName': {
	                label: 'First name',
	                type: 'text',
	                isPrivate: true,
	                options: undefined
	            },
	            /** Last name. */
	            'lastName': {
	                label: 'Last name',
	                type: 'text',
	                isPrivate: true,
	                options: undefined
	            },
	            /** Profile photos. */
	            'profileImages': {
	                label: 'Profile photos',
	                type: 'schema',
	                options: {schema: profileImageSchema_v2020_07_22,}
	            },
	            /** . */
	            'dateCreated': {
	                type: 'number',
	                options: undefined
	            },
	            /** . */
	            'dateScrambled': {
	                type: 'number',
	                options: undefined
	            },
	            /** Phone. A number that can be texted */
	            'phone': {
	                label: 'Phone',
	                type: 'phone',
	                isPrivate: true,
	                hint: 'A number that can be texted',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updatePersonEmitPayloadSchema)

export default updatePersonEmitPayloadSchema
