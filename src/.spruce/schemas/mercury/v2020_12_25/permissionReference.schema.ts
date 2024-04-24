import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const permissionReferenceSchema: SpruceSchemas.Mercury.v2020_12_25.PermissionReferenceSchema  = {
	id: 'permissionReference',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	importsWhenRemote: ['import * as MercuryTypes from \'@sprucelabs/mercury-types\'',],
	moduleToImportFromWhenRemote: '@sprucelabs/mercury-types',
	typeSuffix: '<ContractId extends MercuryTypes.PermissionContractId = MercuryTypes.PermissionContractId>',
	    fields: {
	            /** . */
	            'contractId': {
	                type: 'raw',
	                isRequired: true,
	                options: {valueType: `ContractId`,}
	            },
	            /** . */
	            'permissionIdsAny': {
	                type: 'raw',
	                isArray: true,
	                options: {valueType: `MercuryTypes.PermissionId<ContractId>`,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(permissionReferenceSchema)

export default permissionReferenceSchema
