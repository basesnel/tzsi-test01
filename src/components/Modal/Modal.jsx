import { createPortal } from "react-dom";
import Navbar from "../Navbar/Navbar";
import Image from "../Image/Image";
import {
  bomb,
  stop,
  cash,
  buttonBomb,
  buttonDefuse,
} from "../../constants/modal";

import styles from "./styles.module.css";
import useCloseModal from "../../hooks/useCloseModal";

const Modal = ({ showModal, setShowModal, gameState, count }) => {
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
              {gameState === "bomb" && (
                <>
                  <div className={styles.light}>
                    <div className={styles.bombRed} />
                    <div className={styles.bombWhite} />
                    <Image image={bomb} />
                  </div>
                  <section className={styles.content}>
                    <h2 className={styles.title}>Danger ahead!</h2>
                    <p className={`${styles.text} ${styles.firstText}`}>
                      You're on a Bomb Square! You hit a bomb and lose all
                      rewards from this field...
                    </p>
                    <figure className={styles.figure}>
                      <Image image={cash} />
                      <figcaption className={styles.caption}>
                        {count}
                      </figcaption>
                    </figure>
                    <p className={`${styles.text} ${styles.secondText}`}>
                      ...or defuse it and save your run!
                    </p>
                    <ul className={styles.control}>
                      <li className={styles.item}>
                        <button className={styles.button}>
                          <Image image={buttonBomb} />
                          Take a hit
                        </button>
                      </li>
                      <li className={styles.item}>
                        <button
                          className={`${styles.button} ${styles.secondButton}`}
                        >
                          Defuse for
                          <Image image={buttonDefuse} />
                          49
                        </button>
                      </li>
                    </ul>
                  </section>
                </>
              )}
              {gameState === "stop" && (
                <>
                  <div className={styles.stopLight}>
                    <Image image={stop} />
                  </div>
                  <section className={styles.content}>
                    <h2 className={styles.title}>Game over!</h2>
                    <p className={`${styles.text} ${styles.firstText}`}>
                      You've reached the end of this run...
                    </p>
                    <figure className={styles.figure}>
                      <Image image={cash} />
                      <figcaption className={styles.caption}>
                        {count}
                      </figcaption>
                    </figure>
                    <p className={`${styles.text} ${styles.secondText}`}>
                      ...claim and return to the main board
                    </p>
                    <ul className={styles.control}>
                      <li className={styles.item}>
                        <button
                          className={`${styles.button} ${styles.thirdButton}`}
                        >
                          Claim
                        </button>
                      </li>
                    </ul>
                  </section>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  );
};

export default Modal;
