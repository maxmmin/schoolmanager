import type {SchoolType} from "./school.ts";

export type SchoolFilters = {
    name: string;
    type: SchoolType;
    region: string;
}