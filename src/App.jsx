import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
    return (
        <div className="App">
            <Header />

            <Main />

            <div id="favcities-section">
                <div id="cities-container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default App;
