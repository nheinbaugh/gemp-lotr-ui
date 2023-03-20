import { Button, FormControl, FormLabel, Input } from "@mui/joy";
import { useState } from 'react';
import { isValidAccount } from "./types/create-account-validation.functions";

interface RegistrationProps {
    onRegister: (login: string, password: string) => void;
    isLoading: boolean;
    error?: Error;
}

const Registration = (props: RegistrationProps) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const onLoginUpdate = (e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)
    const onPasswordUpdate = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
    const onPasswordConfirmationUpdate = (e: React.ChangeEvent<HTMLInputElement>) => setPasswordConfirmation(e.target.value)

    const validAccountCheck = isValidAccount(login, password, passwordConfirmation);
    const disableCreateButton = !validAccountCheck.success;

    return (
        <>
            <FormControl>
                <FormLabel>Login</FormLabel>
                <Input value={login} onChange={onLoginUpdate}></Input>
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type='password' value={password} onChange={onPasswordUpdate}></Input>
            </FormControl>
            <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <Input type='password' value={passwordConfirmation} onChange={onPasswordConfirmationUpdate}></Input>
            </FormControl>
            <Button disabled={disableCreateButton} onClick={() => props.onRegister(login, password)}>Create Account</Button>
        </>
    )
}

export default Registration;