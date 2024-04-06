import { createTransactionProps } from "../Interfaces";
import { amountRegex } from "../Regex";

const validateTransaction = (formData: createTransactionProps) => {
    const { amount, description } = formData;
    const errors: string[] = [];
    
    if (!amountRegex.test(String(amount))) {
        errors.push('El monto debe ser un número entero positivo.');
    }
    if (description.length < 3 || description.length > 50) {
        errors.push('La descripción debe tener entre 3 y 50 caracteres.');
    }
    return errors;
};

export default validateTransaction;