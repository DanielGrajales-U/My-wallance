import { signupProps } from "../../Interfaces"

const signupService = async ( body: signupProps) => {

    try{
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(body),
            headers: {
              'Content-Type': 'application/json'
            }
          })

        const resJson = await response.json()
        return resJson
    }   
    catch(error){
        console.log(error)
    }
}

export default signupService