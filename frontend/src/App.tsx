import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {Schools} from "./pages/schools/Schools.tsx";

function App() {
  return (
    <div className="wrapper">
        <Routes>
            <Route path={"/schools"} element={<Schools/>}/>
            <Route path={"/*"} element={<Navigate to={"/schools"} replace={true}/>}/>
        </Routes>
    </div>
  )
}

export default App
