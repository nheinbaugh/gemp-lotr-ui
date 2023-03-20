import { AxiosError } from "axios";

export interface LoginProps {
    onSelectRegister: () => void;
    onLogin: (login: string, password: string) => void;
    isLoading: boolean;
    error?: AxiosError;
}