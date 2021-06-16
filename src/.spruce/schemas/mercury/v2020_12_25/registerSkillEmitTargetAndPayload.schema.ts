import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import registerSkillEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/registerSkillEmitPayload.schema'

const registerSkillEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterSkillEmitTargetAndPayloadSchema  = {
	id: 'registerSkillEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: registerSkillEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerSkillEmitTargetAndPayloadSchema)

export default registerSkillEmitTargetAndPayloadSchema
