import axios, { AxiosError } from 'axios';
import { useLocalStorage, useModalAlert } from 'global/hooks';
import { Authentication, UserData } from 'global/types/Resolve.interface';
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { useQueryClient } from 'react-query';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthenticationContext = React.createContext<Authentication>({
  login: null,
  logout: null,
  user: null,
});

export const AuthenticationProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserData>(null);
  const [loginUser, setLoginUser] = useLocalStorage<UserData>('nfc_user', null);
  const { openModalAlert } = useModalAlert();
  const cache = useQueryClient();

  useEffect(() => {
    if (!!user && user?.name !== loginUser?.name) {
      setUser(loginUser);
    }

    if (!user && !!loginUser) {
      setUser(loginUser);
    }
  }, [loginUser, user]);

  const login = useCallback(
    (data: UserData) => {
      if (!!data) {
        setUser(data);
        setLoginUser(data);
      }
    },
    [setLoginUser]
  );

  const logout = useCallback(() => {
    cache.clear();
    setUser(null);
    setLoginUser(null);
  }, [cache, setLoginUser]);

  useLayoutEffect(() => {
    const authInterceptor = axios.interceptors.response.use(undefined, async (err: AxiosError) => {
      if (err?.code === 'ERR_NETWORK') {
        openModalAlert('Algo está mal, intente más tarde.');
        return err;
      }

      const { status, config } = err?.response;

      switch (status) {
        case 401:
          logout();
          return err?.response || err;
        default:
          if (!config.url.includes('Autenticacion')) {
            openModalAlert(
              'Se ha presentado un error en el sistema, por favor vuelva a realizar la acción'
            );
          }
          return err?.response || err;
      }
    });

    return () => axios.interceptors.response.eject(authInterceptor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const auth = useMemo(
    () => ({
      login,
      logout,
      user,
    }),
    [login, logout, user]
  );

  return <AuthenticationContext.Provider value={auth}>{children}</AuthenticationContext.Provider>;
};
