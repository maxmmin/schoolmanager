import type {SchoolFilters} from "../types/school-filters.ts";
import type {FC} from "react";

type SchoolTableFiltersRowProps = {
    filters: Partial<SchoolFilters>;
    setFilters: (
        filters: Partial<SchoolFilters> | ((prev: Partial<SchoolFilters>) => Partial<SchoolFilters>)
    ) => void
}

export const SchoolTableFiltersRow: FC<SchoolTableFiltersRowProps> = ({filters, setFilters}) => {
    function setFilter<K extends keyof SchoolFilters>(key: K, value: SchoolFilters[K]) {
        setFilters(prev => ({...prev, [key]: value}))
    }

    return (
        <div className="school-table__filters school-table__row">
            <div className="school-table__cell">
                <input type="text" value={filters.name} onChange={setFilters("")}/>
            </div>
            <div className="school-table__cell">
                <input type="text"/>
            </div>
            <div className="school-table__cell">
                <input type="text"/>
            </div>
        </div>
    )
}