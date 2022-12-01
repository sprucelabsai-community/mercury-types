export { default as permissionDefaultsSchema } from './.spruce/schemas/mercury/v2020_12_25/permissionDefaults.schema'
export { default as eventContractSchema } from './.spruce/schemas/mercury/v2020_12_25/eventContract.schema'
export { default as eventSignatureSchema } from './.spruce/schemas/mercury/v2020_12_25/eventSignature.schema'
export { default as eventSignaturesByNameSchema } from './.spruce/schemas/mercury/v2020_12_25/eventSignaturesByName.schema'
export { default as permissionSchema } from './.spruce/schemas/mercury/v2020_12_25/permission.schema'
export { default as permissionContractSchema } from './.spruce/schemas/mercury/v2020_12_25/permissionContract.schema'
export { default as statusFlagsSchema } from './.spruce/schemas/mercury/v2020_12_25/statusFlags.schema'
export { default as permissionReferenceSchema } from './.spruce/schemas/mercury/v2020_12_25/permissionReference.schema'
export { default as feedOptionsSchema } from './.spruce/schemas/mercury/v2020_12_25/feedOptions.schema'

export * from './types/mercury.types'
export * from './.spruce/schemas/schemas.types'
export { default as MercuryEventEmitter } from './types/mercury.types'
export * from './constants'
export { default as buildEventContract } from './utilities/buildEventContract'
export { default as buildPermissionContract } from './utilities/buildPermissionContract'
/**
 * @depracted buildPermissionReferenc -> buildPermissionReference
 */
export { default as buildPermissionReferenc } from './utilities/buildPermissionReference'
export { default as buildPermissionReference } from './utilities/buildPermissionReference'
export { default as validateEventContract } from './utilities/validateEventContract'
