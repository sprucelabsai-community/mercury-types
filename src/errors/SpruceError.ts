import BaseSpruceError from '@sprucelabs/error'
import AbstractSpruceError from '@sprucelabs/error'
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
					originalError instanceof AbstractSpruceError &&
					originalError.options.code === 'VALIDATION_FAILED'
				) {
					const { errors } = originalError.options
					message += '\n\n'
					let count = 1
					for (const error of errors) {
						message += `${count}. ${this.prepareErrorMessage(error.message)}`
					}
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
	private prepareErrorMessage(message: string) {
		return message.replace(/\.dynamicField/gis, '[eventName]')
	}
}
