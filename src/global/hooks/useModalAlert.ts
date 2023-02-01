import { useContext } from 'react';
import { ModalAlertContext } from 'context';
import { Size } from 'global/types/System.interface';

interface ModalAlertContextProps {
  isOpenModalAlert: boolean;
  openModalAlert: (message: string, size?: Size) => void;
  closeModalAlert: () => void;
}

const useModalAlert = (): ModalAlertContextProps => useContext(ModalAlertContext);

export default useModalAlert;
