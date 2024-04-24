/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/order */

export { SpruceSchemas } from '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types'

import { default as SchemaEntity } from '@sprucelabs/schema'



import * as SpruceSchema from '@sprucelabs/schema'

import * as MercuryTypes from '../../'

declare module '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types' {


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface EventSignaturesByName {
				/** . */
				[eventName:string]: SpruceSchemas.Mercury.v2020_12_25.EventSignature
		}

		interface EventSignaturesByNameSchema extends SpruceSchema.Schema {
			id: 'eventSignaturesByName',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			moduleToImportFromWhenRemote: '@sprucelabs/mercury-types',
			dynamicFieldSignature: { 
			    type: 'schema',
			    keyName: 'eventName',
			    isRequired: true,
			    options: {schema: SpruceSchemas.Mercury.v2020_12_25.EventSignatureSchema,}
			},		}

		interface EventSignaturesByNameEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.EventSignaturesByNameSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		/** A Mercury Event Contract. */
		interface EventContract {
			
				
				'id'?: string| undefined | null
				
				'eventSignatures': SpruceSchemas.Mercury.v2020_12_25.EventSignaturesByName
		}

		interface EventContractSchema extends SpruceSchema.Schema {
			id: 'eventContract',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: 'Event contract',
			importsWhenRemote: ['import \'@sprucelabs/mercury-types\'',],
			moduleToImportFromWhenRemote: '@sprucelabs/mercury-types',
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
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.EventSignaturesByNameSchema,}
			            },
			    }
		}

		interface EventContractEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.EventContractSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		/** A Mercury Permission Contract */
		interface PermissionContract {
			
				
				'id': string
				/** Name. Human readable name for this contract */
				'name': string
				/** Description. */
				'description'?: string| undefined | null
				/** Require all permissions. */
				'requireAllPermissions'?: boolean| undefined | null
				
				'permissions': SpruceSchemas.Mercury.v2020_12_25.Permission[]
		}

		interface PermissionContractSchema extends SpruceSchema.Schema {
			id: 'permissionContract',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: 'Permission contract',
			importsWhenRemote: ['import \'@sprucelabs/mercury-types\'',],
			moduleToImportFromWhenRemote: '@sprucelabs/mercury-types',
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
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PermissionSchema,}
			            },
			    }
		}

		interface PermissionContractEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.PermissionContractSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface StatusFlags {
			
				/** . What is the fallback if no status is set? */
				'default'?: boolean| undefined | null
				/** Clocked in. Is the person clocked in and ready to rock? */
				'clockedIn'?: boolean| undefined | null
				/** Clocked out. When someone is not working (off the clock). */
				'clockedOut'?: boolean| undefined | null
				/** On premises. Are they at work (maybe working, maybe visiting). */
				'onPrem'?: boolean| undefined | null
				/** Off premises. They aren't at the office or shop. */
				'offPrem'?: boolean| undefined | null
		}

		interface StatusFlagsSchema extends SpruceSchema.Schema {
			id: 'statusFlags',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			moduleToImportFromWhenRemote: '@sprucelabs/mercury-types',
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
			            /** On premises. Are they at work (maybe working, maybe visiting). */
			            'onPrem': {
			                label: 'On premises',
			                type: 'boolean',
			                hint: 'Are they at work (maybe working, maybe visiting).',
			                options: undefined
			            },
			            /** Off premises. They aren't at the office or shop. */
			            'offPrem': {
			                label: 'Off premises',
			                type: 'boolean',
			                hint: 'They aren\'t at the office or shop.',
			                options: undefined
			            },
			    }
		}

		interface StatusFlagsEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.StatusFlagsSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface PermissionDefaults {
			
				
				'skill'?: boolean| undefined | null
				/** Owner. */
				'owner'?: SpruceSchemas.Mercury.v2020_12_25.StatusFlags| undefined | null
				/** Group manager. */
				'groupManager'?: SpruceSchemas.Mercury.v2020_12_25.StatusFlags| undefined | null
				/** Manager. */
				'manager'?: SpruceSchemas.Mercury.v2020_12_25.StatusFlags| undefined | null
				/** Teammate. */
				'teammate'?: SpruceSchemas.Mercury.v2020_12_25.StatusFlags| undefined | null
				/** Anonymous. */
				'anonymous'?: SpruceSchemas.Mercury.v2020_12_25.StatusFlags| undefined | null
				/** Logged in. */
				'loggedIn'?: SpruceSchemas.Mercury.v2020_12_25.StatusFlags| undefined | null
				/** Guest. */
				'guest'?: SpruceSchemas.Mercury.v2020_12_25.StatusFlags| undefined | null
		}

		interface PermissionDefaultsSchema extends SpruceSchema.Schema {
			id: 'permissionDefaults',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			moduleToImportFromWhenRemote: '@sprucelabs/mercury-types',
			    fields: {
			            /** . */
			            'skill': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** Owner. */
			            'owner': {
			                label: 'Owner',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.StatusFlagsSchema,}
			            },
			            /** Group manager. */
			            'groupManager': {
			                label: 'Group manager',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.StatusFlagsSchema,}
			            },
			            /** Manager. */
			            'manager': {
			                label: 'Manager',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.StatusFlagsSchema,}
			            },
			            /** Teammate. */
			            'teammate': {
			                label: 'Teammate',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.StatusFlagsSchema,}
			            },
			            /** Anonymous. */
			            'anonymous': {
			                label: 'Anonymous',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.StatusFlagsSchema,}
			            },
			            /** Logged in. */
			            'loggedIn': {
			                label: 'Logged in',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.StatusFlagsSchema,}
			            },
			            /** Guest. */
			            'guest': {
			                label: 'Guest',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.StatusFlagsSchema,}
			            },
			    }
		}

		interface PermissionDefaultsEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.PermissionDefaultsSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface Permission {
			
				/** id. Hyphen separated id for this permission, e.g. can-unlock-doors */
				'id': string
				/** Name. Human readable name for this permission */
				'name': string
				/** Description. */
				'description'?: string| undefined | null
				/** Require all statuses. */
				'requireAllStatuses'?: boolean| undefined | null
				
				'defaults'?: SpruceSchemas.Mercury.v2020_12_25.PermissionDefaults| undefined | null
				
				'can'?: SpruceSchemas.Mercury.v2020_12_25.StatusFlags| undefined | null
		}

		interface PermissionSchema extends SpruceSchema.Schema {
			id: 'permission',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: 'Permission',
			moduleToImportFromWhenRemote: '@sprucelabs/mercury-types',
			    fields: {
			            /** id. Hyphen separated id for this permission, e.g. can-unlock-doors */
			            'id': {
			                label: 'id',
			                type: 'text',
			                isRequired: true,
			                hint: 'Hyphen separated id for this permission, e.g. can-unlock-doors',
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
			            'defaults': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PermissionDefaultsSchema,}
			            },
			            /** . */
			            'can': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.StatusFlagsSchema,}
			            },
			    }
		}

		interface PermissionEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.PermissionSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface PermissionReference<ContractId extends MercuryTypes.PermissionContractId = MercuryTypes.PermissionContractId> {
			
				
				'contractId': (ContractId)
				
				'permissionIdsAny'?: (MercuryTypes.PermissionId<ContractId>)[]| undefined | null
		}

		interface PermissionReferenceSchema extends SpruceSchema.Schema {
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

		interface PermissionReferenceEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.PermissionReferenceSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface FeedOptions {
			
				/** . A handlebarsjs template used to render the chat bubbles in the feed. You will have both the entire target and payload available to you in the template. See http://developer.spruce.bot for more details. */
				'template'?: string| undefined | null
				
				'pathsToLinks'?: string[]| undefined | null
				
				'pathsToChoices'?: string[]| undefined | null
				
				'pathToContext'?: string| undefined | null
		}

		interface FeedOptionsSchema extends SpruceSchema.Schema {
			id: 'feedOptions',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			moduleToImportFromWhenRemote: '@sprucelabs/mercury-types',
			    fields: {
			            /** . A handlebarsjs template used to render the chat bubbles in the feed. You will have both the entire target and payload available to you in the template. See http://developer.spruce.bot for more details. */
			            'template': {
			                type: 'text',
			                hint: 'A handlebarsjs template used to render the chat bubbles in the feed. You will have both the entire target and payload available to you in the template. See http://developer.spruce.bot for more details.',
			                options: undefined
			            },
			            /** . */
			            'pathsToLinks': {
			                type: 'text',
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			            /** . */
			            'pathsToChoices': {
			                type: 'text',
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			            /** . */
			            'pathToContext': {
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface FeedOptionsEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.FeedOptionsSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface EventSignature {
			
				
				'isGlobal'?: boolean| undefined | null
				
				'responsePayloadSchema'?: (SpruceSchema.Schema)| undefined | null
				
				'emitPayloadSchema'?: (SpruceSchema.Schema)| undefined | null
				
				'feed'?: SpruceSchemas.Mercury.v2020_12_25.FeedOptions| undefined | null
				
				'listenPermissions'?: SpruceSchemas.Mercury.v2020_12_25.PermissionReference| undefined | null
				
				'emitPermissions'?: SpruceSchemas.Mercury.v2020_12_25.PermissionReference| undefined | null
				
				'listenPermissionContract'?: SpruceSchemas.Mercury.v2020_12_25.PermissionContract| undefined | null
				
				'emitPermissionContract'?: SpruceSchemas.Mercury.v2020_12_25.PermissionContract| undefined | null
		}

		interface EventSignatureSchema extends SpruceSchema.Schema {
			id: 'eventSignature',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: 'Event Signature',
			moduleToImportFromWhenRemote: '@sprucelabs/mercury-types',
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
			            'feed': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.FeedOptionsSchema,}
			            },
			            /** . */
			            'listenPermissions': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PermissionReferenceSchema,}
			            },
			            /** . */
			            'emitPermissions': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PermissionReferenceSchema,}
			            },
			            /** . */
			            'listenPermissionContract': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PermissionContractSchema,}
			            },
			            /** . */
			            'emitPermissionContract': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PermissionContractSchema,}
			            },
			    }
		}

		interface EventSignatureEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.EventSignatureSchema> {}

	}

}
