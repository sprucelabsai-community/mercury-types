/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

import { default as SchemaEntity } from '@sprucelabs/schema'
import * as SpruceSchema from '@sprucelabs/schema'





export declare namespace SpruceErrors.Mercury {

	
	export interface InvalidEventContract {
		
	}

	export interface InvalidEventContractSchema extends SpruceSchema.Schema {
		id: 'invalidEventContract',
		namespace: 'Mercury',
		name: 'Invalid event contract',
		    fields: {
		    }
	}

	export type InvalidEventContractEntity = SchemaEntity<SpruceErrors.Mercury.InvalidEventContractSchema>

}




