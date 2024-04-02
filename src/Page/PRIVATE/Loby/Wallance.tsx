import { useContext, useState } from "react"
import { UserContext } from "../../../Context"
import { UserContextType } from "../../../Interfaces"
import { useTransaction } from "../../../Hooks"
import { convertAmountToNumber } from "../../../Utils"
import { Link } from "react-router-dom"

export default function Wallance() {
  const {user} = useContext(UserContext) as UserContextType
  const { createTrans } = useTransaction()
  const [formData, setFormData] = useState({
    amount: '',
    description: ''
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = convertAmountToNumber(formData)
    createTrans(data);
  };

  return (
    <section>
      <button>⬅</button>
      <Link to={'/private/history'}>History</Link>
      <h3>{user?.userName}</h3>
      <p>{user?.amount},00</p>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="amount" type="text" placeholder="0.00" />
        <input onChange={handleChange} name="description" type="text" placeholder="Description"/>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}
