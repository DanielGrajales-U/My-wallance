import { UserModel } from "./user";

export interface ChildrenProps {
    children: React.ReactNode
}

export interface UserContextType{
    user: UserModel | null,
    setUser: React.Dispatch<React.SetStateAction<UserModel | null>>;
}