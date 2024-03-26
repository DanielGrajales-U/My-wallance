import { useContext } from "react"
import { UserContext } from "../Context"
import { UserContextType } from "../Interfaces"
import { loginService, signupService } from "../Services"
import { loginProps, signupProps } from "../Interfaces"

export default function useUser() {

    const {setUser} = useContext(UserContext) as UserContextType

    const handleLogin = async (body: loginProps) => {
        try{
            const response = await loginService(body)

            if(response.success){
                const {token} = response
                const {userName, email} = response.data
                
                const userLoged = {userName, email, token}
                
                setUser(userLoged)
                sessionStorage.setItem('user', JSON.stringify(userLoged))

                return response
            }else{
                throw new Error(response.errorCode)
            }
        }
        catch(error){
            console.log(error)
        }
    }

    const handleSignup = async ({userName, email, password}: signupProps) => {
        try{
            const response = await signupService({userName, email, password})
            return response
        }catch(error){
            console.log(error)
        }
    }

    return {
        handleSignup,
        handleLogin
    }
   
}
