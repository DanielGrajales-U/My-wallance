import { loginProps } from "../Interfaces";
import { emailRegex } from "../Regex";

const validateLogin = (formData: loginProps): string[] => {
  const { email, password } = formData;
  const errors: string[] = [];

  if (!emailRegex.test(email)) {
    errors.push('El formato del email no es válido.');
  }
  if (email.length < 5 || email.length > 50) {
    errors.push('El email debe tener entre 5 y 50 caracteres.');
  }
  if (password.length < 8 || password.length > 20) {
    errors.push('La contraseña debe tener entre 8 y 20 caracteres.');
  }

  return errors;
};

export default validateLogin;