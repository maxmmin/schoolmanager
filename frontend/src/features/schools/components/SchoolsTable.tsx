import type {FC} from "react";
import type {School} from "../types/school.ts";

const SchoolTableRow: FC<School> = (school) => {
    return (
        <div className="school-table__row">
            <div className="school-table__cell">{school.name}</div>
            <div className="school-table__cell">{school.type}</div>
            <div className="school-table__cell">{school.region}</div>
            <div className={"school-table__cell"}>{school.active}</div>
        </div>
    )
}

export const SchoolsTable: FC = () => {
    return (
        <div className="school-table">
            <div className={"school-table__header school-table__row"}>
                <div className="school-table__filters">

                </div>
                <div className="school-table__columns-titles school-table__row">

                </div>
            </div>

            <div className="school-table__body">

            </div>
        </div>
    )
}