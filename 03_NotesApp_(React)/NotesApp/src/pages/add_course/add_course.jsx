import { useNavigate } from "react-router-dom";
import Header from "/src/components/header/header.jsx";
import "./add_course.css";

function AddCoursePage() {
    const navigate = useNavigate();
    return(
        <div>
            <Header/>
            <div className = "AddCoursePageContainer">
                <div className = "AddCourseContent">
                    <button onClick = {() => navigate("/")}>Back</button>
                </div>
            </div>
        </div>
    );
}

export default AddCoursePage;