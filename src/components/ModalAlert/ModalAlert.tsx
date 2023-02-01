import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Size } from 'global/types';
import styles from './ModalAlert.module.scss';

interface ModalAlertProps {
  closeModalAlert: () => void;
  message: string;
  size?: Size;
}

const ModalAlert: React.FC<ModalAlertProps> = ({ closeModalAlert, message, size }) => {
  const refModal = useRef(null);

  const handleClose = (e: EventTarget) => {
    if (refModal.current && !refModal.current.contains(e as Node)) {
      closeModalAlert();
    }
  };

  return (
    <div className={styles.modal} onClick={(e) => handleClose(e.target)}>
      <div
        className={`${styles.container}`}
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
        <div className={styles.header}>
          <h3>Notificación ABInDev</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.description}>
            <span>{message}</span>
          </div>
          <div className={styles.content_button}>
            <button className={styles.btnSuccess} type="button" onClick={closeModalAlert}>
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalAlert.defaultProps = {
  size: { height: 350, width: 600 },
};

ModalAlert.propTypes = {
  closeModalAlert: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  size: PropTypes.any,
};

export default ModalAlert;
