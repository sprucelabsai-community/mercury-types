import { SchemaValues, Schema } from '@sprucelabs/schema'
import MercuryEventEmitter, {
    MercuryAggregateResponse,
    EmitCallback,
    EventContract,
    EventSignature,
    KeyOf,
    EventName,
    ListenerCallback,
} from '../types/mercury.types'

export default class StubClient<
    Contract extends EventContract,
> implements MercuryEventEmitter<Contract> {
    public async emitAndFlattenResponses<
        Fqen extends EventName<Contract> = EventName<Contract>,
        IEventSignature extends EventSignature =
            Contract['eventSignatures'][Fqen],
        EmitSchema extends Schema =
            IEventSignature['emitPayloadSchema'] extends Schema
                ? IEventSignature['emitPayloadSchema']
                : never,
        ResponseSchema extends Schema =
            IEventSignature['responsePayloadSchema'] extends Schema
                ? IEventSignature['responsePayloadSchema']
                : never,
        ResponsePayload = ResponseSchema extends Schema
            ? SchemaValues<ResponseSchema>
            : never,
    >(
        _eventName: Fqen,
        _payload:
            | (EmitSchema extends Schema ? SchemaValues<EmitSchema> : never)
            | EmitCallback<Contract, Fqen>
            | undefined,
        _cb?: EmitCallback<Contract, Fqen> | undefined
    ): Promise<ResponsePayload[]> {
        return [] as any
    }

    public async emit<
        Fqen extends EventName<Contract> = EventName<Contract>,
        IEventSignature extends EventSignature =
            Contract['eventSignatures'][Fqen],
        EmitSchema extends Schema =
            IEventSignature['emitPayloadSchema'] extends Schema
                ? IEventSignature['emitPayloadSchema']
                : never,
        ResponseSchema extends Schema =
            IEventSignature['responsePayloadSchema'] extends Schema
                ? IEventSignature['responsePayloadSchema']
                : never,
        ResponsePayload = ResponseSchema extends Schema
            ? SchemaValues<ResponseSchema>
            : never,
    >(
        _eventName: Fqen,
        _payload:
            | (EmitSchema extends Schema ? SchemaValues<EmitSchema> : never)
            | EmitCallback<Contract, Fqen>
            | undefined,
        _cb?: EmitCallback<Contract, Fqen> | undefined
    ): Promise<MercuryAggregateResponse<ResponsePayload>> {
        //@ts-ignore
        const results = {
            totalContracts: 1,
            totalResponses: 1,
            responses: [
                {
                    responderRef: 'test',
                    payload: {
                        responsePayloadField: 'hello',
                    },
                },
            ],
        } as MercuryAggregateResponse<ResponsePayload>

        return results
    }

    public async on<
        Fqen extends KeyOf<Contract['eventSignatures']> = KeyOf<
            Contract['eventSignatures']
        >,
        IEventSignature extends EventSignature =
            Contract['eventSignatures'][Fqen],
    >(
        _eventName: Fqen,
        _cb: ListenerCallback<IEventSignature>
    ): Promise<void> {}

    public async off(_eventName: EventName<Contract>): Promise<number> {
        return 0
    }
}
