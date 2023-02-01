import React, { createContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Size } from 'global/types/System.interface';
import { ModalAlert } from 'components';

interface ModalAlertContextProps {
  isOpenModalAlert: boolean;
  openModalAlert: (message: string, size?: Size) => void;
  closeModalAlert: () => void;
}

export const ModalAlertContext = createContext<ModalAlertContextProps>({
  isOpenModalAlert: false,
  openModalAlert: () => {},
  closeModalAlert: () => {},
});

interface ModalAlertProviderProps {
  children: React.ReactNode;
}

export const ModalAlertProvider: React.FC<ModalAlertProviderProps> = ({ children }) => {
  const [show, setShow] = useState(false);
  const [size, setSize] = useState<Size>(null);
  const [message, setMessage] = useState(null);

  const openModalAlert = useCallback((elMessage: string, elSize: Size) => {
    setShow(true);
    setMessage(elMessage);
    setSize(elSize);
  }, []);

  const closeModalAlert = useCallback(() => {
    setShow(false);
    setMessage(null);
    setSize(null);
  }, []);

  const modal = {
    isOpenModalAlert: show,
    openModalAlert,
    closeModalAlert,
  };

  return (
    <ModalAlertContext.Provider value={modal}>
      {children}
      {show && <ModalAlert closeModalAlert={closeModalAlert} message={message} size={size} />}
    </ModalAlertContext.Provider>
  );
};

ModalAlertProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
