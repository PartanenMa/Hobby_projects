import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "/src/components/header/header.jsx";
import Dropdown from "/src/components/dropdown/dropdown.jsx";
import CourseOptions from "/src/features/course_options/course_options.jsx";
import "./display_notes.css";

function DisplayNotesPage() {
    const navigate = useNavigate();
    const [selectedCourse, setSelectedCourse] = useState("");

    function DisplayNotes() {

    }

    const HandleCourseSelect = (selectedOption) => {
        setSelectedCourse(selectedOption);
    };

    return(
        <div>
            <Header/>
            <div className = "DisplayNotesPageContainer">
                <div className = "DisplayNotesContent">
                    <div className = "DisplayNotes">
                        <h2>Display notes</h2>
                    </div>
                    <div className = "CourseSelector">
                        <Dropdown
                            options = {CourseOptions}
                            defaultOption = {CourseOptions[0].course}
                            onOptionSelect = {HandleCourseSelect}
                        />
                        <button onClick = {DisplayNotes}>Display notes</button>
                    </div>
                    <div className = "NotesDisplayCase">
                        <h3>{selectedCourse.course} notes:</h3>
                        <ul>
                            {selectedCourse.notes.map((note, index) => (
                                <li key = {index}>{note}</li>
                            ))}
                        </ul>
                    </div>
                    <div className = "BackButton">
                        <button onClick={() => navigate("/")}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisplayNotesPage;