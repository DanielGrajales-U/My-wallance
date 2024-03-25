import { useContext } from "react"
import { UserContext, UserContextType } from "../Context"

interface showDataProps{
    userName: string,
    email: string,
}

export default function useUser() {

    const {user, setUser} = useContext(UserContext) as UserContextType

    const showData = ({userName, email}: showDataProps) => {
        setUser({userName, email})
        console.log(user)
    }

    return {showData}
   
}
