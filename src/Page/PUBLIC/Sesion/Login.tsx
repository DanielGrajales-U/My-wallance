import { useState } from 'react';
import useUser from '../../../Hooks/useUser';
import { Link } from 'react-router-dom';
import { PublicRoutes } from '../../../Interfaces';
import { validateLogin } from '../../../Validators';

export default function Login() {
  const { handleLogin } = useUser();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valid = validateLogin(formData)
    if (!valid) return;
    handleLogin(formData);
  };

  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        <input name='email' onChange={handleChange} type='text' placeholder='Email' />
        <input name='password' onChange={handleChange} type='password' placeholder='Password' />
        <button type='submit'>Send</button>
      </form>
      <p>¿No tienes una cuenta? <Link to={PublicRoutes.SIGNUP}>Crear cuenta</Link></p>
    </div>
  );
}
