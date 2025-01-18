import { buildSchema } from '@sprucelabs/schema'
import permissionContractBuilder from './permissionContract.builder'

const permissionReferenceSchema = buildSchema({
    id: 'permissionReference',
    importsWhenLocal: [`import * as MercuryTypes from '../../'`],
    typeSuffix:
        '<ContractId extends MercuryTypes.PermissionContractId = MercuryTypes.PermissionContractId>',
    importsWhenRemote: [
        `import * as MercuryTypes from '@sprucelabs/mercury-types'`,
    ],
    fields: {
        contractId: {
            type: 'raw',
            isRequired: true,
            options: {
                valueType: 'ContractId',
            },
        },
        permissionIdsAny: {
            type: 'raw',
            isArray: true,
            options: {
                valueType: 'MercuryTypes.PermissionId<ContractId>',
            },
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
                                    description: {
                                        type: 'text',
                                    },
                                    isGlobal: {
                                        type: 'boolean',
                                        defaultValue: false,
                                    },
                                    responsePayloadSchema: {
                                        type: 'raw',
                                        options: {
                                            valueType: 'SpruceSchema.Schema',
                                        },
                                    },
                                    emitPayloadSchema: {
                                        type: 'raw',
                                        options: {
                                            valueType: 'SpruceSchema.Schema',
                                        },
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
                                                    pathsToLinks: {
                                                        type: 'text',
                                                        isArray: true,
                                                        minArrayLength: 0,
                                                    },
                                                    pathsToChoices: {
                                                        type: 'text',
                                                        isArray: true,
                                                        minArrayLength: 0,
                                                    },
                                                    pathToContext: {
                                                        type: 'text',
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
