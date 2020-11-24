import { FieldDefinitions } from '#spruce/schemas/fields/fields.types'

import fieldClassMap from '#spruce/schemas/fields/fieldClassMap'
import { TemplateRenderAs, FieldTemplateDetailOptions } from '@sprucelabs/schema'


// @ts-ignore
import * as SpruceSchema from '@sprucelabs/schema'

const schemaTemplateItems = [{"id":"permission","namespace":"MercuryTypes","schema":{"version":"v2020_09_01","id":"permission","name":"Permission","fields":{"id":{"type":"text","label":"id","isRequired":true,"hint":"Hyphen separated di for this permission, e.g. can-unlock-doors"},"name":{"type":"text","label":"Name","isRequired":true,"hint":"Human readable name for this permission"},"description":{"type":"text","label":"Description"},"requireAllStatuses":{"type":"boolean","label":"Require all statuses","defaultValue":false},"defaultsByRoleBase":{"type":"schema","options":{"schemaIds":[{"id":"defaultsByRole","version":"v2020_09_01"}]}},"can":{"type":"schema","options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}}},"nameReadable":"Permission","nameCamel":"permission","namePascal":"Permission","isNested":true,"destinationDir":"#spruce/schemas"},{"id":"permissionContract","namespace":"MercuryTypes","schema":{"version":"v2020_09_01","id":"permissionContract","fields":{"id":{"type":"text","isRequired":true},"name":{"type":"text","label":"Name","isRequired":true,"hint":"Human readable name for this contract"},"description":{"type":"text","label":"Description"},"requireAllPermissions":{"type":"boolean","label":"Require all permissions","defaultValue":false},"permissions":{"type":"schema","isRequired":true,"isArray":true,"options":{"schemaIds":[{"id":"permission","version":"v2020_09_01"}]}}},"name":"Permission contract","description":""},"nameReadable":"Permission contract","nameCamel":"permissionContract","namePascal":"PermissionContract","isNested":false,"destinationDir":"#spruce/schemas"},{"id":"eventSignature","namespace":"MercuryTypes","schema":{"version":"v2020_09_01","id":"eventSignature","name":"Event Signature","description":"","fields":{"eventNameWithOptionalNamespace":{"type":"text","isRequired":true},"responsePayloadSchema":{"type":"raw","options":{"valueType":"SpruceSchema.ISchema"}},"emitPayloadSchema":{"type":"raw","options":{"valueType":"SpruceSchema.ISchema"}},"listenPermissionContract":{"type":"schema","options":{"schemaIds":[{"version":"v2020_09_01","id":"permissionContract"}]}},"emitPermissionContract":{"type":"schema","options":{"schemaIds":[{"version":"v2020_09_01","id":"permissionContract"}]}}}},"nameReadable":"Event Signature","nameCamel":"eventSignature","namePascal":"EventSignature","isNested":true,"destinationDir":"#spruce/schemas"},{"id":"eventContract","namespace":"MercuryTypes","schema":{"id":"eventContract","name":"Event contract","description":"","fields":{"eventSignatures":{"type":"schema","isRequired":true,"isArray":true,"options":{"schemaIds":[{"id":"eventSignature","version":"v2020_09_01"}]}}},"version":"v2020_09_01"},"nameReadable":"Event contract","nameCamel":"eventContract","namePascal":"EventContract","isNested":false,"destinationDir":"#spruce/schemas"},{"id":"statusFlags","namespace":"MercuryTypes","schema":{"version":"v2020_09_01","id":"statusFlags","fields":{"default":{"type":"boolean","hint":"What is the fallback if no status is set?"},"clockedIn":{"label":"Clocked in","hint":"Is the person clocked in and ready to rock?","type":"boolean"},"clockedOut":{"label":"Clocked out","hint":"When someone is not working (off the clock).","type":"boolean"},"onPrem":{"label":"On premise","hint":"Are they at work (maybe working, maybe visiting).","type":"boolean"},"offPrem":{"label":"Off premise","hint":"They aren't at the office or shop.","type":"boolean"}}},"nameReadable":"statusFlags","nameCamel":"statusFlags","namePascal":"StatusFlags","isNested":true,"destinationDir":"#spruce/schemas"},{"id":"defaultsByRole","namespace":"MercuryTypes","schema":{"version":"v2020_09_01","id":"defaultsByRole","fields":{"owner":{"label":"Owner","type":"schema","options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}},"groupManager":{"label":"Group manager","type":"schema","options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}},"manager":{"label":"Manager","type":"schema","options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}},"teammate":{"label":"Teammate","type":"schema","options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}},"guest":{"label":"Guest","type":"schema","options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}},"anonymous":{"label":"Anonymous","type":"schema","options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}}},"nameReadable":"defaultsByRole","nameCamel":"defaultsByRole","namePascal":"DefaultsByRole","isNested":true,"destinationDir":"#spruce/schemas"}]

const generateTypeLiteral = (definition: FieldDefinitions, renderAs: TemplateRenderAs, importAs: string) => {
	const options:SpruceSchema.FieldTemplateDetailOptions<FieldDefinitions> = {
		language: 'ts',
		// @ts-ignore
		templateItems: schemaTemplateItems,
		globalNamespace: 'SpruceSchemas',
		definition,
		importAs,
		renderAs
	}

	const FieldClass = fieldClassMap[definition.type]
	const details = FieldClass.generateTemplateDetails(
		options as FieldTemplateDetailOptions<any>
	)
	
	return details.valueType
}


const valueTypes = {
	"MercuryTypes": {
		"permission": {
			"v2020_09_01":{
				"id": {
					valueTypes: {
						type: generateTypeLiteral({"type":'text',"label":"id","isRequired":true,"hint":"Hyphen separated di for this permission, e.g. can-unlock-doors"}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"type":'text',"label":"id","isRequired":true,"hint":"Hyphen separated di for this permission, e.g. can-unlock-doors"}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"type":'text',"label":"id","isRequired":true,"hint":"Hyphen separated di for this permission, e.g. can-unlock-doors"}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"name": {
					valueTypes: {
						type: generateTypeLiteral({"type":'text',"label":"Name","isRequired":true,"hint":"Human readable name for this permission"}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"type":'text',"label":"Name","isRequired":true,"hint":"Human readable name for this permission"}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"type":'text',"label":"Name","isRequired":true,"hint":"Human readable name for this permission"}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"description": {
					valueTypes: {
						type: generateTypeLiteral({"type":'text',"label":"Description"}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"type":'text',"label":"Description"}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"type":'text',"label":"Description"}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"requireAllStatuses": {
					valueTypes: {
						type: generateTypeLiteral({"type":'boolean',"label":"Require all statuses","defaultValue":false}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"type":'boolean',"label":"Require all statuses","defaultValue":false}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"type":'boolean',"label":"Require all statuses","defaultValue":false}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"defaultsByRoleBase": {
					valueTypes: {
						type: generateTypeLiteral({"type":'schema',"options":{"schemaIds":[{"id":"defaultsByRole","version":"v2020_09_01"}]}}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"type":'schema',"options":{"schemaIds":[{"id":"defaultsByRole","version":"v2020_09_01"}]}}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"type":'schema',"options":{"schemaIds":[{"id":"defaultsByRole","version":"v2020_09_01"}]}}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"can": {
					valueTypes: {
						type: generateTypeLiteral({"type":'schema',"options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"type":'schema',"options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"type":'schema',"options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
			},
		},
		"permissionContract": {
			"v2020_09_01":{
				"id": {
					valueTypes: {
						type: generateTypeLiteral({"type":'text',"isRequired":true}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"type":'text',"isRequired":true}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"type":'text',"isRequired":true}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"name": {
					valueTypes: {
						type: generateTypeLiteral({"type":'text',"label":"Name","isRequired":true,"hint":"Human readable name for this contract"}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"type":'text',"label":"Name","isRequired":true,"hint":"Human readable name for this contract"}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"type":'text',"label":"Name","isRequired":true,"hint":"Human readable name for this contract"}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"description": {
					valueTypes: {
						type: generateTypeLiteral({"type":'text',"label":"Description"}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"type":'text',"label":"Description"}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"type":'text',"label":"Description"}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"requireAllPermissions": {
					valueTypes: {
						type: generateTypeLiteral({"type":'boolean',"label":"Require all permissions","defaultValue":false}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"type":'boolean',"label":"Require all permissions","defaultValue":false}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"type":'boolean',"label":"Require all permissions","defaultValue":false}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"permissions": {
					valueTypes: {
						type: generateTypeLiteral({"type":'schema',"isRequired":true,"isArray":true,"options":{"schemaIds":[{"id":"permission","version":"v2020_09_01"}]}}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"type":'schema',"isRequired":true,"isArray":true,"options":{"schemaIds":[{"id":"permission","version":"v2020_09_01"}]}}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"type":'schema',"isRequired":true,"isArray":true,"options":{"schemaIds":[{"id":"permission","version":"v2020_09_01"}]}}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
			},
		},
		"eventSignature": {
			"v2020_09_01":{
				"eventNameWithOptionalNamespace": {
					valueTypes: {
						type: generateTypeLiteral({"type":'text',"isRequired":true}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"type":'text',"isRequired":true}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"type":'text',"isRequired":true}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"responsePayloadSchema": {
					valueTypes: {
						type: generateTypeLiteral({"type":'raw',"options":{"valueType":"SpruceSchema.ISchema"}}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"type":'raw',"options":{"valueType":"SpruceSchema.ISchema"}}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"type":'raw',"options":{"valueType":"SpruceSchema.ISchema"}}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"emitPayloadSchema": {
					valueTypes: {
						type: generateTypeLiteral({"type":'raw',"options":{"valueType":"SpruceSchema.ISchema"}}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"type":'raw',"options":{"valueType":"SpruceSchema.ISchema"}}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"type":'raw',"options":{"valueType":"SpruceSchema.ISchema"}}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"listenPermissionContract": {
					valueTypes: {
						type: generateTypeLiteral({"type":'schema',"options":{"schemaIds":[{"version":"v2020_09_01","id":"permissionContract"}]}}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"type":'schema',"options":{"schemaIds":[{"version":"v2020_09_01","id":"permissionContract"}]}}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"type":'schema',"options":{"schemaIds":[{"version":"v2020_09_01","id":"permissionContract"}]}}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"emitPermissionContract": {
					valueTypes: {
						type: generateTypeLiteral({"type":'schema',"options":{"schemaIds":[{"version":"v2020_09_01","id":"permissionContract"}]}}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"type":'schema',"options":{"schemaIds":[{"version":"v2020_09_01","id":"permissionContract"}]}}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"type":'schema',"options":{"schemaIds":[{"version":"v2020_09_01","id":"permissionContract"}]}}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
			},
		},
		"eventContract": {
			"v2020_09_01":{
				"eventSignatures": {
					valueTypes: {
						type: generateTypeLiteral({"type":'schema',"isRequired":true,"isArray":true,"options":{"schemaIds":[{"id":"eventSignature","version":"v2020_09_01"}]}}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"type":'schema',"isRequired":true,"isArray":true,"options":{"schemaIds":[{"id":"eventSignature","version":"v2020_09_01"}]}}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"type":'schema',"isRequired":true,"isArray":true,"options":{"schemaIds":[{"id":"eventSignature","version":"v2020_09_01"}]}}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
			},
		},
		"statusFlags": {
			"v2020_09_01":{
				"default": {
					valueTypes: {
						type: generateTypeLiteral({"type":'boolean',"hint":"What is the fallback if no status is set?"}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"type":'boolean',"hint":"What is the fallback if no status is set?"}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"type":'boolean',"hint":"What is the fallback if no status is set?"}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"clockedIn": {
					valueTypes: {
						type: generateTypeLiteral({"label":"Clocked in","hint":"Is the person clocked in and ready to rock?","type":'boolean'}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"label":"Clocked in","hint":"Is the person clocked in and ready to rock?","type":'boolean'}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"label":"Clocked in","hint":"Is the person clocked in and ready to rock?","type":'boolean'}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"clockedOut": {
					valueTypes: {
						type: generateTypeLiteral({"label":"Clocked out","hint":"When someone is not working (off the clock).","type":'boolean'}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"label":"Clocked out","hint":"When someone is not working (off the clock).","type":'boolean'}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"label":"Clocked out","hint":"When someone is not working (off the clock).","type":'boolean'}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"onPrem": {
					valueTypes: {
						type: generateTypeLiteral({"label":"On premise","hint":"Are they at work (maybe working, maybe visiting).","type":'boolean'}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"label":"On premise","hint":"Are they at work (maybe working, maybe visiting).","type":'boolean'}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"label":"On premise","hint":"Are they at work (maybe working, maybe visiting).","type":'boolean'}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"offPrem": {
					valueTypes: {
						type: generateTypeLiteral({"label":"Off premise","hint":"They aren't at the office or shop.","type":'boolean'}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"label":"Off premise","hint":"They aren't at the office or shop.","type":'boolean'}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"label":"Off premise","hint":"They aren't at the office or shop.","type":'boolean'}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
			},
		},
		"defaultsByRole": {
			"v2020_09_01":{
				"owner": {
					valueTypes: {
						type: generateTypeLiteral({"label":"Owner","type":'schema',"options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"label":"Owner","type":'schema',"options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"label":"Owner","type":'schema',"options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"groupManager": {
					valueTypes: {
						type: generateTypeLiteral({"label":"Group manager","type":'schema',"options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"label":"Group manager","type":'schema',"options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"label":"Group manager","type":'schema',"options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"manager": {
					valueTypes: {
						type: generateTypeLiteral({"label":"Manager","type":'schema',"options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"label":"Manager","type":'schema',"options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"label":"Manager","type":'schema',"options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"teammate": {
					valueTypes: {
						type: generateTypeLiteral({"label":"Teammate","type":'schema',"options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"label":"Teammate","type":'schema',"options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"label":"Teammate","type":'schema',"options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"guest": {
					valueTypes: {
						type: generateTypeLiteral({"label":"Guest","type":'schema',"options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"label":"Guest","type":'schema',"options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"label":"Guest","type":'schema',"options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
				"anonymous": {
					valueTypes: {
						type: generateTypeLiteral({"label":"Anonymous","type":'schema',"options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}, TemplateRenderAs.Type, "SpruceSchema"),
						value: generateTypeLiteral({"label":"Anonymous","type":'schema',"options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}, TemplateRenderAs.Value, "SpruceSchema"),
						schemaType: generateTypeLiteral({"label":"Anonymous","type":'schema',"options":{"schemaIds":[{"id":"statusFlags","version":"v2020_09_01"}]}}, TemplateRenderAs.SchemaType, "SpruceSchema"),
					}
				},
			},
		},
	},
}

export default valueTypes
