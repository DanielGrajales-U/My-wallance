
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../Models";

const outletValidation = <Outlet />
const publicValidation = <Navigate replace to={PublicRoutes.LOGIN} />

export default function AuthGuard() {
    const userState = useSelector((store: AppStore) => store.user)
    return userState.name ? outletValidation : publicValidation
}