import { useContext, useEffect, useState } from 'react';
import useUser from '../../../Hooks/useUser';
import { Link } from 'react-router-dom';
import { PublicRoutes } from '../../../Interfaces';
import { validateLogin } from '../../../Validators';
import ErrorContext from '../../../Context/error.context';
import { ErrorContextType } from '../../../Interfaces/error';
import { ShowError } from '../../../Components';

export default function Login() {
  const { handleLogin } = useUser();
  const {errors, setErrors} = useContext(ErrorContext) as ErrorContextType
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valid = validateLogin(formData)
    if (valid.length > 0){
      setErrors(valid)
      return
    }
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
      <ShowError errors={errors} />
      <p>¿No tienes una cuenta? <Link to={PublicRoutes.SIGNUP}>Crear cuenta</Link></p>
    </div>
  );
}
