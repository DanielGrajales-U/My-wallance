export interface ErrorContextType {
    errors: string[];
    setErrors: React.Dispatch<React.SetStateAction<string[]>>;
}