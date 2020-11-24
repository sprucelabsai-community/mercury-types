/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

import { default as SchemaEntity } from '@sprucelabs/schema'
import * as SpruceSchema from '@sprucelabs/schema'





export declare namespace SpruceErrors.MercuryTypes {

	
	export interface InvalidEventName {
		
			
			'eventNameWithOptionalNamespace': string
			
			'validNames': string[]
	}

	export interface InvalidEventNameSchema extends SpruceSchema.Schema {
		id: 'invalidEventName',
		namespace: 'MercuryTypes',
		name: 'Invalid event name',
		    fields: {
		            /** . */
		            'eventNameWithOptionalNamespace': {
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'validNames': {
		                type: 'text',
		                isRequired: true,
		                isArray: true,
		                options: undefined
		            },
		    }
	}

	export type InvalidEventNameEntity = SchemaEntity<SpruceErrors.MercuryTypes.InvalidEventNameSchema>

}




