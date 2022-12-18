import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Card from "./components/Card";

import citiesArray from "./utils/js/utils/cities";
import { useEffect, useState, createContext, useContext } from "react";

import UnitContext from "./utils/useContext";

function App() {
    const [cities, setCities] = useState(citiesArray);
    const [data, setData] = useState("");

    const [unitCont, setUnitCont] = useState("C")

    return (
        <UnitContext.Provider value={{unitCont, setUnitCont}}>
            <div className="App">
                <Header />

                <Main />

                <div id="favcities-section">
                    <div id="cities-container">
                        {cities.map((city) => {
                            return (
                                <Card nome={city} key={city} un={unitCont} />
                            );
                        })}
                    </div>
                </div>

                <Footer />
            </div>
        </UnitContext.Provider>
    );
}

export default App;
