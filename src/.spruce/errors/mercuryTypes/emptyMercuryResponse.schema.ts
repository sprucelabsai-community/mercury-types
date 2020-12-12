import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceErrors } from '../errors.types'



const emptyMercuryResponseSchema: SpruceErrors.MercuryTypes.EmptyMercuryResponseSchema  = {
	id: 'emptyMercuryResponse',
	namespace: 'MercuryTypes',
	name: 'empty mercury response',
	    fields: {
	    }
}

SchemaRegistry.getInstance().trackSchema(emptyMercuryResponseSchema)

export default emptyMercuryResponseSchema
