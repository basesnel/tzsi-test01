import { createPortal } from "react-dom";
import Navbar from "../Navbar/Navbar";
import Image from "../Image/Image";
import { bomb } from "../../constants/modal";

import styles from "./styles.module.css";

const Modal = ({ showModal, setShowModal, game }) => {
  return createPortal(
    <>
      {showModal && (
        <div className={styles.backdrop} onClick={() => setShowModal(false)}>
          <div className={styles.modalPosition}>
            <div className={styles.modalContainer}>
              <Navbar />
              <div className={styles.modal}>
                {game === "bomb" && (
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
                {game === "stop" && (
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
