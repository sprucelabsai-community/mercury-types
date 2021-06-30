import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const scrambleAccountEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.ScrambleAccountEmitTargetSchema  = {
	id: 'scrambleAccountEmitTarget',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'personId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(scrambleAccountEmitTargetSchema)

export default scrambleAccountEmitTargetSchema
