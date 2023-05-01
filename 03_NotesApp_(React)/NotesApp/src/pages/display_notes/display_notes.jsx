import { useNavigate } from "react-router-dom";
import Header from "/src/components/header/header.jsx";
import "./display_notes.css";

function DisplayNotesPage() {
    const navigate = useNavigate();
    return(
        <div>
            <Header/>
            <div className = "DisplayNotesPageContainer">
                <div className = "DisplayNotesContent">
                    <button onClick = {() => navigate("/")}>Back</button>
                </div>
            </div>
        </div>
    );
}

export default DisplayNotesPage;