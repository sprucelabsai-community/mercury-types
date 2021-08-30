import BaseSpruceError from '@sprucelabs/error'
import { SchemaError } from '@sprucelabs/schema'
import ErrorOptions from '#spruce/errors/options.types'

export default class SpruceError extends BaseSpruceError<ErrorOptions> {
	/** An easy to understand version of the errors */
	public friendlyMessage(): string {
		const { options } = this
		let message
		switch (options?.code) {
			case 'INVALID_EVENT_CONTRACT': {
				message = `Yikes! This event contract is not valid!`

				const { originalError } = options ?? {}

				if (
					originalError instanceof SchemaError &&
					originalError.options.code === 'VALIDATION_FAILED'
				) {
					message = '\n\n' + originalError.message
				} else {
					message += ` I'm not sure exactly why, though.`
				}
				break
			}
			default:
				message = super.friendlyMessage()
		}

		const fullMessage = options.friendlyMessage
			? options.friendlyMessage
			: message

		return fullMessage
	}
}
