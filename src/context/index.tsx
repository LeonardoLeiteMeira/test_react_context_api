import React from "react";
import { UserContextProvider } from "./user/user_context";

const GlobalContext = ({ children }) => {
    return <>
        <UserContextProvider> {children}</UserContextProvider>
    </>
}

export default GlobalContext