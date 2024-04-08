import { useContext, useEffect, useState } from 'react';
import useUser from '../../../Hooks/useUser';
import { PublicRoutes } from '../../../Interfaces';
import { validateLogin } from '../../../Validators';
import ErrorContext from '../../../Context/error.context';
import { ErrorContextType } from '../../../Interfaces/error';
import { ShowError } from '../../../Components';
import { CardForm, DontAccount, Input, InputGroup, LabelForm, Link, SesionDiv, SubmitButton, TitleSesion } from '../../../Styles/UI-Components';

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
    <SesionDiv>
      <CardForm onSubmit={handleSubmit}>
      <TitleSesion>Bienvenido</TitleSesion>
        <InputGroup>
        <LabelForm htmlFor='email'>Email</LabelForm>
        <Input name='email' onChange={handleChange} type='text' placeholder='Ingresa tu email' id='email'/>
        <LabelForm htmlFor='password'>Password</LabelForm>
        <Input name='password' onChange={handleChange} type='password' placeholder='Ingresa tu contraseña' id='password'/>
        <SubmitButton type='submit'>Send</SubmitButton>
        </InputGroup>
      <ShowError errors={errors} />
      <DontAccount>¿No tienes una cuenta? <Link to={PublicRoutes.SIGNUP}>Crear cuenta</Link></DontAccount>
      </CardForm>
    </SesionDiv>
  );
}
