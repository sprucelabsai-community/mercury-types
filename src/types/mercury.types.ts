import AbstractSpruceError from '@sprucelabs/error'
import { Schema, SchemaValues } from '@sprucelabs/schema'
import { SpruceSchemas } from '#spruce/schemas/schemas.types'
import { authorizerStatuses } from '../constants'

export type EventContract = SpruceSchemas.Mercury.v2020_12_25.EventContract
export type EventSignature = SpruceSchemas.Mercury.v2020_12_25.EventSignature
export type EventSignaturesByName =
	SpruceSchemas.Mercury.v2020_12_25.EventSignaturesByName
export type Permission = SpruceSchemas.Mercury.v2020_12_25.Permission
type Statuses = typeof authorizerStatuses
export type AuthorizerStatus = Statuses[number]['name']
export type PermissionContract =
	SpruceSchemas.Mercury.v2020_12_25.PermissionContract
export interface MercuryAggregateResponse<Payload> {
	totalContracts: number
	totalResponses: number
	totalErrors: number
	responses: MercurySingleResponse<Payload>[]
}
export interface MercurySingleResponse<Payload> {
	responderRef?: string
	errors?: AbstractSpruceError<any>[]
	payload?: Payload
}
export type KeyOf<O> = Extract<keyof O, string>

export type EventContractEmitPayloads<Contract extends EventContract> = {
	[N in EventNames<Contract>]: Contract['eventSignatures'][N]['emitPayloadSchema'] extends Schema
		? SchemaValues<Contract['eventSignatures'][N]['emitPayloadSchema']>
		: never
}

type EmitCallbackReturnValue = void | { errors: AbstractSpruceError<any>[] }

export declare type EmitCallback<
	Contract extends EventContract,
	EventName extends EventNames<Contract>,
	IEventSignature extends EventSignature = Contract['eventSignatures'][EventName],
	ResponseSchema extends Schema = IEventSignature['responsePayloadSchema'] extends Schema
		? IEventSignature['responsePayloadSchema']
		: never,
	ResponsePayload = ResponseSchema extends Schema
		? SchemaValues<ResponseSchema>
		: never
> = (
	payload: MercurySingleResponse<ResponsePayload>
) => EmitCallbackReturnValue | Promise<EmitCallbackReturnValue>
export default interface MercuryEventEmitter<Contract extends EventContract> {
	emit<
		EventName extends KeyOf<Contract['eventSignatures']> = KeyOf<
			Contract['eventSignatures']
		>,
		IEventSignature extends EventSignature = Contract['eventSignatures'][EventName],
		EmitSchema extends Schema = IEventSignature['emitPayloadSchema'] extends Schema
			? IEventSignature['emitPayloadSchema']
			: never,
		ResponseSchema extends Schema = IEventSignature['responsePayloadSchema'] extends Schema
			? IEventSignature['responsePayloadSchema']
			: never
	>(
		eventName: EventName,
		payload: SchemaValues<EmitSchema>,
		cb?: EmitCallback<Contract, EventName>
	): Promise<MercuryAggregateResponse<SchemaValues<ResponseSchema>>>

	emit<
		EventName extends KeyOf<Contract['eventSignatures']> = KeyOf<
			Contract['eventSignatures']
		>,
		IEventSignature extends EventSignature = Contract['eventSignatures'][EventName],
		ResponseSchema extends Schema = IEventSignature['responsePayloadSchema'] extends Schema
			? IEventSignature['responsePayloadSchema']
			: never
	>(
		eventName: EventName,
		cb?: EmitCallback<Contract, EventName>
	): Promise<MercuryAggregateResponse<SchemaValues<ResponseSchema>>>

	on<
		EventName extends KeyOf<Contract['eventSignatures']> = KeyOf<
			Contract['eventSignatures']
		>,
		IEventSignature extends EventSignature = Contract['eventSignatures'][EventName],
		EmitSchema extends Schema = IEventSignature['emitPayloadSchema'] extends Schema
			? IEventSignature['emitPayloadSchema']
			: never
	>(
		eventName: EventName,
		cb: (
			payload: EmitSchema extends Schema ? SchemaValues<EmitSchema> : never
		) => IEventSignature['responsePayloadSchema'] extends Schema
			?
					| Promise<SchemaValues<IEventSignature['responsePayloadSchema']>>
					| SchemaValues<IEventSignature['responsePayloadSchema']>
			: Promise<void> | void
	): Promise<void>
	emitAndFlattenResponses<
		EventName extends KeyOf<Contract['eventSignatures']> = KeyOf<
			Contract['eventSignatures']
		>,
		IEventSignature extends EventSignature = Contract['eventSignatures'][EventName],
		EmitSchema extends Schema = IEventSignature['emitPayloadSchema'] extends Schema
			? IEventSignature['emitPayloadSchema']
			: never,
		ResponseSchema extends Schema = IEventSignature['responsePayloadSchema'] extends Schema
			? IEventSignature['responsePayloadSchema']
			: never
	>(
		eventName: EventName,
		payload: SchemaValues<EmitSchema>,
		cb?: EmitCallback<Contract, EventName>
	): Promise<SchemaValues<ResponseSchema>[]>

	emitAndFlattenResponses<
		EventName extends KeyOf<Contract['eventSignatures']> = KeyOf<
			Contract['eventSignatures']
		>,
		IEventSignature extends EventSignature = Contract['eventSignatures'][EventName],
		ResponseSchema extends Schema = IEventSignature['responsePayloadSchema'] extends Schema
			? IEventSignature['responsePayloadSchema']
			: never
	>(
		eventName: EventName,
		cb?: EmitCallback<Contract, EventName>
	): Promise<SchemaValues<ResponseSchema>[]>

	off(eventName: EventNames<Contract>, cb?: any): Promise<number>
}

export interface SkillEventSignatures extends EventSignaturesByName {}

export interface SkillEventContract extends EventContract {
	eventSignatures: RemoveStringKeys<SkillEventSignatures>
}

interface PCM {
	[contractId: string]: string[]
}

export interface PermissionContractMap extends PCM {}

export type PermissionContractId = keyof RemoveStringKeys<PermissionContractMap>
export type PermissionId<ContractId extends PermissionContractId> =
	PermissionContractMap[ContractId][number]

type RemoveStringKeys<T> = {
	[K in keyof T as string extends K
		? never
		: number extends K
		? never
		: K]: T[K]
}

export type EventName<Contract extends EventContract = SkillEventContract> =
	KeyOf<Contract['eventSignatures']>

/**
 * @deprecated EventNames -> EventName
 */
export type EventNames<Contract extends EventContract = SkillEventContract> =
	EventName<Contract>
