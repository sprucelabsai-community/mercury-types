/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

export { SpruceSchemas } from '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types'

import { default as SchemaEntity } from '@sprucelabs/schema'



import * as SpruceSchema from '@sprucelabs/schema'


declare module '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types' {


	namespace SpruceSchemas.Mercury.v2020_09_01 {

		
		interface StatusFlags {
			
				/** . What is the fallback if no status is set? */
				'default'?: boolean| undefined | null
				/** Clocked in. Is the person clocked in and ready to rock? */
				'clockedIn'?: boolean| undefined | null
				/** Clocked out. When someone is not working (off the clock). */
				'clockedOut'?: boolean| undefined | null
				/** On premise. Are they at work (maybe working, maybe visiting). */
				'onPrem'?: boolean| undefined | null
				/** Off premise. They aren't at the office or shop. */
				'offPrem'?: boolean| undefined | null
		}

		interface StatusFlagsSchema extends SpruceSchema.Schema {
			id: 'statusFlags',
			version: 'v2020_09_01',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . What is the fallback if no status is set? */
			            'default': {
			                type: 'boolean',
			                hint: 'What is the fallback if no status is set?',
			                options: undefined
			            },
			            /** Clocked in. Is the person clocked in and ready to rock? */
			            'clockedIn': {
			                label: 'Clocked in',
			                type: 'boolean',
			                hint: 'Is the person clocked in and ready to rock?',
			                options: undefined
			            },
			            /** Clocked out. When someone is not working (off the clock). */
			            'clockedOut': {
			                label: 'Clocked out',
			                type: 'boolean',
			                hint: 'When someone is not working (off the clock).',
			                options: undefined
			            },
			            /** On premise. Are they at work (maybe working, maybe visiting). */
			            'onPrem': {
			                label: 'On premise',
			                type: 'boolean',
			                hint: 'Are they at work (maybe working, maybe visiting).',
			                options: undefined
			            },
			            /** Off premise. They aren't at the office or shop. */
			            'offPrem': {
			                label: 'Off premise',
			                type: 'boolean',
			                hint: 'They aren\'t at the office or shop.',
			                options: undefined
			            },
			    }
		}

