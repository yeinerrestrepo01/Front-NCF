import { useContext } from 'react';
import { ModalContext } from 'context/withModal';
import { Size } from 'global/types/System.interface';

interface ModalContextProps {
  isOpenModal: boolean;
  openModal: (
    el: React.ReactNode,
    title: string,
    size?: Size,
    noHeader?: boolean,
    colorForm?: boolean
  ) => void;
  closeModal: () => void;
}

const useModal = (): ModalContextProps => useContext(ModalContext);

export default useModal;
