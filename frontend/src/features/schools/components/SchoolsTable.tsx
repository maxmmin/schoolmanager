import {type FC, useState} from "react";
import {SchoolTableTitlesRow} from "./SchoolTableTitlesRow.tsx";
import type {SchoolFilters} from "../types/school-filters.ts";


export const SchoolsTable: FC = () => {
    const [filters, setFilters] = useState<SchoolFilters>({});

    return (
        <div className="school-table">
            <div className={"school-table__header school-table__row"}>


                <SchoolTableTitlesRow/>
            </div>

            <div className="school-table__body">

            </div>
        </div>
    )
}