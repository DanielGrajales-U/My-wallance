import { useState } from 'react';
import useUser from '../../../Hooks/useUser';

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
    </div>
  );
}
