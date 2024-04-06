import { createContext, useState } from "react";
import { ChildrenProps } from "../Interfaces";
import { ErrorContextType } from "../Interfaces/error";

const ErrorContext = createContext<ErrorContextType | undefined >(undefined);

export function ErrorProvider({children}: ChildrenProps){
    const [errors, setErrors] = useState<string[]>([]);

    return (
        <ErrorContext.Provider value={{errors, setErrors}}>
            {children}
        </ErrorContext.Provider>
    )
}

export default ErrorContext;