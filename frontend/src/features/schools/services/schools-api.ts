import type {SchoolFilters} from "../types/school-filters.ts";
import type {ResponsePage} from "../../../types/response-page.ts";
import type {School} from "../types/school.ts";
import type {PaginationOptions} from "../../../types/pagination-options.ts";
import type {SchoolFormData} from "../types/school-form-data.ts";
import {getErrorMessage} from "../../../utils/get-error-message.ts";
import type {ErrorResponse} from "../../../types/error-response.ts";
import {env} from "../../../env.ts";

const SCHOOLS_API_ROOT = `${env.API_ROOT}/api/v1/schools`;

export async function fetchSchools(paginationOpts: PaginationOptions, filters: SchoolFilters): Promise<ResponsePage<School>> {
    const queryParams = new URLSearchParams();
    queryParams.set("page", paginationOpts.page.toString());
    queryParams.set("size", paginationOpts.size.toString());
    if (filters.type !== undefined) queryParams.set("type", filters.type);
    if (filters.region !== undefined) queryParams.set("region", filters.region);
    if (filters.active !== undefined) queryParams.set("active", filters.active + "");
    const response = await fetch(`${SCHOOLS_API_ROOT}?${queryParams.toString()}`);
    return await response.json();
}

export async function createSchool(schoolData: SchoolFormData): Promise<School> {
    const response = await fetch(SCHOOLS_API_ROOT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(schoolData),
    });
    if (!response.ok) {
        const error = await response.json() as ErrorResponse;
        const msg = getErrorMessage(error);
        throw new Error(msg);
    }

    return await response.json();
}

export async function deactivateSchool(id: number): Promise<void> {
    const response = await fetch(`${SCHOOLS_API_ROOT}/${id}`, {method: "PATCH"});
    if (!response.ok) {
        const error = await response.json() as ErrorResponse;
        const msg = getErrorMessage(error);
        throw new Error(msg);
    }
}