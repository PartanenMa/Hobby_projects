import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home.jsx"
import "./App.css";

function App() {
  return(
    <div className = "App">
      <Routes>
        <Route path = "/" element = {<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;