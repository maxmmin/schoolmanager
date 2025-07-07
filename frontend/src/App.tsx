import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {SchoolsPage} from "./pages/schools/SchoolsPage.tsx";
import {SchoolCreationPage} from "./pages/school-creation/SchoolCreationPage.tsx";
import {ErrorBoundary} from "./ErrorBoundary.tsx";

function App() {
  return (
    <div className="wrapper">
        <ErrorBoundary fallback={<h2>An error occurred...</h2>}>
            <Routes>
                <Route path={"/schools"} element={<SchoolsPage/>}/>
                <Route path={"/schools/create"} element={<SchoolCreationPage/>}/>
                <Route path={"/*"} element={<Navigate to={"/schools"} replace={true}/>}/>
            </Routes>
        </ErrorBoundary>
    </div>
  )
}

export default App
