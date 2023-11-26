import './App.css';
import Main from "./components/main";
import {createContext, useState} from "react";


export const locationHistoryContext = createContext([]);
export const selectedLocationContext = createContext(null);

function App() {
    const [locationHistory, setLocationHistory] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);
    return (
        <div className="App">
            <locationHistoryContext.Provider value={{locationHistory, setLocationHistory}}>
                <selectedLocationContext.Provider value={{selectedLocation, setSelectedLocation}}>
                    <Main/>
                </selectedLocationContext.Provider>
            </locationHistoryContext.Provider>
        </div>
    );
}

export default App;
