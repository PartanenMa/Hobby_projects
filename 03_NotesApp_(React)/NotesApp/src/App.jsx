import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home.jsx";
import AddNotePage from "./pages/add_note/add_note.jsx";
import AddCoursePage from "./pages/add_course/add_course.jsx";
import DisplayNotesPage from "./pages/display_notes/display_notes.jsx";
import "./App.css";

function App() {
  return(
    <div className = "App">
      <Routes>
        <Route path = "/" element = {<HomePage/>}/>
        <Route path = "/add_note" element = {<AddNotePage/>}/>
        <Route path = "/add_course" element = {<AddCoursePage/>}/>
        <Route path = "/display_notes" element = {<DisplayNotesPage/>}/>
      </Routes>
    </div>
  );
}

export default App;