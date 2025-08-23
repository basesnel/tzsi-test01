import { createPortal } from "react-dom";
import Navbar from "../Navbar/Navbar";
import Image from "../Image/Image";
import { bomb } from "../../constants/modal";

import styles from "./styles.module.css";
import useCloseModal from "../../hooks/useCloseModal";

const Modal = ({ showModal, setShowModal, gameState }) => {
  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "";
  };

  useCloseModal(showModal, closeModal);

  return createPortal(
    <>
      {showModal && (
        <div className={styles.backdrop} onClick={() => closeModal()}>
          <div className={styles.modalPosition}>
            <div
              className={styles.modalContainer}
              onClick={(e) => e.stopPropagation()}
            >
              <Navbar />
              <div className={styles.modal}>
                {gameState === "bomb" && (
                  <>
                    <h2 className={styles.title}>Danger ahead!</h2>
                    <div className={styles.warning}>
                      <div className={styles.light}>
                        <div className={styles.bombRed} />
                        <div className={styles.bombWhite} />
                        <div className={styles.image}>
                          <Image image={bomb} />
                        </div>
                      </div>
                      <div className={styles.content}>
                        <p className={styles.text}>
                          You're on a Bomb Square! You hit a bomb and lose all
                          rewards from this field...
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {gameState === "stop" && (
                  <h2 className={styles.title}>Game over!</h2>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  );
};

export default Modal;
