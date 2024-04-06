import { signupProps } from '../Interfaces';
import { userNameRegex, emailRegex  } from '../Regex';


const validateSignup = (formData: signupProps) => {
    const { userName, email, password } = formData;
    const errors: string[] = [];

    if (!userNameRegex.test(userName)) {
        errors.push('El nombre de usuario no es válido.');
    }
    if (!emailRegex.test(email)) {
        errors.push('El formato del email no es válido.');
    }
    if (userName.length < 3 || userName.length > 15) {
        errors.push('El nombre de usuario debe tener entre 3 y 15 caracteres.');
    }
    if (email.length < 5 || email.length > 50) {
        errors.push('El email debe tener entre 5 y 50 caracteres.');
    }
    if (password.length < 8 || password.length > 20) {
        errors.push('La contraseña debe tener entre 8 y 20 caracteres.');
    }
    return errors;
};

export default validateSignup;

