import React from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { PasswordInput, TextInput } from 'components';
import { FormLoginInit } from 'pages/Authentication/constants/Authentication.constant';
import { LoginInterface } from 'pages/Authentication/constants/Authentication.interface';
import LogoNCFImg from 'assets/images/logo_ncf.jpeg';
import styles from './Login.module.scss';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (loginForm: LoginInterface) => {
    navigate('/home');
  };

  return (
    <div className={styles.login}>
      <div className={styles.logo}>
        <img src={LogoNCFImg} alt="NCF" />
      </div>
      <div className={styles.content}>
        <span className={styles.title}>Ingresar</span>

        <Formik initialValues={FormLoginInit} onSubmit={handleLogin}>
          {() => (
            <Form className={styles.form}>
              <TextInput name={'userName'} label="usuario" />
              <PasswordInput name="password" label="Contraseña" />
              <button className={`btn btn-primary ${styles.button}`} type="submit">
                Ingresar
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
