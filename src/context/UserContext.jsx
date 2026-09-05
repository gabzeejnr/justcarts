import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export default function UserProvider({ children }) {

    const [user, setUser] = useState(null)

    const value = {
        user, setUser
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const ctx = useContext(UserContext);
    if (!ctx) throw new Error("userContext must be used in UserProvider");
    return ctx;
}