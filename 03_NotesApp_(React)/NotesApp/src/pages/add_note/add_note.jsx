import { useNavigate } from "react-router-dom";
import Header from "/src/components/header/header.jsx";
import "./add_note.css";

function AddNotePage() {
    const navigate = useNavigate();

    function AddNote() {
        if (document.getElementById("ta1").value == "Note added!" || document.getElementById("ta1").value == "Write something first!") {
            document.getElementById("ta1").value = "";
        }else if (document.getElementById("ta1").value = "") {
            document.getElementById("ta1").value = "Write something first!";
        }else{
            document.getElementById("ta1").value = "Note added!";
        }
    }

    return(
        <div>
            <Header/>
            <div className = "AddNotePageContainer">
                <div className = "AddNoteContent">
                    <div className = "AddNote">
                        <h2>Add note</h2>
                    </div>
                    <div className = "CourseSelector">
                        
                    </div>
                    <div className = "TextField">
                        <h3>Write note:</h3>
                        <textarea id = "ta1" name = "Text1" cols = "40" rows = "5"></textarea>
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