import type {SchoolFilters} from "../../types/school-filters.ts";
import {type ChangeEvent, type FC, useEffect, useState} from "react";
import {schoolTypeLabels} from "../../services/school-type-util.ts";
import type {SchoolType} from "../../types/school.ts";
import {fetchRegions} from "../../services/regions-api.ts";
import {Loader} from "../../../../components/loader/Loader.tsx";

type SchoolTableFiltersRowProps = {
    filters: SchoolFilters;
    setFilters: (
        filters: SchoolFilters | ((prev: SchoolFilters) => SchoolFilters)
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

    function onTypeFilterChange(e: ChangeEvent<HTMLSelectElement>) {
        setFilter("type", e.currentTarget.value as SchoolType || undefined);
    }

    function onRegionFilterChange(e: ChangeEvent<HTMLSelectElement>) {
        setFilter("region", e.currentTarget.value || undefined);
    }

    function onActiveFilterChange(e: ChangeEvent<HTMLSelectElement>) {
        const val = e.target.value;
        let newFilter: boolean | undefined;
        switch (val) {
            case "1":
                newFilter = true;
                break;
            case "2":
                newFilter = false;
                break;
            case "":
                newFilter = undefined;
                break;
            default:
                throw new Error("Unexpected value: " + val);
        }
        setFilter("active", newFilter);
    }

    if (!regions) return <Loader/>

    return (
        <div className="school-table__filters school-table__row">
            <div className="school-table__cell"></div>
            <div className="school-table__cell"></div>

            <div className="school-table__cell">
                <select
                    value={filters.type}
                    onChange={onTypeFilterChange}
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
                <select value={filters.region}
                        onChange={onRegionFilterChange}>
                    <option value="">Усі регіони</option>
                    {regions.map((region) => (
                        <option key={region} value={region}>
                            {region}
                        </option>
                    ))}
                </select>
            </div>

            <div className={"school-table__cell"}>
                <select
                    value={filters.active + ""}
                    onChange={onActiveFilterChange}
                >
                    <option value="">Усі</option>
                    <option value="1">Активні</option>
                    <option value="0">Неактивні</option>
                </select>
            </div>
        </div>
    )
}