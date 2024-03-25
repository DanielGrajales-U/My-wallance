import { useState } from 'react';
import useUser from '../../../Hooks/useUser';

export default function Login() {
  const { showData } = useUser();
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
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
    showData(formData);
  };
  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        <input name='userName' onChange={handleChange} type='text' placeholder='userName' />
        <input name='email' onChange={handleChange} type='email' placeholder='email' />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}
