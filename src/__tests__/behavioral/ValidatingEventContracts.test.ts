import AbstractSpruceTest, { test, assert } from '@sprucelabs/test'
import { errorAssertUtil } from '@sprucelabs/test-utils'
import validateEventContract from '../../utilities/validateEventContract'

export default class ValidatingEventContractsTest extends AbstractSpruceTest {
	@test()
	protected static async throwsValidationError() {
		const err = assert.doesThrow(() =>
			validateEventContract({
				//@ts-ignore
				eventSignatures: { 'test-event': { waka: true } },
			})
		)

		errorAssertUtil.assertError(err, 'INVALID_EVENT_CONTRACT')
		//@ts-ignore
		assert.isTruthy(err.options.originalError)
	}
}
