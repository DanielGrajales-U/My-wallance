import { loginProps } from "../../Interfaces"

const loginService = async ( body: loginProps) => {
    console.log(import.meta.env.VITE_BACKEND_URL)
    try{
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
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

export default loginService