/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

export { SpruceSchemas } from '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types'

import { default as SchemaEntity } from '@sprucelabs/schema'



import * as SpruceSchema from '@sprucelabs/schema'


declare module '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types' {


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidInstallEmitTarget {
			
				
				'organizationId': string
				
				'skillId': string
		}

		interface DidInstallEmitTargetSchema extends SpruceSchema.Schema {
			id: 'didInstallEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'skillId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type DidInstallEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidInstallEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidInstallEmitTargetAndPayload {
			
				
				'target': SpruceSchemas.Mercury.v2020_12_25.DidInstallEmitTarget
		}

		interface DidInstallEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didInstallEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidInstallEmitTargetSchema,}
			            },
			    }
		}

		type DidInstallEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidInstallEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidInstallResponsePayload {
			
		}

		interface DidInstallResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'didInstallResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type DidInstallResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidInstallResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidMessageEmitPayload {
			
				
				'message': SpruceSchemas.Spruce.v2020_07_22.Message
				
				'conversationState'?: string| undefined | null
				
				'topic'?: string| undefined | null
		}

		interface DidMessageEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didMessageEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'message': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.MessageSchema,}
			            },
			            /** . */
			            'conversationState': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'topic': {
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		type DidMessageEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidMessageEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidMessageEmitTargetAndPayload {
			
				
				'target'?: SpruceSchemas.Spruce.v2020_07_22.MessageTarget| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.DidMessageEmitPayload
		}

		interface DidMessageEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didMessageEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.MessageTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidMessageEmitPayloadSchema,}
			            },
			    }
		}

		type DidMessageEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidMessageEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ConversationTopic {
			
				
				'key': string
				
				'confidence': number
				
				'label': string
		}

		interface ConversationTopicSchema extends SpruceSchema.Schema {
			id: 'conversationTopic',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'key': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'confidence': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'label': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type ConversationTopicEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ConversationTopicSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidMessageResponsePayload {
			
				
				'transitionConversationTo'?: ("greeting" | "discovery" | "topic" | "closing")| undefined | null
				
				'repairs'?: string[]| undefined | null
				
				'topicChangers'?: string[]| undefined | null
				
				'utterance'?: string| undefined | null
				
				'suggestedTopics'?: SpruceSchemas.Mercury.v2020_12_25.ConversationTopic[]| undefined | null
		}

		interface DidMessageResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'didMessageResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'transitionConversationTo': {
			                type: 'select',
			                options: {choices: [{"label":"Greeting","value":"greeting"},{"label":"Discovery","value":"discovery"},{"label":"Topic","value":"topic"},{"label":"Closing","value":"closing"}],}
			            },
			            /** . */
			            'repairs': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'topicChangers': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'utterance': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'suggestedTopics': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ConversationTopicSchema,}
			            },
			    }
		}

		type DidMessageResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidMessageResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface AuthenticateEmitPayload {
			
				
				'token'?: string| undefined | null
				
				'skillId'?: string| undefined | null
				
				'apiKey'?: string| undefined | null
		}

		interface AuthenticateEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'authenticateEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'token': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'skillId': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'apiKey': {
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		type AuthenticateEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.AuthenticateEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface AuthenticateEmitTargetAndPayload {
			
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.AuthenticateEmitPayload| undefined | null
		}

		interface AuthenticateEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'authenticateEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.AuthenticateEmitPayloadSchema,}
			            },
			    }
		}

		type AuthenticateEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.AuthenticateEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface AuthSchema {
			
				
				'person'?: SpruceSchemas.Spruce.v2020_07_22.Person| undefined | null
				
				'skill'?: SpruceSchemas.Spruce.v2020_07_22.Skill| undefined | null
		}

		interface AuthSchemaSchema extends SpruceSchema.Schema {
			id: 'authSchema',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'person': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema,}
			            },
			            /** . */
			            'skill': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.SkillSchema,}
			            },
			    }
		}

		type AuthSchemaEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.AuthSchemaSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface AuthenticateResponsePayload {
			
				
				'type': ("authenticated" | "anonymous")
				
				'auth': SpruceSchemas.Mercury.v2020_12_25.AuthSchema
		}

		interface AuthenticateResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'authenticateResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'type': {
			                type: 'select',
			                isRequired: true,
			                options: {choices: [{"value":"authenticated","label":"Authenticated"},{"value":"anonymous","label":"Anonymous"}],}
			            },
			            /** . */
			            'auth': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.AuthSchemaSchema,}
			            },
			    }
		}

		type AuthenticateResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.AuthenticateResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CanListenEmitPayload {
			
				
				'authorizerStatuses'?: ("clockedIn" | "clockedOut" | "onPrem" | "offPrem")| undefined | null
				
				'fullyQualifiedEventName': string
		}

		interface CanListenEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'canListenEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'authorizerStatuses': {
			                type: 'select',
			                options: {choices: [{"label":"Clocked in","value":"clockedIn"},{"label":"Clocked out","value":"clockedOut"},{"label":"On premise","value":"onPrem"},{"label":"Off premise","value":"offPrem"}],}
			            },
			            /** . */
			            'fullyQualifiedEventName': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type CanListenEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CanListenEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CanListenEmitTargetAndPayload {
			
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.CanListenEmitPayload
		}

		interface CanListenEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'canListenEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.CanListenEmitPayloadSchema,}
			            },
			    }
		}

		type CanListenEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CanListenEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CanListenResponsePayload {
			
				
				'can'?: boolean| undefined | null
		}

		interface CanListenResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'canListenResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'can': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type CanListenResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CanListenResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ConfirmPinEmitPayload {
			
				
				'challenge': string
				
				'pin': string
		}

		interface ConfirmPinEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'confirmPinEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'challenge': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'pin': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type ConfirmPinEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ConfirmPinEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ConfirmPinEmitTargetAndPayload {
			
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.ConfirmPinEmitPayload
		}

		interface ConfirmPinEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'confirmPinEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ConfirmPinEmitPayloadSchema,}
			            },
			    }
		}

		type ConfirmPinEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ConfirmPinEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ConfirmPinRespondPayload {
			
				
				'person': SpruceSchemas.Spruce.v2020_07_22.Person
				
				'token': string
		}

		interface ConfirmPinRespondPayloadSchema extends SpruceSchema.Schema {
			id: 'confirmPinRespondPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'person': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema,}
			            },
			            /** . */
			            'token': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type ConfirmPinRespondPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ConfirmPinRespondPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateLocationTargetPayload {
			
				
				'organizationId': string
		}

		interface CreateLocationTargetPayloadSchema extends SpruceSchema.Schema {
			id: 'createLocationTargetPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type CreateLocationTargetPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateLocationTargetPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateLocationEmitPayload {
			
				/** Name. */
				'name': string
				/** Store number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
				'num'?: string| undefined | null
				/** Public. Is this location viewable by guests? */
				'isPublic'?: boolean| undefined | null
				/** Main Phone. */
				'phone'?: string| undefined | null
				/** Timezone. */
				'timezone'?: ("etc/gmt+12" | "pacific/midway" | "pacific/honolulu" | "us/alaska" | "america/los_Angeles" | "america/tijuana" | "us/arizona" | "america/chihuahua" | "us/mountain" | "america/managua" | "us/central" | "america/mexico_City" | "Canada/Saskatchewan" | "america/bogota" | "us/eastern" | "us/east-indiana" | "Canada/atlantic" | "america/caracas" | "america/manaus" | "america/Santiago" | "Canada/Newfoundland" | "america/Sao_Paulo" | "america/argentina/buenos_Aires" | "america/godthab" | "america/montevideo" | "america/Noronha" | "atlantic/cape_Verde" | "atlantic/azores" | "africa/casablanca" | "etc/gmt" | "europe/amsterdam" | "europe/belgrade" | "europe/brussels" | "europe/Sarajevo" | "africa/lagos" | "asia/amman" | "europe/athens" | "asia/beirut" | "africa/cairo" | "africa/Harare" | "europe/Helsinki" | "asia/Jerusalem" | "europe/minsk" | "africa/Windhoek" | "asia/Kuwait" | "europe/moscow" | "africa/Nairobi" | "asia/tbilisi" | "asia/tehran" | "asia/muscat" | "asia/baku" | "asia/Yerevan" | "asia/Kabul" | "asia/Yekaterinburg" | "asia/Karachi" | "asia/calcutta" | "asia/calcutta" | "asia/Katmandu" | "asia/almaty" | "asia/Dhaka" | "asia/Rangoon" | "asia/bangkok" | "asia/Krasnoyarsk" | "asia/Hong_Kong" | "asia/Kuala_Lumpur" | "asia/Irkutsk" | "Australia/Perth" | "asia/taipei" | "asia/tokyo" | "asia/Seoul" | "asia/Yakutsk" | "Australia/adelaide" | "Australia/Darwin" | "Australia/brisbane" | "Australia/canberra" | "Australia/Hobart" | "pacific/guam" | "asia/Vladivostok" | "asia/magadan" | "pacific/auckland" | "pacific/Fiji" | "pacific/tongatapu")| undefined | null
				/** Address. */
				'address': SpruceSchema.AddressFieldValue
				
				'dateDeleted'?: number| undefined | null
				
				'slug'?: string| undefined | null
		}

		interface CreateLocationEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'createLocationEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Store number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
			            'num': {
			                label: 'Store number',
			                type: 'text',
			                hint: 'You can use other symbols, like # or dashes. #123 or 32-US-5',
			                options: undefined
			            },
			            /** Public. Is this location viewable by guests? */
			            'isPublic': {
			                label: 'Public',
			                type: 'boolean',
			                hint: 'Is this location viewable by guests?',
			                defaultValue: false,
			                options: undefined
			            },
			            /** Main Phone. */
			            'phone': {
			                label: 'Main Phone',
			                type: 'phone',
			                options: undefined
			            },
			            /** Timezone. */
			            'timezone': {
			                label: 'Timezone',
			                type: 'select',
			                options: {choices: [{"value":"etc/gmt+12","label":"International Date Line West"},{"value":"pacific/midway","label":"Midway Island, Samoa"},{"value":"pacific/honolulu","label":"Hawaii"},{"value":"us/alaska","label":"Alaska"},{"value":"america/los_Angeles","label":"Pacific Time (US & Canada)"},{"value":"america/tijuana","label":"Tijuana, Baja California"},{"value":"us/arizona","label":"Arizona"},{"value":"america/chihuahua","label":"Chihuahua, La Paz, Mazatlan"},{"value":"us/mountain","label":"Mountain Time (US & Canada)"},{"value":"america/managua","label":"Central America"},{"value":"us/central","label":"Central Time (US & Canada)"},{"value":"america/mexico_City","label":"Guadalajara, Mexico City, Monterrey"},{"value":"Canada/Saskatchewan","label":"Saskatchewan"},{"value":"america/bogota","label":"Bogota, Lima, Quito, Rio Branco"},{"value":"us/eastern","label":"Eastern Time (US & Canada)"},{"value":"us/east-indiana","label":"Indiana (East)"},{"value":"Canada/atlantic","label":"Atlantic Time (Canada)"},{"value":"america/caracas","label":"Caracas, La Paz"},{"value":"america/manaus","label":"Manaus"},{"value":"america/Santiago","label":"Santiago"},{"value":"Canada/Newfoundland","label":"Newfoundland"},{"value":"america/Sao_Paulo","label":"Brasilia"},{"value":"america/argentina/buenos_Aires","label":"Buenos Aires, Georgetown"},{"value":"america/godthab","label":"Greenland"},{"value":"america/montevideo","label":"Montevideo"},{"value":"america/Noronha","label":"Mid-Atlantic"},{"value":"atlantic/cape_Verde","label":"Cape Verde Is."},{"value":"atlantic/azores","label":"Azores"},{"value":"africa/casablanca","label":"Casablanca, Monrovia, Reykjavik"},{"value":"etc/gmt","label":"Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London"},{"value":"europe/amsterdam","label":"Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"},{"value":"europe/belgrade","label":"Belgrade, Bratislava, Budapest, Ljubljana, Prague"},{"value":"europe/brussels","label":"Brussels, Copenhagen, Madrid, Paris"},{"value":"europe/Sarajevo","label":"Sarajevo, Skopje, Warsaw, Zagreb"},{"value":"africa/lagos","label":"West Central Africa"},{"value":"asia/amman","label":"Amman"},{"value":"europe/athens","label":"Athens, Bucharest, Istanbul"},{"value":"asia/beirut","label":"Beirut"},{"value":"africa/cairo","label":"Cairo"},{"value":"africa/Harare","label":"Harare, Pretoria"},{"value":"europe/Helsinki","label":"Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"},{"value":"asia/Jerusalem","label":"Jerusalem"},{"value":"europe/minsk","label":"Minsk"},{"value":"africa/Windhoek","label":"Windhoek"},{"value":"asia/Kuwait","label":"Kuwait, Riyadh, Baghdad"},{"value":"europe/moscow","label":"Moscow, St. Petersburg, Volgograd"},{"value":"africa/Nairobi","label":"Nairobi"},{"value":"asia/tbilisi","label":"Tbilisi"},{"value":"asia/tehran","label":"Tehran"},{"value":"asia/muscat","label":"Abu Dhabi, Muscat"},{"value":"asia/baku","label":"Baku"},{"value":"asia/Yerevan","label":"Yerevan"},{"value":"asia/Kabul","label":"Kabul"},{"value":"asia/Yekaterinburg","label":"Yekaterinburg"},{"value":"asia/Karachi","label":"Islamabad, Karachi, Tashkent"},{"value":"asia/calcutta","label":"Chennai, Kolkata, Mumbai, New Delhi"},{"value":"asia/calcutta","label":"Sri Jayawardenapura"},{"value":"asia/Katmandu","label":"Kathmandu"},{"value":"asia/almaty","label":"Almaty, Novosibirsk"},{"value":"asia/Dhaka","label":"Astana, Dhaka"},{"value":"asia/Rangoon","label":"Yangon (Rangoon)"},{"value":"asia/bangkok","label":"Bangkok, Hanoi, Jakarta"},{"value":"asia/Krasnoyarsk","label":"Krasnoyarsk"},{"value":"asia/Hong_Kong","label":"Beijing, Chongqing, Hong Kong, Urumqi"},{"value":"asia/Kuala_Lumpur","label":"Kuala Lumpur, Singapore"},{"value":"asia/Irkutsk","label":"Irkutsk, Ulaan Bataar"},{"value":"Australia/Perth","label":"Perth"},{"value":"asia/taipei","label":"Taipei"},{"value":"asia/tokyo","label":"Osaka, Sapporo, Tokyo"},{"value":"asia/Seoul","label":"Seoul"},{"value":"asia/Yakutsk","label":"Yakutsk"},{"value":"Australia/adelaide","label":"Adelaide"},{"value":"Australia/Darwin","label":"Darwin"},{"value":"Australia/brisbane","label":"Brisbane"},{"value":"Australia/canberra","label":"Canberra, Melbourne, Sydney"},{"value":"Australia/Hobart","label":"Hobart"},{"value":"pacific/guam","label":"Guam, Port Moresby"},{"value":"asia/Vladivostok","label":"Vladivostok"},{"value":"asia/magadan","label":"Magadan, Solomon Is., New Caledonia"},{"value":"pacific/auckland","label":"Auckland, Wellington"},{"value":"pacific/Fiji","label":"Fiji, Kamchatka, Marshall Is."},{"value":"pacific/tongatapu","label":"Nuku'alofa"}],}
			            },
			            /** Address. */
			            'address': {
			                label: 'Address',
			                type: 'address',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'slug': {
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		type CreateLocationEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateLocationEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateLocationEmitTargetAndPayload {
			
				
				'target': SpruceSchemas.Mercury.v2020_12_25.CreateLocationTargetPayload
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.CreateLocationEmitPayload
		}

		interface CreateLocationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createLocationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.CreateLocationTargetPayloadSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.CreateLocationEmitPayloadSchema,}
			            },
			    }
		}

		type CreateLocationEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateLocationEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateLocationResponsePayload {
			
				
				'location': SpruceSchemas.Spruce.v2020_07_22.Location
		}

		interface CreateLocationResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createLocationResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'location': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LocationSchema,}
			            },
			    }
		}

		type CreateLocationResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateLocationResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateOrgEmitPayload {
			
				/** Name. */
				'name': string
				
				'slug'?: string| undefined | null
				
				'dateDeleted'?: number| undefined | null
		}

		interface CreateOrgEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'createOrgEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'slug': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'number',
			                options: undefined
			            },
			    }
		}

		type CreateOrgEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateOrgEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateOrganizationEmitTargetAndPayload {
			
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.CreateOrgEmitPayload
		}

		interface CreateOrganizationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createOrganizationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.CreateOrgEmitPayloadSchema,}
			            },
			    }
		}

		type CreateOrganizationEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateOrganizationEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateOrgResponsePayload {
			
				
				'organization': SpruceSchemas.Spruce.v2020_07_22.Organization
		}

		interface CreateOrgResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createOrgResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organization': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.OrganizationSchema,}
			            },
			    }
		}

		type CreateOrgResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateOrgResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateRoleTargetPayload {
			
				
				'organizationId'?: string| undefined | null
		}

		interface CreateRoleTargetPayloadSchema extends SpruceSchema.Schema {
			id: 'createRoleTargetPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type CreateRoleTargetPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateRoleTargetPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateRoleEmitPayload {
			
				/** Name. */
				'name': string
				/** Base. Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role. */
				'base'?: ("owner" | "groupManager" | "manager" | "teammate" | "guest" | "anonymous")| undefined | null
				/** Description. */
				'description'?: string| undefined | null
				
				'dateDeleted'?: number| undefined | null
				/** Public. Should I let people that are not part of this organization this role? */
				'isPublic'?: boolean| undefined | null
		}

		interface CreateRoleEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'createRoleEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Base. Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role. */
			            'base': {
			                label: 'Base',
			                type: 'select',
			                hint: 'Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role.',
			                options: {choices: [{"label":"Owner","value":"owner"},{"label":"Group manager","value":"groupManager"},{"label":"Manager","value":"manager"},{"label":"Teammate","value":"teammate"},{"label":"Guest","value":"guest"},{"label":"Anonymous","value":"anonymous"}],}
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'number',
			                options: undefined
			            },
			            /** Public. Should I let people that are not part of this organization this role? */
			            'isPublic': {
			                label: 'Public',
			                type: 'boolean',
			                hint: 'Should I let people that are not part of this organization this role?',
			                options: undefined
			            },
			    }
		}

		type CreateRoleEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateRoleEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateRoleEmitTargetAndPayload {
			
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.CreateRoleTargetPayload| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.CreateRoleEmitPayload
		}

		interface CreateRoleEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createRoleEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.CreateRoleTargetPayloadSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.CreateRoleEmitPayloadSchema,}
			            },
			    }
		}

		type CreateRoleEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateRoleEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateRoleResponsePayload {
			
				
				'role': SpruceSchemas.Spruce.v2020_07_22.Role
		}

		interface CreateRoleResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createRoleResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'role': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.RoleSchema,}
			            },
			    }
		}

		type CreateRoleResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateRoleResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteLocationTargetPayload {
			
				
				'locationId': string
		}

		interface DeleteLocationTargetPayloadSchema extends SpruceSchema.Schema {
			id: 'deleteLocationTargetPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type DeleteLocationTargetPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteLocationTargetPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteLocationEmitTargetAndPayload {
			
				
				'target': SpruceSchemas.Mercury.v2020_12_25.DeleteLocationTargetPayload
		}

		interface DeleteLocationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'deleteLocationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DeleteLocationTargetPayloadSchema,}
			            },
			    }
		}

		type DeleteLocationEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteLocationEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteLocationResponsePayload {
			
				
				'location': SpruceSchemas.Spruce.v2020_07_22.Location
		}

		interface DeleteLocationResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'deleteLocationResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'location': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LocationSchema,}
			            },
			    }
		}

		type DeleteLocationResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteLocationResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteOrganizationTargetPayload {
			
				
				'organizationId': string
		}

		interface DeleteOrganizationTargetPayloadSchema extends SpruceSchema.Schema {
			id: 'deleteOrganizationTargetPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type DeleteOrganizationTargetPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteOrganizationTargetPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteOrganizationEmitTargetAndPayload {
			
				
				'target': SpruceSchemas.Mercury.v2020_12_25.DeleteOrganizationTargetPayload
		}

		interface DeleteOrganizationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'deleteOrganizationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DeleteOrganizationTargetPayloadSchema,}
			            },
			    }
		}

		type DeleteOrganizationEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteOrganizationEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteOrgResponsePayload {
			
				
				'organization': SpruceSchemas.Spruce.v2020_07_22.Organization
		}

		interface DeleteOrgResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'deleteOrgResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organization': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.OrganizationSchema,}
			            },
			    }
		}

		type DeleteOrgResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteOrgResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteRoleTargetPayload {
			
				
				'roleId': string
				
				'organizationId': string
		}

		interface DeleteRoleTargetPayloadSchema extends SpruceSchema.Schema {
			id: 'deleteRoleTargetPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'roleId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type DeleteRoleTargetPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteRoleTargetPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteRoleEmitTargetAndPayload {
			
				
				'target': SpruceSchemas.Mercury.v2020_12_25.DeleteRoleTargetPayload
		}

		interface DeleteRoleEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'deleteRoleEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DeleteRoleTargetPayloadSchema,}
			            },
			    }
		}

		type DeleteRoleEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteRoleEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteRoleResponsePayload {
			
				
				'role': SpruceSchemas.Spruce.v2020_07_22.Role
		}

		interface DeleteRoleResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'deleteRoleResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'role': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.RoleSchema,}
			            },
			    }
		}

		type DeleteRoleResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteRoleResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DoesHonorPermissionContractEmitTarget {
			
				
				'personId'?: string| undefined | null
				
				'organizationId'?: string| undefined | null
				
				'locationId'?: string| undefined | null
				
				'skillId'?: string| undefined | null
		}

		interface DoesHonorPermissionContractEmitTargetSchema extends SpruceSchema.Schema {
			id: 'doesHonorPermissionContractEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'skillId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type DoesHonorPermissionContractEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DoesHonorPermissionContractEmitPayload {
			
				
				'id': string
		}

		interface DoesHonorPermissionContractEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'doesHonorPermissionContractEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type DoesHonorPermissionContractEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DoesHonorPermissionContractEmitTargetAndPayload {
			
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitTarget| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitPayload
		}

		interface DoesHonorPermissionContractEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'doesHonorPermissionContractEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitPayloadSchema,}
			            },
			    }
		}

		type DoesHonorPermissionContractEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DoesHonorPermissionContractRespondPayload {
			
				
				'doesHonor': boolean
		}

		interface DoesHonorPermissionContractRespondPayloadSchema extends SpruceSchema.Schema {
			id: 'doesHonorPermissionContractRespondPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'doesHonor': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type DoesHonorPermissionContractRespondPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractRespondPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetConversationTopicsTopic {
			
				
				'key': string
		}

		interface GetConversationTopicsTopicSchema extends SpruceSchema.Schema {
			id: 'getConversationTopicsTopic',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'key': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type GetConversationTopicsTopicEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetConversationTopicsTopicSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetConversationTopicsResponsePayload {
			
				
				'topics': SpruceSchemas.Mercury.v2020_12_25.GetConversationTopicsTopic[]
		}

		interface GetConversationTopicsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getConversationTopicsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'topics': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetConversationTopicsTopicSchema,}
			            },
			    }
		}

		type GetConversationTopicsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetConversationTopicsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetEventContractsResponsePayload {
			
				
				'contracts': SpruceSchemas.Mercury.v2020_12_25.EventContract[]
		}

		interface GetEventContractsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getEventContractsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'contracts': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.EventContractSchema,}
			            },
			    }
		}

		type GetEventContractsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetEventContractsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetLocationTargetPayload {
			
				
				'locationId': string
		}

		interface GetLocationTargetPayloadSchema extends SpruceSchema.Schema {
			id: 'getLocationTargetPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type GetLocationTargetPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetLocationTargetPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetLocationEmitTargetAndPayload {
			
				
				'target': SpruceSchemas.Mercury.v2020_12_25.GetLocationTargetPayload
		}

		interface GetLocationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getLocationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetLocationTargetPayloadSchema,}
			            },
			    }
		}

		type GetLocationEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetLocationEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetLocationResponsePayload {
			
				
				'location': SpruceSchemas.Spruce.v2020_07_22.Location
		}

		interface GetLocationResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getLocationResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'location': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LocationSchema,}
			            },
			    }
		}

		type GetLocationResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetLocationResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetOrganizationTargetPayload {
			
				
				'organizationId': string
		}

		interface GetOrganizationTargetPayloadSchema extends SpruceSchema.Schema {
			id: 'getOrganizationTargetPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type GetOrganizationTargetPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetOrganizationTargetPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetOrganizationEmitTargetAndPayload {
			
				
				'target': SpruceSchemas.Mercury.v2020_12_25.GetOrganizationTargetPayload
		}

		interface GetOrganizationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getOrganizationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetOrganizationTargetPayloadSchema,}
			            },
			    }
		}

		type GetOrganizationEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetOrganizationEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetOrgResponsePayload {
			
				
				'organization': SpruceSchemas.Spruce.v2020_07_22.Organization
		}

		interface GetOrgResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getOrgResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organization': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.OrganizationSchema,}
			            },
			    }
		}

		type GetOrgResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetOrgResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetRoleEmitTarget {
			
				
				'roleId': string
		}

		interface GetRoleEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getRoleEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'roleId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type GetRoleEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetRoleEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetRoleEmitTargetAndPayload {
			
				
				'target': SpruceSchemas.Mercury.v2020_12_25.GetRoleEmitTarget
		}

		interface GetRoleEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getRoleEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetRoleEmitTargetSchema,}
			            },
			    }
		}

		type GetRoleEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetRoleEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetRoleResponsePayload {
			
				
				'role': SpruceSchemas.Spruce.v2020_07_22.Role
		}

		interface GetRoleResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getRoleResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'role': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.RoleSchema,}
			            },
			    }
		}

		type GetRoleResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetRoleResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetSkillTargetPayload {
			
				
				'skillId': string
		}

		interface GetSkillTargetPayloadSchema extends SpruceSchema.Schema {
			id: 'getSkillTargetPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skillId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type GetSkillTargetPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetSkillTargetPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetSkillEmitPayload {
			
				
				'shouldIncludeApiKey'?: boolean| undefined | null
		}

		interface GetSkillEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'getSkillEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'shouldIncludeApiKey': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type GetSkillEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetSkillEmitTargetAndPayload {
			
				
				'target': SpruceSchemas.Mercury.v2020_12_25.GetSkillTargetPayload
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitPayload| undefined | null
		}

		interface GetSkillEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getSkillEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetSkillTargetPayloadSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitPayloadSchema,}
			            },
			    }
		}

		type GetSkillEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetSkillResponsePayload {
			
				
				'skill': SpruceSchemas.Spruce.v2020_07_22.Skill
		}

		interface GetSkillResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getSkillResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skill': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.SkillSchema,}
			            },
			    }
		}

		type GetSkillResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetSkillResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface HealthCheckItem {
			
				
				'status'?: ("passed")| undefined | null
		}

		interface HealthCheckItemSchema extends SpruceSchema.Schema {
			id: 'healthCheckItem',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'status': {
			                type: 'select',
			                options: {choices: [{"value":"passed","label":"Passed"}],}
			            },
			    }
		}

		type HealthCheckItemEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.HealthCheckItemSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface HealthResponsePayload {
			
				
				'skill'?: SpruceSchemas.Mercury.v2020_12_25.HealthCheckItem| undefined | null
				
				'mercury'?: SpruceSchemas.Mercury.v2020_12_25.HealthCheckItem| undefined | null
		}

		interface HealthResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'healthResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skill': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.HealthCheckItemSchema,}
			            },
			            /** . */
			            'mercury': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.HealthCheckItemSchema,}
			            },
			    }
		}

		type HealthResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.HealthResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface InstallSkillEmitTarget {
			
				
				'organizationId': string
		}

		interface InstallSkillEmitTargetSchema extends SpruceSchema.Schema {
			id: 'installSkillEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type InstallSkillEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface InstallSkillEmitPayload {
			
				
				'skillId': string
		}

		interface InstallSkillEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'installSkillEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skillId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type InstallSkillEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface InstallSkillEmitTargetAndPayload {
			
				
				'target': SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitTarget
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitPayload
		}

		interface InstallSkillEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'installSkillEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitPayloadSchema,}
			            },
			    }
		}

		type InstallSkillEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface InstallSkillResponsePayload {
			
		}

		interface InstallSkillResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'installSkillResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type InstallSkillResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.InstallSkillResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface IsSkillInstalledTargetPayload {
			
				
				'organizationId': string
		}

		interface IsSkillInstalledTargetPayloadSchema extends SpruceSchema.Schema {
			id: 'isSkillInstalledTargetPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type IsSkillInstalledTargetPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledTargetPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface IsSkillInstalledEmitPayload {
			
				
				'skillId': string
		}

		interface IsSkillInstalledEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'isSkillInstalledEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skillId': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type IsSkillInstalledEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface IsSkillInstalledEmitTargetAndPayload {
			
				
				'target': SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledTargetPayload
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitPayload
		}

		interface IsSkillInstalledEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'isSkillInstalledEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledTargetPayloadSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitPayloadSchema,}
			            },
			    }
		}

		type IsSkillInstalledEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface IsSkillInstalledResponsePayload {
			
				
				'isInstalled': boolean
		}

		interface IsSkillInstalledResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'isSkillInstalledResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'isInstalled': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type IsSkillInstalledResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListLocationsTargetPayload {
			
				
				'organizationId': string
		}

		interface ListLocationsTargetPayloadSchema extends SpruceSchema.Schema {
			id: 'listLocationsTargetPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type ListLocationsTargetPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListLocationsTargetPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListLocationsEmitPayload {
			
				
				'includePrivateLocations'?: boolean| undefined | null
		}

		interface ListLocationsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'listLocationsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'includePrivateLocations': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type ListLocationsEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListLocationsEmitTargetAndPayload {
			
				
				'target': SpruceSchemas.Mercury.v2020_12_25.ListLocationsTargetPayload
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitPayload| undefined | null
		}

		interface ListLocationsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listLocationsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListLocationsTargetPayloadSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitPayloadSchema,}
			            },
			    }
		}

		type ListLocationsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListLocationsResponsePayload {
			
				
				'locations': SpruceSchemas.Spruce.v2020_07_22.Location[]
		}

		interface ListLocationsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listLocationsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locations': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LocationSchema,}
			            },
			    }
		}

		type ListLocationsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListLocationsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListOrgsEmitPayload {
			
				
				'showMineOnly'?: boolean| undefined | null
		}

		interface ListOrgsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'listOrgsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'showMineOnly': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type ListOrgsEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListOrgsEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListOrganizationsEmitTargetAndPayload {
			
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListOrgsEmitPayload| undefined | null
		}

		interface ListOrganizationsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listOrganizationsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListOrgsEmitPayloadSchema,}
			            },
			    }
		}

		type ListOrganizationsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListOrganizationsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListOrgsResponsePayload {
			
				
				'organizations': SpruceSchemas.Spruce.v2020_07_22.Organization[]
		}

		interface ListOrgsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listOrgsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizations': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.OrganizationSchema,}
			            },
			    }
		}

		type ListOrgsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListOrgsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListRolesEmitTarget {
			
				
				'organizationId': string
				
				'personId'?: string| undefined | null
		}

		interface ListRolesEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listRolesEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'personId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type ListRolesEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListRolesEmitPayload {
			
				
				'shouldIncludePrivateRoles'?: boolean| undefined | null
		}

		interface ListRolesEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'listRolesEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'shouldIncludePrivateRoles': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type ListRolesEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListRolesEmitTargetAndPayload {
			
				
				'target': SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitPayload| undefined | null
		}

		interface ListRolesEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listRolesEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitPayloadSchema,}
			            },
			    }
		}

		type ListRolesEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListRolesResponsePayload {
			
				
				'roles': SpruceSchemas.Spruce.v2020_07_22.Role[]
		}

		interface ListRolesResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listRolesResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'roles': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.RoleSchema,}
			            },
			    }
		}

		type ListRolesResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListRolesResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListSkillsEmitPayload {
			
				
				'showMineOnly'?: boolean| undefined | null
		}

		interface ListSkillsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'listSkillsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'showMineOnly': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type ListSkillsEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListSkillsEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListSkillsEmitTargetAndPayload {
			
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListSkillsEmitPayload| undefined | null
		}

		interface ListSkillsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listSkillsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListSkillsEmitPayloadSchema,}
			            },
			    }
		}

		type ListSkillsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListSkillsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListSkillsSkillsResponsePayload {
			
				/** Id. */
				'id': string
				/** Name. */
				'name': string
				/** Description. */
				'description'?: string| undefined | null
				/** Slug. */
				'slug': string
				
				'dateCreated': number
				
				'dateDeleted'?: number| undefined | null
		}

		interface ListSkillsSkillsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listSkillsSkillsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** Slug. */
			            'slug': {
			                label: 'Slug',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateCreated': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'number',
			                options: undefined
			            },
			    }
		}

		type ListSkillsSkillsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListSkillsSkillsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListSkillsResponsePayload {
			
				
				'skills': SpruceSchemas.Mercury.v2020_12_25.ListSkillsSkillsResponsePayload[]
		}

		interface ListSkillsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listSkillsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skills': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListSkillsSkillsResponsePayloadSchema,}
			            },
			    }
		}

		type ListSkillsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListSkillsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface LogoutResponsePayload {
			
		}

		interface LogoutResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'logoutResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type LogoutResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.LogoutResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterConversationTopicEmitPayloadTopic {
			
				/** Key. A way to identify this topic, must be unique for your skill. */
				'key': string
		}

		interface RegisterConversationTopicEmitPayloadTopicSchema extends SpruceSchema.Schema {
			id: 'registerConversationTopicEmitPayloadTopic',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Key. A way to identify this topic, must be unique for your skill. */
			            'key': {
			                label: 'Key',
			                type: 'text',
			                isRequired: true,
			                hint: 'A way to identify this topic, must be unique for your skill.',
			                options: undefined
			            },
			    }
		}

		type RegisterConversationTopicEmitPayloadTopicEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicEmitPayloadTopicSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterConversationTopicsEmitPayload {
			
				
				'topics': SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicEmitPayloadTopic[]
		}

		interface RegisterConversationTopicsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'registerConversationTopicsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'topics': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicEmitPayloadTopicSchema,}
			            },
			    }
		}

		type RegisterConversationTopicsEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicsEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterConversationTopicsEmitTargetAndPayload {
			
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicsEmitPayload
		}

		interface RegisterConversationTopicsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerConversationTopicsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicsEmitPayloadSchema,}
			            },
			    }
		}

		type RegisterConversationTopicsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterConversationTopicsResponsePayload {
			
		}

		interface RegisterConversationTopicsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerConversationTopicsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type RegisterConversationTopicsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterEventsEmitPayload {
			
				
				'contract': SpruceSchemas.Mercury.v2020_12_25.EventContract
		}

		interface RegisterEventsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'registerEventsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'contract': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.EventContractSchema,}
			            },
			    }
		}

		type RegisterEventsEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterEventsEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterEventsEmitTargetAndPayload {
			
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.RegisterEventsEmitPayload
		}

		interface RegisterEventsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerEventsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RegisterEventsEmitPayloadSchema,}
			            },
			    }
		}

		type RegisterEventsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterEventsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterEventsResponsePayload {
			
		}

		interface RegisterEventsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerEventsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type RegisterEventsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterEventsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterListenersEmitPayload {
			
				
				'fullyQualifiedEventNames': string[]
		}

		interface RegisterListenersEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'registerListenersEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'fullyQualifiedEventNames': {
			                type: 'text',
			                isRequired: true,
			                isArray: true,
			                options: undefined
			            },
			    }
		}

		type RegisterListenersEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterListenersEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterListenersEmitTargetAndPayload {
			
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.RegisterListenersEmitPayload
		}

		interface RegisterListenersEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerListenersEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RegisterListenersEmitPayloadSchema,}
			            },
			    }
		}

		type RegisterListenersEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterListenersEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterSkillEmitPayload {
			
				/** Name. */
				'name': string
				/** Description. */
				'description'?: string| undefined | null
				/** Slug. */
				'slug'?: string| undefined | null
		}

		interface RegisterSkillEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'registerSkillEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** Slug. */
			            'slug': {
			                label: 'Slug',
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		type RegisterSkillEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterSkillEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterSkillEmitTargetAndPayload {
			
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.RegisterSkillEmitPayload
		}

		interface RegisterSkillEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerSkillEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RegisterSkillEmitPayloadSchema,}
			            },
			    }
		}

		type RegisterSkillEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterSkillEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterSkillResponsePayload {
			
				
				'skill': SpruceSchemas.Spruce.v2020_07_22.Skill
		}

		interface RegisterSkillResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerSkillResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skill': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.SkillSchema,}
			            },
			    }
		}

		type RegisterSkillResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterSkillResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RequestPinEmitPayload {
			
				
				'phone': string
		}

		interface RequestPinEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'requestPinEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'phone': {
			                type: 'phone',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type RequestPinEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RequestPinEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RequestPinEmitTargetAndPayload {
			
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.RequestPinEmitPayload
		}

		interface RequestPinEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'requestPinEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RequestPinEmitPayloadSchema,}
			            },
			    }
		}

		type RequestPinEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RequestPinEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RequestPinResponsePayload {
			
				
				'challenge': string
		}

		interface RequestPinResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'requestPinResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'challenge': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type RequestPinResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RequestPinResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ScrambleAccountResponsePayload {
			
		}

		interface ScrambleAccountResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'scrambleAccountResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type ScrambleAccountResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ScrambleAccountResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SendMessageTargetPayload {
			
				
				'locationId'?: string| undefined | null
				
				'personId'?: string| undefined | null
				
				'organizationId'?: string| undefined | null
				
				'skillId'?: string| undefined | null
				
				'roleId'?: string| undefined | null
				
				'phone'?: string| undefined | null
		}

		interface SendMessageTargetPayloadSchema extends SpruceSchema.Schema {
			id: 'sendMessageTargetPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'personId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'skillId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'roleId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'phone': {
			                type: 'phone',
			                options: undefined
			            },
			    }
		}

		type SendMessageTargetPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SendMessageTargetPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SendMessageEmitTargetAndPayload {
			
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.SendMessageTargetPayload| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.SendMessageEmitPayload
		}

		interface SendMessageEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'sendMessageEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SendMessageTargetPayloadSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SendMessageEmitPayloadSchema,}
			            },
			    }
		}

		type SendMessageEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SendMessageEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SendMessageMessagePayload {
			
				
				'classification': ("auth" | "transactional" | "promotional" | "incoming")
				
				'body': string
				
				'context'?: (Record<string, any>)| undefined | null
				
				'topicId'?: string| undefined | null
				
				'choices'?: SpruceSchemas.Spruce.v2020_07_22.FullMessageChoices[]| undefined | null
		}

		interface SendMessageMessagePayloadSchema extends SpruceSchema.Schema {
			id: 'sendMessageMessagePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'classification': {
			                type: 'select',
			                isRequired: true,
			                options: {choices: [{"value":"auth","label":"Auth"},{"value":"transactional","label":"transactional"},{"value":"promotional","label":"Promotional"},{"value":"incoming","label":"incoming"}],}
			            },
			            /** . */
			            'body': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'context': {
			                type: 'raw',
			                isPrivate: true,
			                options: {valueType: `Record<string, any>`,}
			            },
			            /** . */
			            'topicId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'choices': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.FullMessageChoicesSchema,}
			            },
			    }
		}

		type SendMessageMessagePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SendMessageMessagePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SendMessageEmitPayload {
			
				
				'message': SpruceSchemas.Mercury.v2020_12_25.SendMessageMessagePayload
		}

		interface SendMessageEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'sendMessageEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'message': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SendMessageMessagePayloadSchema,}
			            },
			    }
		}

		type SendMessageEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SendMessageEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SendMessageResponsePayload {
			
				
				'message': SpruceSchemas.Spruce.v2020_07_22.Message
		}

		interface SendMessageResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'sendMessageResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'message': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.MessageSchema,}
			            },
			    }
		}

		type SendMessageResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SendMessageResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SetRoleEmitTarget {
			
				
				'organizationId': string
		}

		interface SetRoleEmitTargetSchema extends SpruceSchema.Schema {
			id: 'setRoleEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type SetRoleEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SetRoleEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SetRoleEmitPayload {
			
				
				'personId': string
				
				'roleId': string
		}

		interface SetRoleEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'setRoleEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'roleId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type SetRoleEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SetRoleEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SetRoleEmitTargetAndPayload {
			
				
				'target': SpruceSchemas.Mercury.v2020_12_25.SetRoleEmitTarget
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.SetRoleEmitPayload
		}

		interface SetRoleEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'setRoleEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SetRoleEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SetRoleEmitPayloadSchema,}
			            },
			    }
		}

		type SetRoleEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SetRoleEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SetRoleResponsePayload {
			
		}

		interface SetRoleResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'setRoleResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type SetRoleResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SetRoleResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnInstallSkillEmitTarget {
			
				
				'skillId': string
				
				'organizationId': string
		}

		interface UnInstallSkillEmitTargetSchema extends SpruceSchema.Schema {
			id: 'unInstallSkillEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skillId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type UnInstallSkillEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnInstallSkillEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UninstallSkillEmitTargetAndPayload {
			
				
				'target': SpruceSchemas.Mercury.v2020_12_25.UnInstallSkillEmitTarget
		}

		interface UninstallSkillEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'uninstallSkillEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UnInstallSkillEmitTargetSchema,}
			            },
			    }
		}

		type UninstallSkillEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UninstallSkillEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnInstallSkillResponsePayload {
			
		}

		interface UnInstallSkillResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'unInstallSkillResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type UnInstallSkillResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnInstallSkillResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterConversationTopicsEmitPayload {
			
				
				'topics'?: string[]| undefined | null
				
				'shouldUnregisterAll'?: boolean| undefined | null
		}

		interface UnregisterConversationTopicsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterConversationTopicsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'topics': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'shouldUnregisterAll': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type UnregisterConversationTopicsEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterConversationTopicsEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterConversationTopicsEmitTargetAndPayload {
			
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UnregisterConversationTopicsEmitPayload| undefined | null
		}

		interface UnregisterConversationTopicsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterConversationTopicsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UnregisterConversationTopicsEmitPayloadSchema,}
			            },
			    }
		}

		type UnregisterConversationTopicsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterConversationTopicsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterConversationTopicsResponsePayload {
			
		}

		interface UnregisterConversationTopicsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterConversationTopicsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type UnregisterConversationTopicsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterConversationTopicsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterEventsEmitPayload {
			
				
				'eventNames'?: string[]| undefined | null
				
				'shouldUnregisterAll'?: boolean| undefined | null
		}

		interface UnregisterEventsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterEventsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'eventNames': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'shouldUnregisterAll': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type UnregisterEventsEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterEventsEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterEventsEmitTargetAndPayload {
			
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UnregisterEventsEmitPayload| undefined | null
		}

		interface UnregisterEventsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterEventsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UnregisterEventsEmitPayloadSchema,}
			            },
			    }
		}

		type UnregisterEventsEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterEventsEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterEventsResponsePayload {
			
		}

		interface UnregisterEventsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterEventsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type UnregisterEventsResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterEventsResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterListenersEmitPayload {
			
				
				'fullyQualifiedEventNames'?: string[]| undefined | null
				
				'shouldUnregisterAll'?: boolean| undefined | null
		}

		interface UnregisterListenersEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterListenersEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'fullyQualifiedEventNames': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'shouldUnregisterAll': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		type UnregisterListenersEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterListenersEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterListenersEmitTargetAndPayload {
			
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UnregisterListenersEmitPayload| undefined | null
		}

		interface UnregisterListenersEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterListenersEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UnregisterListenersEmitPayloadSchema,}
			            },
			    }
		}

		type UnregisterListenersEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterListenersEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterListenersResponsePayload {
			
				
				'unregisterCount': number
		}

		interface UnregisterListenersResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterListenersResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'unregisterCount': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type UnregisterListenersResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterListenersResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterSkillEmitTarget {
			
				
				'skillId': string
		}

		interface UnregisterSkillEmitTargetSchema extends SpruceSchema.Schema {
			id: 'unregisterSkillEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skillId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type UnregisterSkillEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterSkillEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterSkillEmitTargetAndPayload {
			
				
				'target': SpruceSchemas.Mercury.v2020_12_25.UnregisterSkillEmitTarget
		}

		interface UnregisterSkillEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterSkillEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UnregisterSkillEmitTargetSchema,}
			            },
			    }
		}

		type UnregisterSkillEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterSkillEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterSkillResponsePayload {
			
		}

		interface UnregisterSkillResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterSkillResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		type UnregisterSkillResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterSkillResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateLocationEmitTarget {
			
				
				'locationId': string
		}

		interface UpdateLocationEmitTargetSchema extends SpruceSchema.Schema {
			id: 'updateLocationEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type UpdateLocationEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateLocationEmitPayload {
			
				/** Name. */
				'name'?: string| undefined | null
				/** Store number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
				'num'?: string| undefined | null
				/** Slug. */
				'slug'?: string| undefined | null
				/** Public. Is this location viewable by guests? */
				'isPublic'?: boolean| undefined | null
				/** Main Phone. */
				'phone'?: string| undefined | null
				/** Timezone. */
				'timezone'?: ("etc/gmt+12" | "pacific/midway" | "pacific/honolulu" | "us/alaska" | "america/los_Angeles" | "america/tijuana" | "us/arizona" | "america/chihuahua" | "us/mountain" | "america/managua" | "us/central" | "america/mexico_City" | "Canada/Saskatchewan" | "america/bogota" | "us/eastern" | "us/east-indiana" | "Canada/atlantic" | "america/caracas" | "america/manaus" | "america/Santiago" | "Canada/Newfoundland" | "america/Sao_Paulo" | "america/argentina/buenos_Aires" | "america/godthab" | "america/montevideo" | "america/Noronha" | "atlantic/cape_Verde" | "atlantic/azores" | "africa/casablanca" | "etc/gmt" | "europe/amsterdam" | "europe/belgrade" | "europe/brussels" | "europe/Sarajevo" | "africa/lagos" | "asia/amman" | "europe/athens" | "asia/beirut" | "africa/cairo" | "africa/Harare" | "europe/Helsinki" | "asia/Jerusalem" | "europe/minsk" | "africa/Windhoek" | "asia/Kuwait" | "europe/moscow" | "africa/Nairobi" | "asia/tbilisi" | "asia/tehran" | "asia/muscat" | "asia/baku" | "asia/Yerevan" | "asia/Kabul" | "asia/Yekaterinburg" | "asia/Karachi" | "asia/calcutta" | "asia/calcutta" | "asia/Katmandu" | "asia/almaty" | "asia/Dhaka" | "asia/Rangoon" | "asia/bangkok" | "asia/Krasnoyarsk" | "asia/Hong_Kong" | "asia/Kuala_Lumpur" | "asia/Irkutsk" | "Australia/Perth" | "asia/taipei" | "asia/tokyo" | "asia/Seoul" | "asia/Yakutsk" | "Australia/adelaide" | "Australia/Darwin" | "Australia/brisbane" | "Australia/canberra" | "Australia/Hobart" | "pacific/guam" | "asia/Vladivostok" | "asia/magadan" | "pacific/auckland" | "pacific/Fiji" | "pacific/tongatapu")| undefined | null
				/** Address. */
				'address'?: SpruceSchema.AddressFieldValue| undefined | null
				
				'dateCreated'?: number| undefined | null
				
				'dateDeleted'?: number| undefined | null
				
				'organizationId'?: string| undefined | null
		}

		interface UpdateLocationEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'updateLocationEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                options: undefined
			            },
			            /** Store number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
			            'num': {
			                label: 'Store number',
			                type: 'text',
			                hint: 'You can use other symbols, like # or dashes. #123 or 32-US-5',
			                options: undefined
			            },
			            /** Slug. */
			            'slug': {
			                label: 'Slug',
			                type: 'text',
			                options: undefined
			            },
			            /** Public. Is this location viewable by guests? */
			            'isPublic': {
			                label: 'Public',
			                type: 'boolean',
			                hint: 'Is this location viewable by guests?',
			                defaultValue: false,
			                options: undefined
			            },
			            /** Main Phone. */
			            'phone': {
			                label: 'Main Phone',
			                type: 'phone',
			                options: undefined
			            },
			            /** Timezone. */
			            'timezone': {
			                label: 'Timezone',
			                type: 'select',
			                options: {choices: [{"value":"etc/gmt+12","label":"International Date Line West"},{"value":"pacific/midway","label":"Midway Island, Samoa"},{"value":"pacific/honolulu","label":"Hawaii"},{"value":"us/alaska","label":"Alaska"},{"value":"america/los_Angeles","label":"Pacific Time (US & Canada)"},{"value":"america/tijuana","label":"Tijuana, Baja California"},{"value":"us/arizona","label":"Arizona"},{"value":"america/chihuahua","label":"Chihuahua, La Paz, Mazatlan"},{"value":"us/mountain","label":"Mountain Time (US & Canada)"},{"value":"america/managua","label":"Central America"},{"value":"us/central","label":"Central Time (US & Canada)"},{"value":"america/mexico_City","label":"Guadalajara, Mexico City, Monterrey"},{"value":"Canada/Saskatchewan","label":"Saskatchewan"},{"value":"america/bogota","label":"Bogota, Lima, Quito, Rio Branco"},{"value":"us/eastern","label":"Eastern Time (US & Canada)"},{"value":"us/east-indiana","label":"Indiana (East)"},{"value":"Canada/atlantic","label":"Atlantic Time (Canada)"},{"value":"america/caracas","label":"Caracas, La Paz"},{"value":"america/manaus","label":"Manaus"},{"value":"america/Santiago","label":"Santiago"},{"value":"Canada/Newfoundland","label":"Newfoundland"},{"value":"america/Sao_Paulo","label":"Brasilia"},{"value":"america/argentina/buenos_Aires","label":"Buenos Aires, Georgetown"},{"value":"america/godthab","label":"Greenland"},{"value":"america/montevideo","label":"Montevideo"},{"value":"america/Noronha","label":"Mid-Atlantic"},{"value":"atlantic/cape_Verde","label":"Cape Verde Is."},{"value":"atlantic/azores","label":"Azores"},{"value":"africa/casablanca","label":"Casablanca, Monrovia, Reykjavik"},{"value":"etc/gmt","label":"Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London"},{"value":"europe/amsterdam","label":"Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"},{"value":"europe/belgrade","label":"Belgrade, Bratislava, Budapest, Ljubljana, Prague"},{"value":"europe/brussels","label":"Brussels, Copenhagen, Madrid, Paris"},{"value":"europe/Sarajevo","label":"Sarajevo, Skopje, Warsaw, Zagreb"},{"value":"africa/lagos","label":"West Central Africa"},{"value":"asia/amman","label":"Amman"},{"value":"europe/athens","label":"Athens, Bucharest, Istanbul"},{"value":"asia/beirut","label":"Beirut"},{"value":"africa/cairo","label":"Cairo"},{"value":"africa/Harare","label":"Harare, Pretoria"},{"value":"europe/Helsinki","label":"Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"},{"value":"asia/Jerusalem","label":"Jerusalem"},{"value":"europe/minsk","label":"Minsk"},{"value":"africa/Windhoek","label":"Windhoek"},{"value":"asia/Kuwait","label":"Kuwait, Riyadh, Baghdad"},{"value":"europe/moscow","label":"Moscow, St. Petersburg, Volgograd"},{"value":"africa/Nairobi","label":"Nairobi"},{"value":"asia/tbilisi","label":"Tbilisi"},{"value":"asia/tehran","label":"Tehran"},{"value":"asia/muscat","label":"Abu Dhabi, Muscat"},{"value":"asia/baku","label":"Baku"},{"value":"asia/Yerevan","label":"Yerevan"},{"value":"asia/Kabul","label":"Kabul"},{"value":"asia/Yekaterinburg","label":"Yekaterinburg"},{"value":"asia/Karachi","label":"Islamabad, Karachi, Tashkent"},{"value":"asia/calcutta","label":"Chennai, Kolkata, Mumbai, New Delhi"},{"value":"asia/calcutta","label":"Sri Jayawardenapura"},{"value":"asia/Katmandu","label":"Kathmandu"},{"value":"asia/almaty","label":"Almaty, Novosibirsk"},{"value":"asia/Dhaka","label":"Astana, Dhaka"},{"value":"asia/Rangoon","label":"Yangon (Rangoon)"},{"value":"asia/bangkok","label":"Bangkok, Hanoi, Jakarta"},{"value":"asia/Krasnoyarsk","label":"Krasnoyarsk"},{"value":"asia/Hong_Kong","label":"Beijing, Chongqing, Hong Kong, Urumqi"},{"value":"asia/Kuala_Lumpur","label":"Kuala Lumpur, Singapore"},{"value":"asia/Irkutsk","label":"Irkutsk, Ulaan Bataar"},{"value":"Australia/Perth","label":"Perth"},{"value":"asia/taipei","label":"Taipei"},{"value":"asia/tokyo","label":"Osaka, Sapporo, Tokyo"},{"value":"asia/Seoul","label":"Seoul"},{"value":"asia/Yakutsk","label":"Yakutsk"},{"value":"Australia/adelaide","label":"Adelaide"},{"value":"Australia/Darwin","label":"Darwin"},{"value":"Australia/brisbane","label":"Brisbane"},{"value":"Australia/canberra","label":"Canberra, Melbourne, Sydney"},{"value":"Australia/Hobart","label":"Hobart"},{"value":"pacific/guam","label":"Guam, Port Moresby"},{"value":"asia/Vladivostok","label":"Vladivostok"},{"value":"asia/magadan","label":"Magadan, Solomon Is., New Caledonia"},{"value":"pacific/auckland","label":"Auckland, Wellington"},{"value":"pacific/Fiji","label":"Fiji, Kamchatka, Marshall Is."},{"value":"pacific/tongatapu","label":"Nuku'alofa"}],}
			            },
			            /** Address. */
			            'address': {
			                label: 'Address',
			                type: 'address',
			                options: undefined
			            },
			            /** . */
			            'dateCreated': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		type UpdateLocationEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateLocationEmitTargetAndPayload {
			
				
				'target': SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitPayload| undefined | null
		}

		interface UpdateLocationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updateLocationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitPayloadSchema,}
			            },
			    }
		}

		type UpdateLocationEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateLocationResponsePayload {
			
				
				'location': SpruceSchemas.Spruce.v2020_07_22.Location
		}

		interface UpdateLocationResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'updateLocationResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'location': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LocationSchema,}
			            },
			    }
		}

		type UpdateLocationResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateLocationResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateOrgEmitTarget {
			
				
				'organizationId': string
		}

		interface UpdateOrgEmitTargetSchema extends SpruceSchema.Schema {
			id: 'updateOrgEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type UpdateOrgEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateOrgEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateOrgEmitPayload {
			
				/** Name. */
				'name'?: string| undefined | null
				
				'dateCreated'?: number| undefined | null
				
				'dateDeleted'?: number| undefined | null
		}

		interface UpdateOrgEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'updateOrgEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'dateCreated': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'number',
			                options: undefined
			            },
			    }
		}

		type UpdateOrgEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateOrgEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateOrganizationEmitTargetAndPayload {
			
				
				'target': SpruceSchemas.Mercury.v2020_12_25.UpdateOrgEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UpdateOrgEmitPayload| undefined | null
		}

		interface UpdateOrganizationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updateOrganizationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateOrgEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateOrgEmitPayloadSchema,}
			            },
			    }
		}

		type UpdateOrganizationEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateOrganizationEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateOrg {
			
				/** Name. */
				'name'?: string| undefined | null
				/** Slug. */
				'slug'?: string| undefined | null
				
				'dateCreated'?: number| undefined | null
				
				'dateDeleted'?: number| undefined | null
		}

		interface UpdateOrgSchema extends SpruceSchema.Schema {
			id: 'updateOrg',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                options: undefined
			            },
			            /** Slug. */
			            'slug': {
			                label: 'Slug',
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'dateCreated': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'number',
			                options: undefined
			            },
			    }
		}

		type UpdateOrgEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateOrgSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateOrgResponsePayload {
			
				
				'organization': SpruceSchemas.Mercury.v2020_12_25.UpdateOrg
		}

		interface UpdateOrgResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'updateOrgResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organization': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateOrgSchema,}
			            },
			    }
		}

		type UpdateOrgResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateOrgResponsePayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateRoleEmitTarget {
			
				
				'roleId': string
		}

		interface UpdateRoleEmitTargetSchema extends SpruceSchema.Schema {
			id: 'updateRoleEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'roleId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		type UpdateRoleEmitTargetEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitTargetSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateRoleEmitPayload {
			
				/** Name. */
				'name'?: string| undefined | null
				/** Base. Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role. */
				'base'?: ("owner" | "groupManager" | "manager" | "teammate" | "guest" | "anonymous")| undefined | null
				/** Description. */
				'description'?: string| undefined | null
				
				'dateDeleted'?: number| undefined | null
				/** Public. Should I let people that are not part of this organization this role? */
				'isPublic'?: boolean| undefined | null
		}

		interface UpdateRoleEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'updateRoleEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                options: undefined
			            },
			            /** Base. Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role. */
			            'base': {
			                label: 'Base',
			                type: 'select',
			                hint: 'Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role.',
			                options: {choices: [{"label":"Owner","value":"owner"},{"label":"Group manager","value":"groupManager"},{"label":"Manager","value":"manager"},{"label":"Teammate","value":"teammate"},{"label":"Guest","value":"guest"},{"label":"Anonymous","value":"anonymous"}],}
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'number',
			                options: undefined
			            },
			            /** Public. Should I let people that are not part of this organization this role? */
			            'isPublic': {
			                label: 'Public',
			                type: 'boolean',
			                hint: 'Should I let people that are not part of this organization this role?',
			                options: undefined
			            },
			    }
		}

		type UpdateRoleEmitPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateRoleEmitTargetAndPayload {
			
				
				'target': SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitPayload| undefined | null
		}

		interface UpdateRoleEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updateRoleEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitPayloadSchema,}
			            },
			    }
		}

		type UpdateRoleEmitTargetAndPayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitTargetAndPayloadSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateRoleResponsePayload {
			
				
				'role': SpruceSchemas.Spruce.v2020_07_22.Role
		}

		interface UpdateRoleResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'updateRoleResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'role': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.RoleSchema,}
			            },
			    }
		}

		type UpdateRoleResponsePayloadEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateRoleResponsePayloadSchema>

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

		type EventContractEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.EventContractSchema>

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

		type PermissionContractEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.PermissionContractSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface EventSignature {
			
				
				'isGlobal'?: boolean| undefined | null
				
				'responsePayloadSchema'?: (SpruceSchema.Schema)| undefined | null
				
				'emitPayloadSchema'?: (SpruceSchema.Schema)| undefined | null
				
				'listenPermissionContract'?: SpruceSchemas.Mercury.v2020_12_25.PermissionContract| undefined | null
				
				'emitPermissionContract'?: SpruceSchemas.Mercury.v2020_12_25.PermissionContract| undefined | null
		}

		interface EventSignatureSchema extends SpruceSchema.Schema {
			id: 'eventSignature',
			version: 'v2020_12_25',
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
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PermissionContractSchema,}
			            },
			            /** . */
			            'emitPermissionContract': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PermissionContractSchema,}
			            },
			    }
		}

		type EventSignatureEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.EventSignatureSchema>

	}


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
			dynamicFieldSignature: { 
			    type: 'schema',
			    keyName: 'eventName',
			    isRequired: true,
			    options: {schema: SpruceSchemas.Mercury.v2020_12_25.EventSignatureSchema,}
			}		}

		type EventSignaturesByNameEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.EventSignaturesByNameSchema>

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
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
			version: 'v2020_12_25',
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

		type StatusFlagsEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.StatusFlagsSchema>

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
				/** Guest. */
				'guest'?: SpruceSchemas.Mercury.v2020_12_25.StatusFlags| undefined | null
				/** Anonymous. */
				'anonymous'?: SpruceSchemas.Mercury.v2020_12_25.StatusFlags| undefined | null
		}

		interface PermissionDefaultsSchema extends SpruceSchema.Schema {
			id: 'permissionDefaults',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
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
			            /** Guest. */
			            'guest': {
			                label: 'Guest',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.StatusFlagsSchema,}
			            },
			            /** Anonymous. */
			            'anonymous': {
			                label: 'Anonymous',
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.StatusFlagsSchema,}
			            },
			    }
		}

		type PermissionDefaultsEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.PermissionDefaultsSchema>

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

		type PermissionEntity = SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.PermissionSchema>

	}





























}
