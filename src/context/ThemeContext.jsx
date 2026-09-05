import { createContext, useContext, } from "react";

const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
    const value = {};

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