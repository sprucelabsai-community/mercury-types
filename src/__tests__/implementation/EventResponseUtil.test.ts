import AbstractSpruceTest, { assert, test } from '@sprucelabs/test'
import { errorAssertUtil } from '@sprucelabs/test-utils'
import SpruceError from '../../errors/SpruceError'
import eventResponseUtil from '../../utilities/eventResponse.utility'

export default class EventResponseUtilTest extends AbstractSpruceTest {
	private static readonly errorWithoutErrorInstance = {
		totalContracts: 0,
		totalErrors: 0,
		totalResponses: 0,
		responses: [
			{
				errors: [
					{
						options: { code: 'COOL_ERROR', foo: 'bar' },
					},
				],
			},
		],
	}

	@test()
	protected static canMapResponseErrorsToSpruceErrors() {
		let response = this.errorWithoutErrorInstance

		eventResponseUtil.mutatingMapAggregateResultsErrorsToSpruceErrors(
			response,
			SpruceError
		)

		errorAssertUtil.assertError(
			//@ts-ignore
			response.responses[0].errors[0],
			'COOL_ERROR'
		)
	}

	@test()
	protected static throwsIfFirstResponseIsAnError() {
		const err = assert.doesThrow(() =>
			eventResponseUtil.getFirstResponseOrThrow(
				eventResponseUtil.mutatingMapAggregateResultsErrorsToSpruceErrors(
					this.errorWithoutErrorInstance,
					SpruceError
				)
			)
		)

		errorAssertUtil.assertError(err, 'MERCURY_RESPONSE_ERROR', {
			'responseErrors[0].options.code': 'COOL_ERROR',
		})
	}
}
