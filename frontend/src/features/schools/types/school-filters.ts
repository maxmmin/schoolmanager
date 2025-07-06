import type {SchoolType} from "./school.ts";

export type SchoolFilters = {
    type: SchoolType;
    region: string;
    active: boolean;
}