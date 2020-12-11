import { SpruceErrors } from "#spruce/errors/errors.types"
import { SpruceErrorOptions, ErrorOptions as ISpruceErrorOptions} from "@sprucelabs/error"
import { SchemaErrorOptions } from '@sprucelabs/schema'

export interface MercuryResponseErrorErrorOptions extends SpruceErrors.MercuryTypes.MercuryResponseError, ISpruceErrorOptions {
	code: 'MERCURY_RESPONSE_ERROR'
}
export interface InvalidEventNameErrorOptions extends SpruceErrors.MercuryTypes.InvalidEventName, ISpruceErrorOptions {
	code: 'INVALID_EVENT_NAME'
}

type ErrorOptions = SchemaErrorOptions | SpruceErrorOptions | MercuryResponseErrorErrorOptions  | InvalidEventNameErrorOptions 

export default ErrorOptions
