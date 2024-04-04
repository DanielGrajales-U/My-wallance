import { signupProps } from '../Interfaces';
import { userNameRegex, emailRegex  } from '../Regex';


const validateSignup = (formData: signupProps): boolean => {
    const { userName, email, password } = formData;

    if (!userNameRegex.test(userName)) {
        console.error('El nombre de usuario no es válido.');
        return false;
    }
    if (!emailRegex.test(email)) {
        console.error('El formato del email no es válido.');
        return false;
    }
    if (userName.length < 3 || userName.length > 15) {
        console.error('El nombre de usuario debe tener entre 3 y 15 caracteres.');
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

export default validateSignup;

