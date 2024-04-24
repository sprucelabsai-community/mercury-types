import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceErrors } from '../errors.types'



const invalidEventContractSchema: SpruceErrors.Mercury.InvalidEventContractSchema  = {
	id: 'invalidEventContract',
	namespace: 'Mercury',
	name: 'Invalid event contract',
	    fields: {
	    }
}

SchemaRegistry.getInstance().trackSchema(invalidEventContractSchema)

export default invalidEventContractSchema
