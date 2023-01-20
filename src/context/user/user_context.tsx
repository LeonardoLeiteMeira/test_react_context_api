import React, { createContext,useState } from "react";

type UserType = {
    name:string;
    lastName:string
    email:string
}

type PropsUserContext = {
    user:UserType;
    setUser:React.Dispatch<React.SetStateAction<UserType>>
}

const DEFAULT_VALUE = {
    user:{
        name:"",
        lastName:"",
        email:""
    },
    setUser: ()=>{}
}

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE)

const UserContextProvider = ({children} )=>{
    const [user, setUser] = useState<UserType>(DEFAULT_VALUE.user);
    return (
        <UserContext.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export {UserContextProvider};
export default UserContext;

