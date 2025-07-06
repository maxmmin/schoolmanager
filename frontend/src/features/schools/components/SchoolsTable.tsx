import {type FC, useEffect, useState} from "react";
import {SchoolTableTitlesRow} from "./SchoolTableTitlesRow.tsx";
import type {SchoolFilters} from "../types/school-filters.ts";
import {SchoolTableFiltersRow} from "./SchoolTableFiltersRow.tsx";
import type {PaginationOptions} from "../../../types/pagination-options.ts";
import {Pagination} from "../../../components/pagination/Pagination.tsx";
import type {ResponsePage} from "../../../types/response-page.ts";
import type {School} from "../types/school.ts";
import {Loader} from "../../../components/loader/Loader.tsx";
import {fetchSchools} from "../services/schools-api.ts";
import {SchoolTableContentRow} from "./SchoolTableContentRow.tsx";


export const SchoolsTable: FC = () => {
    const [filters, setFilters] = useState<SchoolFilters>({});
    const [schools, setSchools] = useState<ResponsePage<School> | null>(null);
    const [paginationOpts, setPaginationOpts] = useState<PaginationOptions>({page: 0, size: 5});

    useEffect(() => {
        fetchSchools(paginationOpts, filters).then(setSchools);
    }, [paginationOpts, filters])

    if (!schools) return <Loader/>

    return (
        <div className="school-table">
            <div className="school-table__header">
                <SchoolTableTitlesRow/>
                <SchoolTableFiltersRow filters={filters} setFilters={setFilters}/>
            </div>
            <div className="school-table__body">
                {schools.content.map(school => (
                    <SchoolTableContentRow school={school}/>
                ))}
            </div>
            <div className="school-table_footer">
                <Pagination page={paginationOpts.page}
                            size={paginationOpts.size}
                            totalElements={schools.totalElements}
                            totalPages={schools.totalPages}
                            setPage={val => setPaginationOpts(prev => ({...prev, page: val}))}
                            setSize={val => setPaginationOpts(prev => ({...prev, size: val}))}
                />
            </div>
        </div>
    )
}