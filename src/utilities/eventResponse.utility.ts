import AbstractSpruceError from '@sprucelabs/error'
import SpruceError from '../errors/SpruceError'
import {
	MercuryAggregateResponse,
	MercurySingleResponse,
} from '../mercury.types'

type MercuryAggregateResponseWithoutErrorInstances = Omit<
	MercuryAggregateResponse<any>,
	'responses'
> & {
	responses: MercurySingleResponseWithoutErrorInstances[]
}

type MercurySingleResponseWithoutErrorInstances = Omit<
	MercurySingleResponse<any>,
	'errors'
> & {
	errors?: any[]
}

const eventResponseUtil = {
	mutatingMapAggregateResultsErrorsToSpruceErrors<
		R extends
			| MercuryAggregateResponse<any>
			| MercuryAggregateResponseWithoutErrorInstances,
		T extends {
			prototype: any
		}
	>(results: R, ClassRef: T): MercuryAggregateResponse<any> {
		results.responses = (results as MercuryAggregateResponseWithoutErrorInstances).responses.map(
			(response) => {
				return this.mutatingMapSingleResonseErrorsToSpruceErrors(
					response,
					ClassRef
				)
			}
		)
		return results
	},

	mutatingMapSingleResonseErrorsToSpruceErrors<
		R extends MercurySingleResponse<any>,
		T extends {
			prototype: any
		}
	>(response: R, ClassRef: T): R {
		if (response.errors) {
			response.errors = response.errors.map((err) =>
				AbstractSpruceError.parse(err, ClassRef)
			)
		}
		return response
	},

	getFirstResponseOrThrow<R extends MercuryAggregateResponse<any>>(
		emitResponse: R
	) {
		const payload = emitResponse.responses[0].payload
		const errors = emitResponse.responses[0].errors

		if (errors) {
			throw new SpruceError({
				code: 'MERCURY_RESPONSE_ERROR',
				responseErrors: errors,
			})
		}

		return payload as NonNullable<R['responses'][number]['payload']>
	},
}

export default eventResponseUtil
