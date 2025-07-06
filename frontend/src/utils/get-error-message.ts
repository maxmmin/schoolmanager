import type {ErrorResponse} from "../types/error-response.ts";

export const getErrorMessage = (error: ErrorResponse) => {
    let msg = error.error;
    if (error.title) msg += ` ${error.title}`
    if (error.detail) msg += ` ${error.detail}`;
    return msg;
}