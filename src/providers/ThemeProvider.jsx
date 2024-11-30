import { useState } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";
import { DarkTheme, LightTheme } from "../constants/themes";

export default function ThemeProvider({ children })  {
    const [theme, setTheme] = useState(LightTheme);

    const toggleTheme = () => {
        if (theme === LightTheme) setTheme(DarkTheme);
        else setTheme(LightTheme);
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}