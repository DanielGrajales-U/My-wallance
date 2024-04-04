import { useState } from "react";
import useUser from "../../../Hooks/useUser";
import { PublicRoutes } from "../../../Interfaces";
import { Link } from "react-router-dom";

export default function Signup() {
  const { handleSignup } = useUser();
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      <p>¿Ya tienes una cuenta? <Link to={PublicRoutes.LOGIN}>Iniciar sesion</Link></p>
    </div>
  );
}
