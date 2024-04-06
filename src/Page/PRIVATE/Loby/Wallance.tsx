import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../Context"
import { PrivateRoutes, UserContextType } from "../../../Interfaces"
import { useTransaction, useUser } from "../../../Hooks"
import { convertAmountToNumber } from "../../../Utils"
import { Link } from "react-router-dom"
import { validateTransaction } from "../../../Validators"
import ErrorContext from "../../../Context/error.context"
import { ErrorContextType } from "../../../Interfaces/error"
import { ShowError } from "../../../Components"

export default function Wallance() {
  const {user} = useContext(UserContext) as UserContextType
  const { errors, setErrors } = useContext(ErrorContext) as ErrorContextType
  const {handleLogout} = useUser()
  const { createTrans } = useTransaction()
  
  useEffect(() => {
    setErrors([])
  }, [])

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
    const valid = validateTransaction(data)
    if(valid.length > 0) {
      setErrors(valid)
      return
    }
    createTrans(data);
  };

  return (
    <section>
      <button onClick={handleLogout}>⬅</button>
      <Link to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HISTORY}`} replace>History</Link>
      <h3>{user?.userName}</h3>
      <p>{user?.amount},00</p>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="amount" type="text" placeholder="0.00" />
        <input onChange={handleChange} name="description" type="text" placeholder="Description"/>
        <ShowError errors={errors}/>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}
