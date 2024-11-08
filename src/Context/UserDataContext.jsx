import { createContext, useState, useEffect } from "react";
const UserDataContext = createContext({});


export const DataProvider = ({children})=>{

    const baseUrl = "https://tabsquareinfotech.com/TSIT_Clients/vprami"

    return(
        <UserDataContext.Provider
        value={{baseUrl}}
        >
            {children}
        </UserDataContext.Provider>
    )
}

export default UserDataContext;