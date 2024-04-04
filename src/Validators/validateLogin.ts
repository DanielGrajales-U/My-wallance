import { loginProps } from "../Interfaces";
import { emailRegex } from "../Regex";

const validateLogin = (formData: loginProps): boolean => {
    const { email, password } = formData;

    if (!emailRegex.test(email)) {
        console.error('El formato del email no es válido.');
        return false;
    }
    if (email.length < 5 || email.length > 50) {
        console.error('El email debe tener entre 5 y 50 caracteres.');
        return false;
    }
    if (password.length < 8 || password.length > 20) {
        console.error('La contraseña debe tener entre 8 y 20 caracteres.');
        return false;
    }
    return true;
};

export default validateLogin;