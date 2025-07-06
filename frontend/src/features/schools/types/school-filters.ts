import type {SchoolType} from "./school.ts";

export type SchoolFilters = Partial<{
    type: SchoolType;
    region: string;
    active: boolean;
}>;