import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import personSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/person.schema'
import skillSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/skill.schema'

const authSchemaSchema: SpruceSchemas.Mercury.v2020_12_25.AuthSchemaSchema  = {
	id: 'authSchema',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'person': {
	                type: 'schema',
	                options: {schema: personSchema_v2020_07_22,}
	            },
	            /** . */
	            'skill': {
	                type: 'schema',
	                options: {schema: skillSchema_v2020_07_22,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(authSchemaSchema)

export default authSchemaSchema
