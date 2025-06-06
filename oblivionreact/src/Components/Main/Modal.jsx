import React from 'react';
import Styles from './Modal.module.css'; // Estilos específicos do modal

const Modal = ({ isOpen, onClose, title, children}) => {
  if (!isOpen) return null;

  return (
    <div className={Styles.modalOverlay}>
      <div className={Styles.modalContainer}>
        <div className={Styles.modalHeader}>
          <h3 className={Styles.modalTitle}>{title}</h3>
          <button className={Styles.modalCloseBtn} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={Styles.modalContent}>
          {children}
        </div>
        <div className={Styles.modalFooter}>
          <button  className={Styles.modalCancelBtn} onClick={onClose}>
            Cancelar
          </button>
          <button className={Styles.modalConfirmBtn}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;