export { default as permissionDefaultsSchema } from './.spruce/schemas/mercury/v2020_12_25/permissionDefaults.schema'
export { default as eventContractSchema } from './.spruce/schemas/mercury/v2020_12_25/eventContract.schema'
export { default as eventSignatureSchema } from './.spruce/schemas/mercury/v2020_12_25/eventSignature.schema'
export { default as eventSignaturesByNameSchema } from './.spruce/schemas/mercury/v2020_12_25/eventSignaturesByName.schema'
export { default as permissionSchema } from './.spruce/schemas/mercury/v2020_12_25/permission.schema'
export { default as permissionContractSchema } from './.spruce/schemas/mercury/v2020_12_25/permissionContract.schema'
export { default as statusFlagsSchema } from './.spruce/schemas/mercury/v2020_12_25/statusFlags.schema'

export * from './types/mercury.types'
export * from './.spruce/schemas/schemas.types'
export { default as MercuryEventEmitter } from './types/mercury.types'
export * from './constants'
export { default as buildEventContract } from './utilities/buildEventContract'
export { default as buildPermissionContract } from './utilities/buildPermissionContract'
export { default as validateEventContract } from './utilities/validateEventContract'
import { default as coreEventContractsSplit } from '#spruce/events/events.contract'
import { SkillEventContract as CoreEventContract } from './types/mercury.types'

export const coreEventContracts: [CoreEventContract] = [
	//@ts-ignore
	coreEventContractsSplit.reduce(
		(contract, current) => {
			Object.keys(current.eventSignatures).forEach((name) => {
				//@ts-ignore
				contract.eventSignatures[name] = current.eventSignatures[name]
			})
			return contract
		},
		{ eventSignatures: {} }
	),
]

export { SkillEventContract as CoreEventContract } from './types/mercury.types'
export * from '#spruce/events/events.contract'
