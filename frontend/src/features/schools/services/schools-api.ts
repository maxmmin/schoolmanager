import type {SchoolFilters} from "../types/school-filters.ts";
import type {ResponsePage} from "../../../types/response-page.ts";
import type {School} from "../types/school.ts";
import type {PaginationOptions} from "../../../types/pagination-options.ts";

const SCHOOLS_API_ROOT = `${import.meta.env.VITE_API_ROOT}/schools`;

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