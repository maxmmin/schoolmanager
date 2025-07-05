export type SchoolType = 'GYMNASIUM' | 'LYCEUM' | 'SECONDARY_SCHOOL'

export type School = {
    name: string;
    type: SchoolType;
    region: string;
    active: boolean;
}