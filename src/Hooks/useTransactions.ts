import { useContext } from "react"
import { createTransaction } from "../Services"
import { UserContext } from "../Context"
import { createTransactionProps, UserContextType, UserModel } from "../Interfaces"



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
    return{
        createTrans
    }
}
