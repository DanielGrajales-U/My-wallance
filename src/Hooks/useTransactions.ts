import { useContext } from "react"
import { createTransaction } from "../Services"
import { UserContext } from "../Context"
import { createTransactionProps, UserContextType, UserModel } from "../Interfaces"
import deleteTransactionService from "../Services/Wallance/deleteTransaction"



export default function useTransaction() {
    const {user, setUser} = useContext(UserContext) as UserContextType

    const createTrans = async (body: createTransactionProps) => {
        try {
            const response = await createTransaction(body, user?.token);
            if (response.success) {
                setUser((prevUser) => ({
                    ...prevUser as UserModel,
                    amount: prevUser ? prevUser.amount + body.amount : body.amount,
                }));
            }
        } catch (error) {
            console.error("Error creating transaction:", error);
        }
    };

    const deleteTransaction = async (id: string) => {
        try{
            const response = await deleteTransactionService(id, user?.token)
            return response
        }
        catch(error){
            console.log(error)
        }
    }

    return{
        createTrans,
        deleteTransaction
    }
}
