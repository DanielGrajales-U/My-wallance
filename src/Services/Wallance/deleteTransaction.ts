const baseUrl = import.meta.env.VITE_BACKEND_URL
const deleteTransactionService = async ( id: string, token: string | undefined ) => {
    try{
        const response = await fetch(`${baseUrl}/transaction/delete/${id}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          })

        const resJson = await response.json()
        console.log(id)
        return resJson
    }   
    catch(error){
        console.log(error)
    }
}

export default deleteTransactionService
