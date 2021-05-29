import setRoleEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/setRoleEmitTargetAndPayload.schema'
import setRoleResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/setRoleResponsePayload.schema'
import { buildEventContract } from '../../../utilities'
import { buildPermissionContract } from '../../../utilities'

const setRoleEventContract = buildEventContract({
	eventSignatures: {
		'set-role::v2020_12_25': {
			emitPayloadSchema: setRoleEmitTargetAndPayloadSchema,
			responsePayloadSchema: setRoleResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'hiring-and-promoting',
				name: 'Hiring and promoting contract',
				description:
					'Various permissions related to emitting hiring and promoting people at organizations and locations.',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'hiring-and-promoting',
						name: 'Hire a person',
						defaults: {
							owner: {
								default: true,
							},
							groupManager: {
								clockedIn: true,
							},
							manager: {
								clockedIn: true,
							},
						},
					},
				],
			}),
		},
	},
})
export default setRoleEventContract

export type SetRoleEventContract = typeof setRoleEventContract
