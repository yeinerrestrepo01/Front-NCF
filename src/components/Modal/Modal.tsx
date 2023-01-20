import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Size } from 'global/types';
import { CloseSvg } from 'global/icons';
import styles from './Modal.module.scss';

interface ModalProps {
  children?: React.ReactNode;
  closeModal: () => void;
  colorForm?: boolean;
  noHeader?: boolean;
  size?: Size;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  closeModal,
  colorForm,
  noHeader,
  size,
  title,
}) => {
  const refModal = useRef(null);

  const handleClose = (e: EventTarget) => {
    if (refModal.current && !refModal.current.contains(e as Node)) {
      closeModal();
    }
  };

  return (
    <div className={styles.modal} onClick={(e) => handleClose(e.target)}>
      <div
        className={`${styles.container} ${!noHeader ? styles.container_isHeader : ''} ${
          colorForm ? styles.form : ''
        }`}
        ref={refModal}
        style={{
          ...(size === 'max' && { height: 'calc(100% - 40px)' }),
          ...(size === 'max' && { width: 'calc(100% - 40px)' }),
          ...(size === 'max' && { top: '20px' }),
          ...(size === 'max' && { left: '20px' }),
          ...(typeof size === 'object' && { height: `${size?.height}px` }),
          ...(typeof size === 'object' && { width: `${size?.width}px` }),
        }}
      >
        {!noHeader ? (
          <div className={styles.header}>
            {title.length > 0 ? <h3>{title}</h3> : <div />}
            <button type="button" onClick={closeModal}>
              <CloseSvg />
            </button>
          </div>
        ) : null}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  children: null,
  colorForm: false,
  noHeader: false,
  size: { height: 600, width: 600 },
  title: '',
};

Modal.propTypes = {
  children: PropTypes.element,
  closeModal: PropTypes.func.isRequired,
  colorForm: PropTypes.bool,
  noHeader: PropTypes.bool,
  size: PropTypes.any,
  title: PropTypes.string,
};

export default Modal;
