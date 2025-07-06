export type ErrorResponse = {
    type?: string;
    title: string;
    detail?: string;
    status?: number;
    [key: string]: unknown;
}
