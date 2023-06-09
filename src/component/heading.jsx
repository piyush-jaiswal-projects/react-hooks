import { useContext } from "react";
import { Theme } from "../hooks/ContextAPI";

function Heading() {
    const contentTheme = useContext(Theme);
    return <h1 className={contentTheme.theme === "dark" ? "dark" : "light"}>{contentTheme.text}</h1>
}

export default Heading;