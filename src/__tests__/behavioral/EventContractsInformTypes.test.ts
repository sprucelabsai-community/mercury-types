import { buildSchema } from '@sprucelabs/schema'
import AbstractSpruceTest from '@sprucelabs/test'
import { assert, test } from '@sprucelabs/test-utils'
import StubClient from '../../tests/StubClient'
import MercuryEventEmitter, {
    EventContract,
    EventName,
    ListenerCallback,
    ListenerResponse,
    ListenerResponseValues,
} from '../../types/mercury.types'
import buildEventContract from '../../utilities/buildEventContract'
import validateEventContract from '../../utilities/validateEventContract'

export default class TypesWorkTest extends AbstractSpruceTest {
    @test('Can pull event names (always passes, types will fail)')
    protected static async canPullEventName() {
        type Names = EventName<SignupContract>
        assert.isExactType<Names, 'sign-up' | 'log-out' | 'did-message'>(true)
    }

    @test(
        'Emitting with contract with payload (always passes, types will fail)'
    )
    protected static async emitWithPayload() {
        const client = new StubClient<TestContract>()
        const results = await client.emit(
            'spruce.testWithPayload',
            { emitPayloadField: '100' },
            (response) => {
                assert.isType<string | undefined>(
                    response.payload?.responsePayloadField
                )
            }
        )

        assert.isTruthy(results.responses[0].payload)
        assert.isType<string>(results.responses[0].payload.responsePayloadField)
    }

    @test(
        'Emitting with contract without payload (always passes, types will fail)'
    )
    protected static async emitWithoutPayload() {
        const client = new StubClient<TestContract>()
        const results = await client.emit(
            'spruce.testWithoutPayload',
            async () => {
                console.log('never called')
            }
        )

        assert.isType<never | undefined>(results.responses[0].payload)
        assert.isEqual(results.responses[0].responderRef, 'test')
    }

    @test('On with contract with payload (always passes, types will fail)')
    protected static async onWithPayload() {
        const client = new StubClient<TestContract>()

        await client.on('spruce.testWithPayload', async (payload) => {
            assert.isExactType<typeof payload, { emitPayloadField: string }>(
                true
            )

            return {
                responsePayloadField: 'response!',
            }
        })
    }

    @test('On with contract without payload (always passes, types will fail)')
    protected static async onWithoutPayload() {
        const client = new StubClient<TestContract>()
        await client.on('spruce.testWithoutPayload', () => {})
    }

    @test('Handles target and payload (always passes, types will fail)')
    protected static async handlesTarget() {
        const client = new StubClient<SignupContract>()
        const results = await client.emit('sign-up', {
            target: {
                organizationId: '10',
            },
            payload: {
                firstName: 'test',
                lastName: 'user',
            },
        })

        const id = results.responses[0].payload?.id
        assert.isExactType<string | undefined, typeof id>(true)
    }

    @test()
    protected static async typesEmitAndFlattenResponses() {
        const client = new StubClient<TestContract>()
        const results = await client.emitAndFlattenResponses(
            'spruce.testWithPayload',
            {
                emitPayloadField: 'taco',
            }
        )

        assert.isExactType<
            {
                responsePayloadField: string
            }[],
            typeof results
        >(true)
    }

    @test()
    protected static async responsePayloadWithAllOptionalFieldsMakesResponseOptional() {
        const client =
            new StubClient<SignupContract>() as MercuryEventEmitter<SignupContract>

        await client.on('did-message', () => {})
        await client.on('did-message', () => {
            return {}
        })

        type IEventSignature = SignupContract['eventSignatures']['did-message']

        const cb: ListenerCallback<IEventSignature> = () => {}

        const required: ListenerResponse<IEventSignature> = {}

        const values: ListenerResponseValues<
            IEventSignature['responsePayloadSchema']
        > = {}

        console.log(cb)
        console.log(required)
        console.log(values)
    }
}

const responsePayload = buildSchema({
    id: 'listenResponse',
    name: 'Test listen response',
    fields: {
        responsePayloadField: {
            type: 'text',
            isRequired: true,
        },
    },
})

const emitPayload = buildSchema({
    id: 'emit',
    name: 'Test emit payload',
    fields: {
        emitPayloadField: {
            type: 'text',
            isRequired: true,
        },
    },
})

interface TestContract extends EventContract {
    eventSignatures: {
        'spruce.testWithPayload': {
            responsePayloadSchema: typeof responsePayload
            emitPayloadSchema: typeof emitPayload
        }
        'spruce.testWithoutPayload': {
            responsePayloadSchema: null
        }
    }
}

const signupContract = buildEventContract({
    eventSignatures: {
        'sign-up': {
            responsePayloadSchema: buildSchema({
                id: 'response',
                fields: {
                    id: {
                        type: 'text',
                        isRequired: true,
                    },
                },
            }),
            emitPayloadSchema: buildSchema({
                id: 'targetAndPayload',
                fields: {
                    target: {
                        type: 'schema',
                        isRequired: true,
                        options: {
                            schema: buildSchema({
                                id: 'target',
                                fields: {
                                    organizationId: {
                                        type: 'text',
                                    },
                                    locationId: {
                                        type: 'text',
                                    },
                                    personId: {
                                        type: 'text',
                                    },
                                },
                            }),
                        },
                    },
                    payload: {
                        type: 'schema',
                        isRequired: true,
                        options: {
                            schema: buildSchema({
                                id: 'payload',
                                fields: {
                                    firstName: {
                                        type: 'text',
                                        isRequired: true,
                                    },
                                    lastName: {
                                        type: 'text',
                                        isRequired: true,
                                    },
                                },
                            }),
                        },
                    },
                },
            }),
        },
        'log-out': {},
        'did-message': {
            responsePayloadSchema: buildSchema({
                id: 'didMessageResponse',
                fields: {
                    optionalField: {
                        type: 'text',
                    },
                },
            }),
        },
    },
})

validateEventContract(signupContract)

type SignupContract = typeof signupContract
