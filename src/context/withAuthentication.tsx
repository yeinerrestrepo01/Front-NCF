import axios, { AxiosError } from 'axios';
import { MenuData, ProfilesMenu } from 'global/constants';
import { useLocalStorage, useModalAlert } from 'global/hooks';
import { MenuItems, Profiles, ProfilesData } from 'global/types';
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
  menus: null,
});

export const AuthenticationProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserData>(null);
  const [loginUser, setLoginUser] = useLocalStorage<UserData>('nfc_user', null);
  const [menuUser, setMenuUser] = useLocalStorage<MenuItems[]>('nfc_menu', null);
  const [menus, setMenus] = useState<MenuItems[]>(null);
  const { openModalAlert } = useModalAlert();
  const cache = useQueryClient();

  const handleMenu = useCallback((perfiles: Profiles[]): MenuItems[] => {
    const profiles = perfiles.map((profile) => {
      switch (profile?.nombre) {
        case ProfilesData[0]:
          return ProfilesMenu.find((menu) => menu.profile === ProfilesData.Anulaciones);
        case ProfilesData[1]:
          return ProfilesMenu.find((menu) => menu.profile === ProfilesData.Recalculo);
        case ProfilesData[2]:
          return ProfilesMenu.find((menu) => menu.profile === ProfilesData.Root);
        case ProfilesData[3]:
          return ProfilesMenu.find((menu) => menu.profile === ProfilesData.Soporte);

        default:
          return null;
      }
    });

    const listMenu: MenuItems[] = [];
    profiles.forEach((menu) => {
      menu.menu.forEach((item) => {
        if (!listMenu.some((x) => x.id === item)) {
          const dataMenu = MenuData.find((x) => x.id === item);
          listMenu.push(dataMenu);
        }
      });
    });

    return listMenu;
  }, []);

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
        if (data.perfiles?.length > 0) {
          const listmenu = handleMenu(data.perfiles);
          setMenus(listmenu);
          setMenuUser(listmenu);
        }
      }
    },
    [handleMenu, setLoginUser, setMenuUser]
  );

  const logout = useCallback(() => {
    cache.clear();
    setUser(null);
    setLoginUser(null);
    setMenuUser(null);
    setMenus(null);
    localStorage.removeItem('nfc_nav');
  }, [cache, setLoginUser, setMenuUser]);

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

  useEffect(() => {
    if (!menus && !!menuUser) {
      setMenus(menuUser);
    }
  }, [menuUser, menus]);

  const auth = useMemo(
    () => ({
      login,
      logout,
      user,
      menus,
    }),
    [login, logout, menus, user]
  );

  return <AuthenticationContext.Provider value={auth}>{children}</AuthenticationContext.Provider>;
};
