import { buildSchema } from '@sprucelabs/schema'
import permissionContractBuilder from './permissionContract.builder'

export default buildSchema({
	id: 'eventContract',
	name: 'Event contract',
	description: 'A Mercury Event Contract.',
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
