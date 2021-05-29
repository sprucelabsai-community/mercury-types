import AbstractSpruceTest, { test, assert } from '@sprucelabs/test'
import coreEventContracts from '#spruce/events/events.contract'
import { coreEventContracts as contracts } from '../../index'

export default class ImportingCoreContractTest extends AbstractSpruceTest {
	@test()
	protected static async importsCoreContract() {
		assert.isTruthy(coreEventContracts)
	}

	@test()
	protected static async mainImportCamesBackAsArrayOf1() {
		assert.isLength(contracts, 1)
	}
}
