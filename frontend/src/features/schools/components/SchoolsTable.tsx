import {type FC, useState} from "react";
import type {School} from "../types/school.ts";
import {SchoolTableTitlesRow} from "./SchoolTableTitlesRow.tsx";



export const SchoolsTable: FC = () => {
    const [filters, setFilters] = useState<Partial<School>>({});

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