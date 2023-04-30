import Header from "/src/components/header/header.jsx"
import "./home.css";

function HomePage() {
    return(
        <div>
            <Header/>
            <div className = "HomePageContainer">
            <div className = "ButtonContainer">
                <div className = "Buttons">
                    <div className = "Actions">
                        <h2>Actions:</h2>
                    </div>
                    <button>Add note</button>
                    <button>Add course</button>
                    <button>Display notes</button>
                </div>
            </div>
            <div className = "Image"></div>
            </div>
        </div>
    );
}

export default HomePage;