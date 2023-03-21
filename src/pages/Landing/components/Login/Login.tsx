import { Button, FormControl, FormLabel, Input } from '@mui/joy';
import { useState } from 'react';
import { LoginProps } from './Login.props';
import isLoginValid from './types/login-validation.functions';
import styles from './index.module.css';

function Login({ error, onLogin, isLoading, onSelectRegister }: LoginProps) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onLoginUpdate = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLogin(e.target.value);
  const onPasswordUpdate = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const onLoginClick = () => {
    onLogin(login, password);
  };

  const isLoginDisabled = !isLoginValid(login, password).result;

  return (
    <>
      {isLoading && <span>Shit is loading dude</span>}
      {error && <span>We got an error! {error.message}</span>}
      <FormControl>
        <FormLabel>Login</FormLabel>
        <Input value={login} onChange={onLoginUpdate} />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={onPasswordUpdate} />
      </FormControl>
      <span className={styles.actionRow}>
        <Button variant="soft" onClick={onSelectRegister}>
          Create new Account
        </Button>
        <Button disabled={isLoginDisabled} onClick={onLoginClick}>
          Login
        </Button>
      </span>
    </>
  );
}

export default Login;
