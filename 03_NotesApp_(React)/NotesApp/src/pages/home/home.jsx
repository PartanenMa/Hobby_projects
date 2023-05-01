import { useNavigate } from "react-router-dom";
import Header from "/src/components/header/header.jsx"
import "./home.css";

function HomePage() {
    const navigate = useNavigate();
    return(
        <div>
            <Header/>
            <div className = "HomePageContainer">
                <div className = "ButtonContainer">
                    <div className = "Buttons">
                        <div className = "Actions">
                            <h2>Actions:</h2>
                        </div>
                        <button onClick = {() => navigate("/add_note")}>Add note</button>
                        <button onClick = {() => navigate("/add_course")}>Add course</button>
                        <button onClick = {() => navigate("/display_notes")}>Display notes</button>
                    </div>
                </div>
                <div className = "Image"></div>
            </div>
        </div>
    );
}

export default HomePage;