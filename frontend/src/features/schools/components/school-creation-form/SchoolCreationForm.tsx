import React, { useEffect, useState } from "react";
import {fetchRegions} from "../../services/regions-api.ts";
import type {SchoolFormData} from "../../types/school-form-data.ts";
import {createSchool} from "../../services/schools-api.ts";
import {Loader} from "../../../../components/loader/Loader.tsx";
import type {School, SchoolType} from "../../types/school.ts";

type SchoolFormErrors = Partial<Record<keyof SchoolFormData, string>>;

function validateForm(schoolData: SchoolFormData): SchoolFormErrors {
    const newErrors: SchoolFormErrors = {};

    if (!schoolData.name || schoolData.name.trim() === "") newErrors.name = "Назва обов'язкова";

    if (!schoolData.edrpou || schoolData.edrpou.trim() === "") newErrors.edrpou = "ЄДРПОУ обов'язковий";
    else if (schoolData.edrpou.length !== 8) newErrors.edrpou = "ЄДРПОУ повинен складатись з 8 символів";

    if (!schoolData.type) newErrors.type = "Тип школи обов'язковий";
    if (!schoolData.region) newErrors.region = "Регіон обов'язковий";

    return newErrors;
}

export type SchoolCreationFormProps = {
    onCreationSuccess: (school: School) => unknown;
}

export const SchoolCreationForm: React.FC<SchoolCreationFormProps> = ({onCreationSuccess}) => {
    const [pending, setPending] = useState<boolean>(false);
    const [schoolData, setSchoolData] = useState<SchoolFormData>({});
    const [regions, setRegions] = useState<string[]>([]);
    const [errors, setErrors] = useState<Partial<Record<keyof SchoolFormData, string>>>({});
    const [requestError, setRequestError] = useState<string>("");

    useEffect(() => {
        fetchRegions().then(setRegions);
        setPending(false);
    }, []);

    const getFormValue = <K extends keyof SchoolFormData>(key: K): string => {
        const val = schoolData[key];
        return val === undefined || val === null ? "" : String(val);
    };

    const onFormChange = (key: keyof SchoolFormData, value: string | boolean) => {
        setSchoolData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errors = validateForm(schoolData);
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            setPending(true)
            try {
                const school = await createSchool(schoolData);
                onCreationSuccess(school);
            } catch (error) {
                console.error("An error occurred during school creation", e);
                setRequestError((error as Error).message);
            } finally {
                setPending(false);
            }
        } else setRequestError("Знайдені помилки валідації");
    };

    if (pending) return <Loader/>

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Назва школи:</label>
                <input
                    type="text"
                    value={getFormValue("name")}
                    onChange={(e) => onFormChange("name", e.target.value)}
                />
                {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
            </div>

            <div>
                <label>ЄДРПОУ:</label>
                <input
                    type="text"
                    value={getFormValue("edrpou")}
                    onChange={(e) => onFormChange("edrpou", e.target.value)}
                />
                {errors.edrpou && <div style={{ color: "red" }}>{errors.edrpou}</div>}
            </div>

            <div>
                <label>Тип:</label>
                <select
                    value={getFormValue("type")}
                    onChange={(e) => onFormChange("type", e.target.value as SchoolType)}
                >
                    <option value="">Оберіть тип</option>
                    <option value="GYMNASIUM">Гімназія</option>
                    <option value="LYCEUM">Ліцей</option>
                    <option value="SECONDARY_SCHOOL">Загальноосвітня школа</option>
                </select>
                {errors.type && <div style={{ color: "red" }}>{errors.type}</div>}
            </div>

            <div>
                <label>Регіон:</label>
                <select
                    value={getFormValue("region")}
                    onChange={(e) => onFormChange("region", e.target.value)}
                >
                    <option value="">Оберіть регіон</option>
                    {regions.map((r) => (
                        <option key={r} value={r}>
                            {r}
                        </option>
                    ))}
                </select>
                {errors.region && <div style={{ color: "red" }}>{errors.region}</div>}
            </div>

            <button type="submit">Створити</button>

            {requestError && <p style={{color: "red"}}>{requestError}</p>}
        </form>
    );
};
