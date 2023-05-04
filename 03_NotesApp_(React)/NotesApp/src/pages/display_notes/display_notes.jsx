import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "/src/components/header/header.jsx";
import Dropdown from "/src/components/dropdown/dropdown.jsx";
import CourseOptions from "/src/features/course_options/course_options.jsx";
import "./display_notes.css";

function DisplayNotesPage() {
    const navigate = useNavigate();
    const [selectedCourse, setSelectedCourse] = useState("");
    const [ShowNotes, setShowNotes] = useState(false);

    function DisplayNotes() {
        setShowNotes(true);
        const courseName = selectedCourse;
        const course = CourseOptions.find((c) => c.course == courseName);
        if (!course) {
          return <div className = "Please">Please select a course to show it's notes. {courseName}</div>;
        }
        return(
            <div className = "Note">
                <h2>Notes for course {courseName}:</h2>
                <ul>
                    {course.notes.map((note, index) => (
                        <li key = {index}>{note}</li>
                    ))}
                </ul>
            </div>
        );
      }

    return(
        <div>
            <Header />
            <div className = "DisplayNotesPageContainer">
                <div className = "DisplayNotesContent">
                    <div className = "DisplayNotes">
                        <h2>Display notes</h2>
                    </div>
                    <div className = "CourseSelector">
                        <Dropdown
                            options = {CourseOptions}
                            defaultOption = {CourseOptions[0].course}
                            onOptionSelect = {setSelectedCourse}
                        />
                    </div>
                    <div className = "NotesDisplayCase" style = {{ display: ShowNotes ? "block" : "none" }}>
                        <DisplayNotes/>
                    </div>
                    <div className="BackButton">
                        <button onClick = {() => navigate("/")}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisplayNotesPage;