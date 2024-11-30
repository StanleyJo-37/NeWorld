import { ReactNode, useState } from "react";
import { ThemeContext, ThemeContextProps } from "./ThemeContext";

export default function ThemeProvider({
    children
}: {
    children: ReactNode;
}) {
    const [mode, setMode] = useState<ThemeContextProps["mode"]>('light');

    return (
        <ThemeContext.Provider value={{mode, setMode}}>
            {children}
        </ThemeContext.Provider>
    );
}