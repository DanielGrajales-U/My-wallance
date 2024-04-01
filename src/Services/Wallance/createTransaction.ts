import { createTransactionProps } from "../../Interfaces"

const amountService = async ( body: createTransactionProps, token: string | undefined) => {
    
    try{
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/transaction/create`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(body),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          })

        const resJson = await response.json()
        console.log(resJson)
        return resJson
    }   
    catch(error){
        console.log(error)
    }
}

export default amountService