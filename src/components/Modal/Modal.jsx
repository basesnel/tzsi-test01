import { createPortal } from "react-dom";

import styles from "./styles.module.css";

const Modal = ({ showModal, setShowModal, game }) => {
  return createPortal(
    <>
      {showModal && (
        <div className={styles.backdrop} onClick={() => setShowModal(false)}>
          <div className={styles.modalPosition}>
            {game === "bomb" && <h2 className={styles.title}>Danger ahead!</h2>}
            {game === "stop" && <h2 className={styles.title}>Game over!</h2>}
          </div>
        </div>
      )}
    </>,
    document.body
  );
};

export default Modal;
