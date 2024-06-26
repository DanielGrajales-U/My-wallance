import { createContext, useState } from "react";
import { UserModel } from "../Interfaces";
import { ChildrenProps, UserContextType } from "../Interfaces";

const UserContext = createContext<UserContextType | undefined >(undefined);

export function UserProvider({children}: ChildrenProps){
    const storedUser = window.sessionStorage.getItem("user");
    const initialUser = storedUser ? JSON.parse(storedUser) : null;

    const [user, setUser] = useState<UserModel | null>(initialUser);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;