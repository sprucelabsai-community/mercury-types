import { SpruceErrors } from "#spruce/errors/errors.types"
import { ErrorOptions as ISpruceErrorOptions} from "@sprucelabs/error"

export interface InvalidEventContractErrorOptions extends SpruceErrors.Mercury.InvalidEventContract, ISpruceErrorOptions {
	code: 'INVALID_EVENT_CONTRACT'
}

type ErrorOptions =  | InvalidEventContractErrorOptions 

export default ErrorOptions
