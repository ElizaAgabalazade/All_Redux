import React, { createContext, useState } from "react";

export const UsersContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState("Jale");

    return (
        <UsersContext.Provider value={{user, setUser}}>
            {children}   {/* App */}
        </UsersContext.Provider>
    )
}

export default UserProvider;
