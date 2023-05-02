import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "/src/components/header/header.jsx";
import Dropdown from "/src/components/dropdown/dropdown.jsx";
import "./add_note.css";

function AddNotePage() {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState("");

  function AddNote() {
    const textField = document.getElementById("ta1");

    if (textField.value = "Text area cannot be empty!") {
        textField.value = "";
    } else if (textField.value == "Note added to course!") {
      textField.value = "";
    } else if (textField.value == "") {
        textField.value = "Text area cannot be empty!";
    } else {
        textField.value = "Note added to course!";
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

  const courseOptions = [
    { value: "Math", label: "Math" },
    { value: "Science", label: "Science" },
    { value: "History", label: "History" },
    { value: "English", label: "English" },
  ];

  return(
    <div>
      <Header/>
      <div className = "AddNotePageContainer">
        <div className = "AddNoteContent">
          <div className = "AddNote">
            <h2>Add note</h2>
          </div>
          <div className = "CourseSelector">
            <Dropdown
              options = {courseOptions}
              defaultOption = {courseOptions[0].value}
              onOptionSelect = {HandleCourseSelect}
            />
          </div>
          <div className = "TextField">
            <h3>Write note:</h3>
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