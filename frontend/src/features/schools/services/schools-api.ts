import type {SchoolFilters} from "../types/school-filters.ts";
import type {ResponsePage} from "../../../types/response-page.ts";
import type {School} from "../types/school.ts";
import type {PaginationOptions} from "../../../types/pagination-options.ts";

export async function fetchSchools(paginationOpts: PaginationOptions, filters: SchoolFilters): Promise<ResponsePage<School>> {
    return null as unknown as Promise<ResponsePage<School>>;
}