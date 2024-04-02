import { useContext, useEffect, useState } from "react"
import historyService from "../../../Services/Wallance/history";
import { UserContext } from "../../../Context";
import { objectHistory, UserContextType } from "../../../Interfaces";
import formatDate from "../../../Utils/formatDate";
import { Link } from "react-router-dom";


export default function History() {
  const {user} = useContext(UserContext) as UserContextType
  const [history, setHistory] = useState<objectHistory[]>([]);
  useEffect(() => {
    const getHistory = async () => {
      const response = await historyService(user?.token)
      setHistory(response.data.docs)
    }
    getHistory()
  },[user?.token])
  return (
    <div>
      <Link to={'/private'}>⬅</Link>
      {
        history.map(item => {
          const formatedDate = formatDate(item.date)
          return (
            <div key={item.id}>
              <p>{formatedDate}</p>
              <p>{item.description}</p>
              <p>{item.amount},00</p>
            </div>
          )
        })
      }
    </div>
  )
}
