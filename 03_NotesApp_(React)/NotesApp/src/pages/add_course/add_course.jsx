import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "/src/components/header/header.jsx";
import CourseOptions from "/src/features/course_options/course_options.jsx";
import "./add_course.css";

function AddCoursePage() {
    const navigate = useNavigate();
    const [Add, setAdd] = useState(true);
    const [Empty, setEmpty] = useState(false);
    const [Added, setAdded] = useState(false);
    const [newCourse, setNewCourse] = useState("");

    function AddCourse() {
        const textField = document.getElementById("input");
        setAdd(true);
        setEmpty(false);
        setAdded(false);
        if (textField.value.trim() == "") {
            textField.value = "";
            setAdd(false);
            setEmpty(true);
        } else {
            const newOption = { course: newCourse, notes: [] };
            setNewCourse("");
            CourseOptions.push(newOption);
            textField.value = "";
            setAdd(false);
            setAdded(true);
        }
    }

    function HandleKeyDown(event) {
        if (event.key == "Enter") {
          AddCourse();
        }
      }

    return(
        <div>
            <Header/>
            <div className = "AddCoursePageContainer">
                <div className = "AddCourseContent">
                    <div className = "AddCourse">
                        <h2>Add course</h2>
                    </div>
                    <div className = "CourseInput">
                        <h3 style = {{ display: Add ? "block" : "none" }}>Add course:</h3>
                        <h3 style = {{ display: Empty ? "block" : "none" }}>Text area cannot be empty! Add course:</h3>
                        <h3 style = {{ display: Added ? "block" : "none" }}>Course added! Add more courses:</h3>
                        <input
                            id = "input"
                            type = "text"
                            name = "Input"
                            value = {newCourse}
                            onChange = {(e) => setNewCourse(e.target.value)}
                            onKeyDown = {HandleKeyDown}
                        ></input>
                        <button onClick = {AddCourse}>Add course</button>
                    </div>
                    <div className = "BackButton">
                        <button onClick = {() => navigate("/")}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCoursePage;