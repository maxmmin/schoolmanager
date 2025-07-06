import type {SchoolType} from "../types/school.ts";

export const schoolTypeLabels: Record<SchoolType, string> = {
    GYMNASIUM: "Гімназия",
    LYCEUM: "Ліцей",
    SECONDARY_SCHOOL: "Середня школа",
};

export function getTypeLabel(type: SchoolType) {
    const label = schoolTypeLabels[type];
    if (!label) throw new Error("Unsupported school type: " + type);
    return label;
}