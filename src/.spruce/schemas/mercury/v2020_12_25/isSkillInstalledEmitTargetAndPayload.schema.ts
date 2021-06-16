import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import isSkillInstalledTargetPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/isSkillInstalledTargetPayload.schema'
import isSkillInstalledEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/isSkillInstalledEmitPayload.schema'

const isSkillInstalledEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitTargetAndPayloadSchema  = {
	id: 'isSkillInstalledEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: isSkillInstalledTargetPayloadSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: isSkillInstalledEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(isSkillInstalledEmitTargetAndPayloadSchema)

export default isSkillInstalledEmitTargetAndPayloadSchema
