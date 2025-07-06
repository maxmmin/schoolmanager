export type ErrorResponse = {
    error: string;
    type?: string;
    title?: string;
    detail?: string;
    status?: number;
    [key: string]: unknown;
}