		type StatusFlagsEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_09_01.StatusFlagsSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_09_01 {

		
		interface DefaultsByRole {
			
				/** Owner. */
				'owner'?: SpruceSchemas.Mercury.v2020_09_01.StatusFlags| undefined | null
				/** Group manager. */
				'groupManager'?: SpruceSchemas.Mercury.v2020_09_01.StatusFlags| undefined | null
				/** Manager. */
				'manager'?: SpruceSchemas.Mercury.v2020_09_01.StatusFlags| undefined | null
				/** Teammate. */
				'teammate'?: SpruceSchemas.Mercury.v2020_09_01.StatusFlags| undefined | null
				/** Guest. */
				'guest'?: SpruceSchemas.Mercury.v2020_09_01.StatusFlags| undefined | null
				/** Anonymous. */
				'anonymous'?: SpruceSchemas.Mercury.v2020_09_01.StatusFlags| undefined | null
		}

		interface DefaultsByRoleSchema extends SpruceSchema.Schema {
			id: 'defaultsByRole',
			version: 'v2020_09_01',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Owner. */
			            'owner': {
			                label: 'Owner',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_09_01.StatusFlagsSchema,}
			            },
			            /** Group manager. */
			            'groupManager': {
			                label: 'Group manager',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_09_01.StatusFlagsSchema,}
			            },
			            /** Manager. */
			            'manager': {
			                label: 'Manager',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_09_01.StatusFlagsSchema,}
			            },
			            /** Teammate. */
			            'teammate': {
			                label: 'Teammate',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_09_01.StatusFlagsSchema,}
			            },
			            /** Guest. */
			            'guest': {
			                label: 'Guest',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_09_01.StatusFlagsSchema,}
			            },
			            /** Anonymous. */
			            'anonymous': {
			                label: 'Anonymous',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_09_01.StatusFlagsSchema,}
			            },
			    }
		}

		type DefaultsByRoleEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_09_01.DefaultsByRoleSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_09_01 {

		
		interface Permission {
			
				/** id. Hyphen separated di for this permission, e.g. can-unlock-doors */
				'id': string
				/** Name. Human readable name for this permission */
				'name': string
				/** Description. */
				'description'?: string| undefined | null
				/** Require all statuses. */
				'requireAllStatuses'?: boolean| undefined | null
				
				'defaultsByRoleBase'?: SpruceSchemas.Mercury.v2020_09_01.DefaultsByRole| undefined | null
				
				'can'?: SpruceSchemas.Mercury.v2020_09_01.StatusFlags| undefined | null
		}

		interface PermissionSchema extends SpruceSchema.Schema {
			id: 'permission',
			version: 'v2020_09_01',
			namespace: 'Mercury',
			name: 'Permission',
			    fields: {
			            /** id. Hyphen separated di for this permission, e.g. can-unlock-doors */
			            'id': {
			                label: 'id',
			                type: 'text',
			                isRequired: true,
			                hint: 'Hyphen separated di for this permission, e.g. can-unlock-doors',
			                options: undefined
			            },
			            /** Name. Human readable name for this permission */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                hint: 'Human readable name for this permission',
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** Require all statuses. */
			            'requireAllStatuses': {
			                label: 'Require all statuses',
			                type: 'boolean',
			                defaultValue: false,
			                options: undefined
			            },
			            /** . */
			            'defaultsByRoleBase': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_09_01.DefaultsByRoleSchema,}
			            },
			            /** . */
			            'can': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_09_01.StatusFlagsSchema,}
			            },
			    }
		}

		type PermissionEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_09_01.PermissionSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_09_01 {

		/** A Mercury Permission Contract */
		interface PermissionContract {
			
				
				'id': string
				/** Name. Human readable name for this contract */
				'name': string
				/** Description. */
				'description'?: string| undefined | null
				/** Require all permissions. */
				'requireAllPermissions'?: boolean| undefined | null
				
				'permissions': SpruceSchemas.Mercury.v2020_09_01.Permission[]
		}

		interface PermissionContractSchema extends SpruceSchema.Schema {
			id: 'permissionContract',
			version: 'v2020_09_01',
			namespace: 'Mercury',
			name: 'Permission contract',
			description: 'A Mercury Permission Contract',
			    fields: {
			            /** . */
			            'id': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Name. Human readable name for this contract */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                hint: 'Human readable name for this contract',
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** Require all permissions. */
			            'requireAllPermissions': {
			                label: 'Require all permissions',
			                type: 'boolean',
			                defaultValue: false,
			                options: undefined
			            },
			            /** . */
			            'permissions': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_09_01.PermissionSchema,}
			            },
			    }
		}

		type PermissionContractEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_09_01.PermissionContractSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_09_01 {

		
		interface EventSignature {
			
				
				'isGlobal'?: boolean| undefined | null
				
				'responsePayloadSchema'?: (SpruceSchema.Schema)| undefined | null
				
				'emitPayloadSchema'?: (SpruceSchema.Schema)| undefined | null
				
				'listenPermissionContract'?: SpruceSchemas.Mercury.v2020_09_01.PermissionContract| undefined | null
				
				'emitPermissionContract'?: SpruceSchemas.Mercury.v2020_09_01.PermissionContract| undefined | null
		}

		interface EventSignatureSchema extends SpruceSchema.Schema {
			id: 'eventSignature',
			version: 'v2020_09_01',
			namespace: 'Mercury',
			name: 'Event Signature',
			    fields: {
			            /** . */
			            'isGlobal': {
			                type: 'boolean',
			                defaultValue: false,
			                options: undefined
			            },
			            /** . */
			            'responsePayloadSchema': {
			                type: 'raw',
			                options: {valueType: `SpruceSchema.Schema`,}
			            },
			            /** . */
			            'emitPayloadSchema': {
			                type: 'raw',
			                options: {valueType: `SpruceSchema.Schema`,}
			            },
			            /** . */
			            'listenPermissionContract': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_09_01.PermissionContractSchema,}
			            },
			            /** . */
			            'emitPermissionContract': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_09_01.PermissionContractSchema,}
			            },
			    }
		}

		type EventSignatureEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_09_01.EventSignatureSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_09_01 {

		
		interface EventSignaturesByName {
				/** . */
				[eventName:string]: SpruceSchemas.Mercury.v2020_09_01.EventSignature
		}

		interface EventSignaturesByNameSchema extends SpruceSchema.Schema {
			id: 'eventSignaturesByName',
			version: 'v2020_09_01',
			namespace: 'Mercury',
			name: '',
			dynamicFieldSignature: { 
			    type: 'schema',
			    keyName: 'eventName',
			    isRequired: true,
			    options: {schema: SpruceSchemas.Mercury.v2020_09_01.EventSignatureSchema,}
			}		}

		type EventSignaturesByNameEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_09_01.EventSignaturesByNameSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_09_01 {

		/** A Mercury Event Contract. */
		interface EventContract {
			
				
				'id'?: string| undefined | null
				
				'eventSignatures': SpruceSchemas.Mercury.v2020_09_01.EventSignaturesByName
		}

		interface EventContractSchema extends SpruceSchema.Schema {
			id: 'eventContract',
			version: 'v2020_09_01',
			namespace: 'Mercury',
			name: 'Event contract',
			description: 'A Mercury Event Contract.',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'eventSignatures': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_09_01.EventSignaturesByNameSchema,}
			            },
			    }
		}

		type EventContractEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_09_01.EventContractSchema>

	}

}
