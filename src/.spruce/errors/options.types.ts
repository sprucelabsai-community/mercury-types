import { SpruceErrors } from "#spruce/errors/errors.types"
import { SpruceErrorOptions, ErrorOptions as ISpruceErrorOptions} from "@sprucelabs/error"
import { SchemaErrorOptions } from '@sprucelabs/schema'

export interface InvalidEventContractErrorOptions extends SpruceErrors.Mercury.InvalidEventContract, ISpruceErrorOptions {
	code: 'INVALID_EVENT_CONTRACT'
}

type ErrorOptions = SchemaErrorOptions | SpruceErrorOptions | InvalidEventContractErrorOptions 

export default ErrorOptions
