import type {FC} from "react";
import {SchoolsTable} from "../../features/schools/components/schools-table/SchoolsTable.tsx";
import {NavLink} from "react-router-dom";
import "./Schools.scss";

export const Schools: FC = () => {
    return (
        <div className="schools-page">
            <h3>Список шкільних закладів</h3>
            <NavLink to={"/create"}>Додати заклад</NavLink>
            <SchoolsTable/>
        </div>
    )
}