import { loginProps } from "../Interfaces";

const validateLogin = (formData: loginProps): string[] => {
  const { email, password } = formData;
  const errors: string[] = [];

  if (email.length === 0) {
    errors.push('Por favor ingrese un email.');
  }
  if (password.length === 0) {
    errors.push('Por favor ingrese una contraseña.');
  }

  return errors;
};

export default validateLogin;