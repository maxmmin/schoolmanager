import "./SchoolsTable.scss";
import {type FC, useEffect, useState} from "react";
import {SchoolTableTitlesRow} from "./SchoolTableTitlesRow.tsx";
import type {SchoolFilters} from "../../types/school-filters.ts";
import {SchoolTableFiltersRow} from "./SchoolTableFiltersRow.tsx";
import type {PaginationOptions} from "../../../../types/pagination-options.ts";
import {Pagination} from "../../../../components/pagination/Pagination.tsx";
import type {ResponsePage} from "../../../../types/response-page.ts";
import type {School} from "../../types/school.ts";
import {Loader} from "../../../../components/loader/Loader.tsx";
import {deactivateSchool, fetchSchools} from "../../services/schools-api.ts";
import {SchoolTableContentRow} from "./SchoolTableContentRow.tsx";
import {Modal} from "../../../../components/modal/Modal.tsx";

type SchoolDeactivationModalProps = {
    visible: boolean;
    school: School | null;
}

export const SchoolsTable: FC = () => {
    const [pending, setPending] = useState<boolean>(true);
    const [filters, setFilters] = useState<SchoolFilters>({});
    const [schools, setSchools] = useState<ResponsePage<School> | null>(null);
    const [paginationOpts, setPaginationOpts] = useState<PaginationOptions>({page: 0, size: 5});

    const [schoolDeactivationModalProps, setSchoolDeactivationModalProps] = useState<SchoolDeactivationModalProps>({
        visible: false,
        school: null
    });

    useEffect(() => {
        setPending(true);
        fetchSchools(paginationOpts, filters)
            .then(setSchools)
            .finally(() => setPending(false));
    }, [paginationOpts, filters])

    if (pending) return <Loader/>;

    if (!schools) throw new Error("Schools must not be null");

    return (
        <div className="school-table">
            <SchoolTableTitlesRow/>
            <SchoolTableFiltersRow filters={filters} setFilters={setFilters}/>
            {schools.content.map(school => (
                <SchoolTableContentRow key={school.id} school={school} onSchoolDeactivationCall={s => setSchoolDeactivationModalProps({school: s, visible: true})}/>
            ))}
            {   schools.totalPages > 1 &&
                <Pagination page={paginationOpts.page}
                            size={paginationOpts.size}
                            totalElements={schools.totalElements}
                            totalPages={schools.totalPages}
                            setPage={val => setPaginationOpts(prev => ({...prev, page: val}))}
                            setSize={val => setPaginationOpts(prev => ({...prev, size: val}))}
                />
            }

            {
                schools.elements == 0 && <p style={{"padding": "0 1rem"}}>За вашим запитом не знайдено жодної школи</p>
            }

            <Modal visible={schoolDeactivationModalProps.visible}
                   text={`Ви впевнені, що хочете деактивувати школу ${schoolDeactivationModalProps.school?.name}?`}
                   onConfirm={async () => {
                       setPending(true);
                       try {
                           const school = schoolDeactivationModalProps.school!;
                           await deactivateSchool(school.id);
                           await fetchSchools(paginationOpts, filters).then(setSchools);
                           setSchoolDeactivationModalProps(prev => ({...prev, visible: false}));
                       } finally {
                           setPending(false);
                       }
                   }}
                   onCancel={() => setSchoolDeactivationModalProps(prev => ({...prev, visible: false}))}
            />
        </div>
    )
}