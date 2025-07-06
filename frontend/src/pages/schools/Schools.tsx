import type {FC} from "react";
import {SchoolsTable} from "../../features/schools/components/schools-table/SchoolsTable.tsx";

export const Schools: FC = () => {
    return (
        <div className="shools-page">
            <SchoolsTable/>
        </div>
    )
}