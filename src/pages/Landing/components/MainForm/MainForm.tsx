import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import useAxios from 'axios-hooks';
import { useState } from 'react';
import getLoginConfiguration from '../../types/login-api.functions';
import { LoginRequestInterface } from '../../types/login-request-body.interface';
import { RegisterRequest } from '../../types/register-api.functions';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import styles from './index.module.css';

type LandingForms = 'login' | 'registration';

function MainForm() {
  const [currentForm, setCurrentForm] = useState<LandingForms>('login');

  const [
    { data: loginResponse, loading: isLoginLoading, error: loginError },
    executeLogin,
  ] = useAxios<string, LoginRequestInterface, Error>(
    '/gemp-lotr-server/login',
    { manual: true }
  );
  const [
    {
      data: registrationResponse,
      loading: isRegistrationLoading,
      error: registrationError,
    },
    executeRegister,
  ] = useAxios<string, LoginRequestInterface, Error>(
    '/gemp-lotr-server/register',
    { manual: true }
  );

  const loginAttempt = (login: string, password: string): void => {
    executeLogin(getLoginConfiguration(login, password));
  };

  const registerAttempt = (login: string, password: string): void => {
    executeRegister(getLoginConfiguration(login, password));
  };

  return (
    <Sheet
      className={styles.form}
      sx={{
        backgroundColor: 'neutral.300',
        opacity: 0.9,
        p: 2,
        width: '30%',
        height: '40%',
      }}
    >
      <Typography level="h3">Lord of the Rings TCG on GEMP</Typography>
      {currentForm === 'registration' ? (
        <Registration
          onRegister={registerAttempt}
          error={registrationError}
          isLoading={isRegistrationLoading}
        />
      ) : (
        <Login
          onSelectRegister={() => setCurrentForm('registration')}
          onLogin={loginAttempt}
          error={loginError}
          isLoading={isLoginLoading}
        />
      )}
      <Typography level="body1">This is content</Typography>
      <span className={styles.foobar}>Foobar!</span>
    </Sheet>
  );
}

export default MainForm;
