export type SchoolType = 'GYMNASIUM' | 'LYCEUM' | 'SECONDARY_SCHOOL'

export type School = {
    id: number;
    name: string;
    edrpou: string;
    type: SchoolType;
    region: string;
    active: boolean;
}