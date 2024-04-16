import AbstractSpruceTest from '@sprucelabs/test'
import { assert, errorAssert, test } from '@sprucelabs/test-utils'
import SpruceError from '../../errors/SpruceError'
import validateEventContract from '../../utilities/validateEventContract'

export default class ValidatingEventContractsTest extends AbstractSpruceTest {
    @test()
    protected static async throwsValidationError() {
        const err = assert.doesThrow(() =>
            validateEventContract({
                //@ts-ignore
                eventSignatures: { 'test-event': { waka: true } },
            })
        ) as SpruceError

        errorAssert.assertError(err, 'INVALID_EVENT_CONTRACT')
        assert.isTruthy(err.options.originalError)
    }
}
