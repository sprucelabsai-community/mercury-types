import AbstractSpruceError from '@sprucelabs/error'
import { assert } from '@sprucelabs/test'
import { errorAssertUtil } from '@sprucelabs/test-utils'
import { MercuryAggregateResponse } from '../mercury.types'
import eventResponseUtil from './eventResponse.utility'

const mercuryErrorAssertUtil = {
	assertError(
		error: Error | AbstractSpruceError<any>,
		expectedCode: string,
		expectedPartialOptions?: Record<string, any> | undefined
	) {
		errorAssertUtil.assertError(error, 'MERCURY_RESPONSE_ERROR')
		if ((error as any)?.options?.responseErrors?.length > 1) {
			assert.fail(
				`Mercury response has more than 1 error and I was expecting only 1`
			)
		}

		errorAssertUtil.assertError(
			(error as any).options.responseErrors[0],
			expectedCode,
			expectedPartialOptions
		)
	},

	assertErrorFromResponse(
		response: MercuryAggregateResponse<any>,
		expectedCode: string,
		expectedPartialOptions?: Record<string, any> | undefined
	) {
		const err = assert.doesThrow(() =>
			eventResponseUtil.getFirstResponseOrThrow(response)
		)

		this.assertError(err, expectedCode, expectedPartialOptions)
	},
}

export default mercuryErrorAssertUtil
