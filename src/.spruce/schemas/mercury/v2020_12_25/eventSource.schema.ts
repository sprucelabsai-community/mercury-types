import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const eventSourceSchema: SpruceSchemas.Mercury.v2020_12_25.EventSourceSchema  = {
	id: 'eventSource',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** Proxy token. */
	            'proxyToken': {
	                label: 'Proxy token',
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(eventSourceSchema)

export default eventSourceSchema
