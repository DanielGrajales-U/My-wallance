import { useContext, useEffect, useState } from 'react';
import useUser from '../../../Hooks/useUser';
import { PublicRoutes } from '../../../Interfaces';
import ErrorContext from '../../../Context/error.context';
import { ErrorContextType } from '../../../Interfaces/error';
import { validateSignup } from '../../../Validators';
import { ShowError } from '../../../Components';
import {
  CardForm,
  DontAccount,
  Input,
  InputGroup,
  LabelForm,
  Link,
  SesionDiv,
  SubmitButton,
  TitleSesion,
} from '../../../Styles/UI-Components';

export default function Signup() {
  const { handleSignup } = useUser();
  const { errors, setErrors } = useContext(ErrorContext) as ErrorContextType;
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    setErrors([]);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = validateSignup(formData);
    if (valid.length > 0) {
      setErrors(valid);
      return;
    }
    handleSignup(formData);
  };
  return (
    <SesionDiv>
      <CardForm onSubmit={handleSubmit}>
        <TitleSesion>Registro</TitleSesion>
        <InputGroup>
          <LabelForm htmlFor='userName'>Nombre de usuario</LabelForm>
          <Input
            name='userName'
            onChange={handleChange}
            type='text'
            placeholder='Ingresa tu nombre de usuario'
            id='userName'
          />
          <LabelForm htmlFor='email'>Email</LabelForm>
          <Input
            name='email'
            onChange={handleChange}
            type='email'
            placeholder='Ingresa tu email'
            id='email'
          />
          <LabelForm htmlFor='password'>Contraseña</LabelForm>
          <Input
            name='password'
            onChange={handleChange}
            type='password'
            placeholder='Crea tu contraseña'
            id='password'
          />
          <SubmitButton type='submit'>Registrate</SubmitButton>
        </InputGroup>
      <ShowError errors={errors} />
      <DontAccount>
        ¿Ya tienes una cuenta? <Link to={PublicRoutes.LOGIN}>Iniciar sesion</Link>
      </DontAccount>
      </CardForm>
    </SesionDiv>
  );
}
