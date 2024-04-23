/// <reference types="vite/client" />
interface ImportMetaEnv{
    readonly VITE_BACKEND_URL: string;
    readonly VITE_VALIDATION_ERROR: string
    readonly VITE_INVALID_DATA: string
    readonly VITE_DATA_ALREADY_EXISTS: string
}