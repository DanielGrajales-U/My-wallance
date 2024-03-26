
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes, UserContextType } from "../Interfaces";
import { useContext } from "react";
import { UserContext } from "../Context";

const outletValidation = <Outlet />
const publicValidation = <Navigate replace to={PublicRoutes.LOGIN} />

export default function AuthGuard() {
    const { user } = useContext(UserContext) as UserContextType
    return user ? outletValidation : publicValidation
}