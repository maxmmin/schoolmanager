export interface ResponsePage<E> {
    number: number;
    size: number;
    elements: number;
    content: E[];
    totalElements: number;
    totalPages: number;
}