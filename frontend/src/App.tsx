import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {SchoolsPage} from "./pages/schools/SchoolsPage.tsx";
import {SchoolCreationPage} from "./pages/school-creation/SchoolCreationPage.tsx";

function App() {
  return (
    <div className="wrapper">
        <Routes>
            <Route path={"/schools"} element={<SchoolsPage/>}/>
            <Route path={"/schools/create"} element={<SchoolCreationPage/>}/>
            <Route path={"/*"} element={<Navigate to={"/schools"} replace={true}/>}/>
        </Routes>
    </div>
  )
}

export default App
