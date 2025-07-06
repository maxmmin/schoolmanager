import type {SchoolFilters} from "../types/school-filters.ts";
import {type FC, useEffect, useMemo, useState} from "react";
import {schoolTypeLabels} from "../services/school-type-util.ts";
import type {SchoolType} from "../types/school.ts";
import {fetchRegions} from "../services/schools-api.ts";
import {Loader} from "../../../components/loader/Loader.tsx";

type SchoolTableFiltersRowProps = {
    filters: Partial<SchoolFilters>;
    setFilters: (
        filters: Partial<SchoolFilters> | ((prev: Partial<SchoolFilters>) => Partial<SchoolFilters>)
    ) => void
}

export const SchoolTableFiltersRow: FC<SchoolTableFiltersRowProps> = ({filters, setFilters}) => {
    const [regions, setRegions] = useState<string[] | null>(null);

    useEffect(() => {
        fetchRegions().then(setRegions)
    }, []);

    function setFilter<K extends keyof SchoolFilters>(key: K, value: SchoolFilters[K]) {
        setFilters(prev => ({...prev, [key]: value}))
    }

    if (!regions) return <Loader/>

    return (
        <div className="school-table__filters school-table__row">
            <div className="school-table__cell"></div>

            <div className="school-table__cell">
                <select
                    value={filters.type}
                    onChange={(e) => setFilter("type", e.currentTarget.value as SchoolType)}
                >
                    <option value="">Усі типи</option>
                    {Object.entries(schoolTypeLabels).map(([key, label]) => (
                        <option key={key} value={key}>
                            {label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="school-table__cell">
                <input type="text"/>
            </div>
        </div>
    )
}