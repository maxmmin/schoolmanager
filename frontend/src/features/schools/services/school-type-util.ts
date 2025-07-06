import type {SchoolType} from "../types/school.ts";

export const schoolTypeLabels: Record<SchoolType, string> = {
    GYMNASIUM: "Гимназия",
    LYCEUM: "Лицей",
    SECONDARY_SCHOOL: "Средняя школа",
};

export function getTypeLabel(type: SchoolType) {
    const label = schoolTypeLabels[type];
    if (!label) throw new Error("Unsupported school type: " + type);
    return label;
}