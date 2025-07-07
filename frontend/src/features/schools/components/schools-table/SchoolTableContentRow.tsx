import type {FC} from "react";
import type {School} from "../../types/school.ts";
import {getTypeLabel} from "../../services/school-type-util.ts";

export const SchoolTableContentRow: FC<{school: School, onSchoolDeactivationCall: (school: School) => unknown}> = ({school, onSchoolDeactivationCall}) => {
    return (
        <div className="school-table__row school-table__row_content">
            <div className="school-table__cell">{school.name}</div>
            <div className="school-table__cell">{school.edrpou}</div>
            <div className="school-table__cell">{getTypeLabel(school.type)}</div>
            <div className="school-table__cell">{school.region}</div>
            <div className="school-table__cell">{school.active ? "Активна" : "Деактивована"} {school.active && <button onClick={() => onSchoolDeactivationCall(school)}>Деактивація</button>}</div>
        </div>
    )
}