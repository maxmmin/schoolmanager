import type {FC} from "react";

export const SchoolTableTitlesRow: FC = () => {
    return (
        <div className="school-table__row school-table__row_titles">
            <div className="school-table__cell">Назва</div>
            <div className="school-table__cell">ЄДРПОУ</div>
            <div className="school-table__cell">Тип</div>
            <div className="school-table__cell">Регіон</div>
            <div className={"school-table__cell"}>Статус</div>
        </div>
    )
}