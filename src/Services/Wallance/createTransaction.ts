import { createTransactionProps } from "../../Interfaces"
const baseUrl = import.meta.env.VITE_BACKEND_URL
const amountService = async ( body: createTransactionProps, token: string | undefined) => {
    
    try{
        const response = await fetch(`${baseUrl}/transaction/create`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(body),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          })

        const resJson = await response.json()
        return resJson
    }   
    catch(error){
        console.log(error)
    }
}

export default amountService