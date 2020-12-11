/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

import { default as SchemaEntity } from '@sprucelabs/schema'
import * as SpruceSchema from '@sprucelabs/schema'




import AbstractSpruceError from '@sprucelabs/error'

export declare namespace SpruceErrors.MercuryTypes {

	
	export interface MercuryResponseError {
		
			
			'responseErrors': (AbstractSpruceError<any>)[]
	}

	export interface MercuryResponseErrorSchema extends SpruceSchema.Schema {
		id: 'mercuryResponseError',
		namespace: 'MercuryTypes',
		name: 'Mercury response error',
		    fields: {
		            /** . */
		            'responseErrors': {
		                type: 'raw',
		                isRequired: true,
		                isArray: true,
		                options: {valueType: `AbstractSpruceError<any>`,}
		            },
		    }
	}

	export type MercuryResponseErrorEntity = SchemaEntity<SpruceErrors.MercuryTypes.MercuryResponseErrorSchema>

}



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




