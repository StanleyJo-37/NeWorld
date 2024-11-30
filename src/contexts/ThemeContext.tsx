import { createContext } from "react";

export interface ThemeContextProps {
    mode: "dark" | "light",
    setMode: (newMode: ThemeContextProps["mode"]) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    mode: "light",
    setMode: (newMode: ThemeContextProps["mode"]) => { console.log(newMode); }
});