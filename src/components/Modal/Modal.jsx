import { createPortal } from "react-dom";

import styles from "./styles.module.css";

const Modal = ({ showModal, setShowModal }) => {
  return createPortal(
    <>
      {showModal && (
        <div className={styles.backdrop} onClick={() => setShowModal(false)}>
          <div className={styles.modalPosition}></div>
        </div>
      )}
    </>,
    document.body
  );
};

export default Modal;
