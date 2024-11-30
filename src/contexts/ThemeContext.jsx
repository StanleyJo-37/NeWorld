import { createContext } from "react";

export const ThemeContext = createContext({
    mode: "light",
    setMode: (newMode) => { console.log(newMode); }
});