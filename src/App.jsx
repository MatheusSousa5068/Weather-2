import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Card from "./components/Card";

import citiesArray from "./utils/js/utils/cities";
import { useEffect, useState, createContext } from "react";

const MyContent = createContext();
export { MyContent };

function App() {
    const [cities, setCities] = useState(citiesArray);
    const [data, setData] = useState('');

    const childToParent = () => {
        setData(childdata)
    }

    useEffect(() => {
        console.log(data)
    }, [data])
    
    return (
        <div className="App">
            <Header />

            <Main childToParent={childToParent} />

            <div id="favcities-section">
                <div id="cities-container">
                    {cities.map((city) => {
                        return <Card nome={city} key={city}  />;
                    })}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default App;
