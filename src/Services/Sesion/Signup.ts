import { error_codes } from '../../Errors/error_codes';
import { signupProps } from "../../Interfaces"

const signupService = async ( body: signupProps) => {

    // eslint-disable-next-line no-useless-catch
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

        if(resJson.error_code === import.meta.env.VITE_DATA_ALREADY_EXISTS){
          throw new Error(error_codes.DATA_ALREADY_EXISTS)
        }

        return resJson
    }   
    catch(error){
        throw error
    }
}

export default signupService