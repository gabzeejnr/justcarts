import { createContext, useContext, useEffect, useState, } from "react";

const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {

    const [theme, setTheme] = useState(() => {
        const prefersDark =window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDark ? "dark" : "light"
    });

    useEffect(() => {
        document.body.classList.toggle("dark", theme === "dark")
    }, [theme])

    const value = { setTheme };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used in a ThemeProvider");
    return ctx;
}