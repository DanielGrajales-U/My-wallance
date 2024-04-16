
const historyService = async ( token: string | undefined, page: number = 1) => {
    
    try{
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/transaction/history?page=${page}`, {
            method: 'GET',
            mode: 'cors',
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

export default historyService