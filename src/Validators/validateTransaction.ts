import { createTransactionProps } from "../Interfaces";
import { amountRegex } from "../Regex";

const validateTransaction = (formData: createTransactionProps): boolean => {
    const { amount, description } = formData;
    if (!amountRegex.test(String(amount))) {
        console.error('El monto debe ser un número entero positivo.');
        return false;
    }
    if (description.length < 3 || description.length > 50) {
        console.error('La descripción debe tener entre 3 y 50 caracteres.');
        return false;
    }
    return true;
};

export default validateTransaction;