import { createContext, useState} from "react";
import Heading from "../component/heading";

const Theme = createContext(null);

function ContextAPI() {
    const [state, setState] = useState({
        theme: "light",
        text: "Welcome to light"
    })

    function handleTheme(e) {
        e.target.id === "Light"
            ?
            setState({
                "theme": "light",
                "text": "Welcome to light"
            })
            :
            setState({
                "theme": "dark",
                "text": "Welcome to darkness"
            })
    
    }

    return (
        <Theme.Provider value={{
            theme: state.theme,
            text: state.text
        }} >
            <div className={state.theme === 'dark' ? "dark" : "light"}>
            <Heading />
            <button id="Light" onClick={handleTheme}>Light Mode</button>
            <button id="Dark" onClick={handleTheme}>Dark Mode</button>
            </div>
        </Theme.Provider>
    );
}

export {ContextAPI, Theme};