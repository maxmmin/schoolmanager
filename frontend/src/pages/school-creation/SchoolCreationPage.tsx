import type {FC} from "react";
import {SchoolCreationForm} from "../../features/schools/components/school-creation-form/SchoolCreationForm.tsx";
import {NavLink, useNavigate} from "react-router-dom";

export const SchoolCreationPage: FC = () => {
    const navigate = useNavigate();

    function onCreationSuccess() {
        navigate("../");
    }

    return (
        <div className="school-creation-page">
            <h4>Додати навчальний заклад</h4>
            <NavLink to={"../"} style={{"margin": "20px 0", "display": "block"}}>На головну</NavLink>
            <SchoolCreationForm onCreationSuccess={onCreationSuccess}/>
        </div>
    )
}
