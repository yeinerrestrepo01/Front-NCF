import React, { createContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Size } from 'global/types/System.interface';
import { Modal } from 'components';

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

export const ModalContext = createContext<ModalContextProps>({
  isOpenModal: false,
  openModal: () => {},
  closeModal: () => {},
});

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);
  const [title, setTitle] = useState<string>(null);
  const [size, setSize] = useState<Size>(null);
  const [noHeader, setNoHeader] = useState<boolean>(false);
  const [colorForm, setColorForm] = useState<boolean>(false);

  const openModal = useCallback(
    (
      element: React.ReactNode,
      elTitle: string,
      elSize: Size,
      elNoHeader: boolean,
      elcolorForm: boolean
    ) => {
      setShow(true);
      setContent(element);
      setTitle(elTitle);
      setNoHeader(elNoHeader);
      setSize(elSize);
      setColorForm(elcolorForm);
    },
    []
  );

  const closeModal = useCallback(() => {
    setShow(false);
    setContent(null);
    setTitle(null);
    setSize(null);
    setNoHeader(null);
    setColorForm(null);
  }, []);

  const modal = {
    isOpenModal: show,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={modal}>
      {children}
      {show && (
        <Modal
          title={title}
          closeModal={closeModal}
          size={size}
          noHeader={noHeader}
          colorForm={colorForm}
        >
          {content}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
