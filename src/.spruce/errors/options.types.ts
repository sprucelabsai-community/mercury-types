import { SpruceErrors } from "#spruce/errors/errors.types"
import { SpruceErrorOptions, ISpruceErrorOptions} from "@sprucelabs/error"
import { SchemaErrorOptions } from '@sprucelabs/schema'

export interface InvalidEventNameErrorOptions extends SpruceErrors.MercuryTypes.InvalidEventName, ISpruceErrorOptions {
	code: 'INVALID_EVENT_NAME'
}

type ErrorOptions = SchemaErrorOptions | SpruceErrorOptions | InvalidEventNameErrorOptions 

export default ErrorOptions
