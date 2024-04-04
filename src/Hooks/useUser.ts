import { useContext } from "react"
import { UserContext } from "../Context"
import { UserContextType } from "../Interfaces"
import { loginService, signupService } from "../Services"
import { loginProps, signupProps } from "../Interfaces"
import { useNavigate } from "react-router-dom"

export default function useUser() {

    const {setUser} = useContext(UserContext) as UserContextType
    const navigate = useNavigate()

    const handleLogin = async (body: loginProps) => {
        try{
            const response = await loginService(body)
            if(response.success){
                const {token} = response
                const {userName, email, amount} = response.data
                
                const userLoged = {userName, email, token, amount}
                
                setUser(userLoged)
                sessionStorage.setItem('user', JSON.stringify(userLoged))

                navigate('/private')

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

    const handleLogout = () => {
        sessionStorage.removeItem('user')
        setUser(null)
        navigate('/')
    }

    return {
        handleSignup,
        handleLogin,
        handleLogout
    }
   
}
