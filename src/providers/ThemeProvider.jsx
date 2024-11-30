import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children })  {
    const [mode, setMode] = useState('light');

    return (
        <ThemeContext.Provider value={{mode, setMode}}>
            {children}
        </ThemeContext.Provider>
    );
}