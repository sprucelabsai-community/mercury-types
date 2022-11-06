import AbstractSpruceTest from '@sprucelabs/test'
import { assert, errorAssert, test } from '@sprucelabs/test-utils'
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

		errorAssert.assertError(err, 'INVALID_EVENT_CONTRACT')
		//@ts-ignore
		assert.isTruthy(err.options.originalError)
	}
}
