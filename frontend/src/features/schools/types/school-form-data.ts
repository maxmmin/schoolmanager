import type {School} from "./school.ts";

export type SchoolFormData = Partial<Omit<School, "id">>;
