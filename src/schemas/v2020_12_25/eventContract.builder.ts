import { buildSchema } from '@sprucelabs/schema'
import permissionContractBuilder from './permissionContract.builder'

const permissionReferenceSchema = buildSchema({
	id: 'permissionReference',
	fields: {
		contractId: {
			type: 'id',
			isRequired: true,
		},
		permissionIdsAny: {
			type: 'id',
			isArray: true,
		},
	},
})

export default buildSchema({
	id: 'eventContract',
	name: 'Event contract',
	description: 'A Mercury Event Contract.',
	moduleToImportFromWhenRemote: '@sprucelabs/mercury-types',
	importsWhenRemote: ["import '@sprucelabs/mercury-types'"],
	fields: {
		id: {
			type: 'id',
		},
		eventSignatures: {
			type: 'schema',
			isRequired: true,
			options: {
				schema: {
					id: 'eventSignaturesByName',
					dynamicFieldSignature: {
						keyName: 'eventName',
						type: 'schema',
						isRequired: true,
						options: {
							schema: {
								id: 'eventSignature',
								name: 'Event Signature',
								description: '',
								fields: {
									isGlobal: {
										type: 'boolean',
										defaultValue: false,
									},
									responsePayloadSchema: {
										type: 'raw',
										options: { valueType: 'SpruceSchema.Schema' },
									},
									emitPayloadSchema: {
										type: 'raw',
										options: { valueType: 'SpruceSchema.Schema' },
									},
									feed: {
										type: 'schema',
										options: {
											schema: buildSchema({
												id: 'feedOptions',
												fields: {
													template: {
														type: 'text',
														hint: 'A handlebarsjs template used to render the chat bubbles in the feed. You will have both the entire target and payload available to you in the template. See http://developer.spruce.bot for more details.',
													},
												},
											}),
										},
									},
									listenPermissions: {
										type: 'schema',
										options: {
											schema: permissionReferenceSchema,
										},
									},
									emitPermissions: {
										type: 'schema',
										options: {
											schema: permissionReferenceSchema,
										},
									},
									listenPermissionContract: {
										type: 'schema',
										options: {
											schema: permissionContractBuilder,
										},
									},
									emitPermissionContract: {
										type: 'schema',
										options: {
											schema: permissionContractBuilder,
										},
									},
								},
							},
						},
					},
				},
			},
		},
	},
})
