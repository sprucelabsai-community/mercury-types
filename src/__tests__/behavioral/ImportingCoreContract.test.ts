import AbstractSpruceTest, { test, assert } from '@sprucelabs/test'
import coreEventContracts from '../../events.contract'

export default class ImportingCoreContractTest extends AbstractSpruceTest {
	@test()
	protected static async importsCoreContract() {
		assert.isTruthy(coreEventContracts)
	}
}
