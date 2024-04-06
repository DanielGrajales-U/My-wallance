import { useContext, useEffect, useState } from "react";
import useUser from "../../../Hooks/useUser";
import { PublicRoutes } from "../../../Interfaces";
import { Link } from "react-router-dom";
import ErrorContext from "../../../Context/error.context";
import { ErrorContextType } from "../../../Interfaces/error";
import { validateSignup } from "../../../Validators";
import { ShowError } from "../../../Components";

export default function Signup() {
  const { handleSignup } = useUser();
  const { errors, setErrors } = useContext(ErrorContext) as ErrorContextType 
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    setErrors([])
  }, [])
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = validateSignup(formData)
    if(valid.length > 0) {
      setErrors(valid)
      return
    }
    handleSignup(formData);
  };
  return (
    <div>
      Signup
      <form onSubmit={handleSubmit}>
        <input name='userName' onChange={handleChange} type='text' placeholder='userName' />
        <input name='email' onChange={handleChange} type='email' placeholder='email' />
        <input name='password' onChange={handleChange} type='password' placeholder='password' />
        <button type='submit'>Send</button>
      </form>
      <ShowError errors={errors} />
      <p>¿Ya tienes una cuenta? <Link to={PublicRoutes.LOGIN}>Iniciar sesion</Link></p>
    </div>
  );
}
