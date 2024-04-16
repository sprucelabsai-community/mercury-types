import {
    PermissionContractId,
    PermissionId,
    PermissionReference,
} from '../types/mercury.types'

export default function buildPermissionReference<
    ContractId extends PermissionContractId,
>(
    contractId: ContractId,
    permissionIdsAny: PermissionId<ContractId>[]
): PermissionReference<ContractId> {
    return {
        contractId,
        permissionIdsAny,
    }
}
