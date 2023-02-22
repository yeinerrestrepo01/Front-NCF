import React from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { BackDrop, PasswordInput, TextInput } from 'components';
import { useAuthentication, useModalAlert } from 'global/hooks';
import { FormLoginInit } from 'pages/Authentication/constants/Authentication.constant';
import { LoginInterface } from 'pages/Authentication/constants/Authentication.interface';
import { useLogin } from 'pages/Authentication/services';
import LogoNCFImg from 'assets/images/logo_ncf.jpeg';
import { getMainMenu } from 'global/helpers';
import styles from './Login.module.scss';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { openModalAlert } = useModalAlert();
  const { mutate, isLoading } = useLogin();
  const { login } = useAuthentication();

  const handleLogin = (loginForm: LoginInterface) => {
    if (isLoading) return;
    mutate(
      {
        password: loginForm.password,
        usuario: loginForm.userName,
      },
      {
        onSuccess: (resp) => {
          if (resp.exitoso) {
            login(resp.respuesta);
            if (resp.respuesta?.perfiles.length >= 0) {
              const menuInitial = getMainMenu(resp.respuesta.perfiles[0].nombre);
              navigate(menuInitial.id === 1 ? menuInitial.url : `/home/${menuInitial.url}`);
            }
          } else {
            openModalAlert(resp.mensaje);
          }
        },
      }
    );
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
      {isLoading && <BackDrop show />}
    </div>
  );
};

export default Login;
