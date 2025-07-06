import type {ErrorResponse} from "../types/error-response.ts";

export const getErrorMessage = (error: ErrorResponse) => {
    let base = error.title;
    if (error.detail) base += ` ${error.detail}`;
    return base;
}