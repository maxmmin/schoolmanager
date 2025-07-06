import type {FC} from "react";
import {SchoolCreationForm} from "../../features/schools/components/school-creation-form/SchoolCreationForm.tsx";
import {useNavigate} from "react-router-dom";

export const SchoolCreationPage: FC = () => {
    const navigate = useNavigate();

    function onCreationSuccess() {
        navigate("../");
    }

    return (
        <div className="school-creation-page">
            <h4>Додати навчальний заклад</h4>
            <SchoolCreationForm onCreationSuccess={onCreationSuccess}/>
        </div>
    )
}
