import { error_codes } from "../../Errors/error_codes"
import { loginProps } from "../../Interfaces"


const baseUrl = import.meta.env.VITE_BACKEND_URL
const Validation_Error = import.meta.env.VITE_VALIDATION_ERROR
const Invalid_Data = import.meta.env.VITE_INVALID_DATA
const loginService = async ( body: loginProps) => {

    // eslint-disable-next-line no-useless-catch
    try{
        const response = await fetch(`${baseUrl}/auth/login`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(body),
            headers: {
              'Content-Type': 'application/json'
            }
          })
        
        const resJson = await response.json()
        if(resJson.error_code === Validation_Error){
          throw new Error(error_codes.VALIDATION_ERROR)
        }
        
        if(resJson.error_code === Invalid_Data){
          throw new Error(error_codes.INVALID_DATA)
        }

        return resJson
    }   
    catch(error){
      throw error
    }
}

export default loginService