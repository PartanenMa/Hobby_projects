import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "/src/components/header/header.jsx";
import Dropdown from "/src/components/dropdown/dropdown.jsx";
import CourseOptions from "/src/features/course_options/course_options.jsx";
import "./add_note.css";

function AddNotePage() {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [Add, setAdd] = useState(true);
  const [Empty, setEmpty] = useState(false);
  const [Added, setAdded] = useState(false);
  const [newNote, setNewNote] = useState("");

  function AddNote() {
    const textField = document.getElementById("ta1");
    setAdd(true);
    setEmpty(false);
    setAdded(false);
    if (textField.value.trim() == "") {
      textField.value = "";
      setAdd(false);
      setEmpty(true);
    } else {
      const newNote = textField.value;
      const courseIndex = CourseOptions.findIndex((course) => course.course == selectedCourse);
      CourseOptions[courseIndex].notes.push(newNote);
      textField.value = "";
      setAdd(false);
      setAdded(true);
    }
  }

  function HandleKeyDown(event) {
    if (event.key == "Enter") {
      AddNote();
    }
  }

  const HandleCourseSelect = (selectedOption) => {
    setSelectedCourse(selectedOption);
  };

  return (
    <div>
      <Header />
      <div className = "AddNotePageContainer">
        <div className = "AddNoteContent">
          <div className = "AddNote">
            <h2>Add note</h2>
          </div>
          <div className = "CourseSelector">
            <Dropdown
              options = {CourseOptions}
              defaultOption = {CourseOptions[0].course}
              onOptionSelect = {HandleCourseSelect}
            />
          </div>
          <div className = "TextField">
            <h3 style = {{ display: Add ? "block" : "none" }}>Write note:</h3>
            <h3 style = {{ display: Empty ? "block" : "none" }}>Text area cannot be empty! Add note:</h3>
            <h3 style = {{ display: Added ? "block" : "none" }}>Note added! Add more notes:</h3>
            <textarea
              id = "ta1"
              name = "Text1"
              cols = "40"
              rows = "5"
              onKeyDown = {HandleKeyDown}
            ></textarea>
            <button onClick = {AddNote}>Add note</button>
          </div>
          <div className = "BackButton">
            <button onClick = {() => navigate("/")}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNotePage;