import { useState } from "react";
import Image from "../Image/Image";
import Modal from "../Modal/Modal";
import formatAmount from "../../helpers/formatAmount";

import styles from "./styles.module.css";

const Card = ({
  image,
  amount,
  count,
  setCount,
  cards,
  setCards,
  tips,
  setTips,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [gameState, setGameState] = useState("run");

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const openCard = () => {
    setIsOpen(true);

    image.label.toLowerCase() === "cash" && setCount((count) => count + amount);
    image.label.toLowerCase() === "double" && setCount((count) => count * 2);
    image.label.toLowerCase() === "zero" && setCount((count) => count * 0);
    image.label.toLowerCase() === "bomb" && setGameState("bomb");
    image.label.toLowerCase() === "bomb" && openModal();
    image.label.toLowerCase() === "stop" && setGameState("stop");
    image.label.toLowerCase() === "stop" && openModal();

    image.label.toLowerCase() === "double" &&
      setCards(
        cards.map((card) => {
          if (card.image.label.toLowerCase() === "cash") {
            return { ...card, amount: card.amount * 2 };
          } else {
            return card;
          }
        })
      );

    image.label.toLowerCase() === "zero" &&
      setCards(
        cards.map((card) => {
          if (card.image.label.toLowerCase() === "cash") {
            return { ...card, amount: 0 };
          } else {
            return card;
          }
        })
      );

    setTips(
      tips.map((tip) => {
        if (tip.image.label === image.label) {
          return { ...tip, amount: tip.amount - 1 };
        } else {
          return tip;
        }
      })
    );
  };

  return (
    <>
      {!isOpen ? (
        <div className={`${styles.card} ${styles.front}`} onClick={openCard}>
          $
        </div>
      ) : (
        <div className={`${styles.card} ${styles.back}`}>
          <Decor label={image.label} />
          <div className={styles[`icon-${image.label.toLowerCase()}`]}>
            <Image image={image} />
            {!isNaN(amount) && (
              <span className={styles.amount}>{formatAmount(amount)}</span>
            )}
          </div>
        </div>
      )}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        gameState={gameState}
        count={formatAmount(count)}
      />
    </>
  );
};

const Decor = ({ label }) => {
  switch (label.toLowerCase()) {
    case "cash":
      return (
        <>
          <div className={styles.cashFirstBG} />
          {/* <div className={styles.cashYellow} /> */}
          <div className={styles.cashSecondBG} />
          <div className={styles.cashGreenTop} />
          <div className={styles.cashGreenBottom} />
          <div className={styles.cashLight} />
          <div className={styles.cashThirdBG} />
        </>
      );

    case "double":
      return (
        <>
          <div className={styles.cashFirstBG} />
          {/* <div className={styles.doubleWhite} /> */}
          {/* <div className={styles.doubleSecondWhite} /> */}
          <div className={styles.doubleSecondBG} />
          <div className={styles.doubleBlue} />
          <div className={styles.doubleKonfetti} />
          <div className={styles.doubleLight} />
          <div className={styles.cashThirdBG} />
        </>
      );

    case "zero":
      return (
        <>
          <div className={styles.cashFirstBG} />
          <div className={styles.zeroSecondBG} />
          <div className={styles.zeroYellowTop} />
          <div className={styles.zeroYellowBottom} />
          <div className={styles.zeroLight} />
          <div className={styles.cashThirdBG} />
        </>
      );

    case "stop":
      return (
        <>
          <div className={styles.stopLight} />
          <div className={styles.stopBG} />
        </>
      );

    case "bomb":
      return (
        <>
          <div className={styles.bombFirstBG} />
          <div className={styles.bombLight} />
          <div className={styles.bombYellow} />
          <div className={styles.bombRed} />
          <div className={styles.bombRedSecond} />
          <div className={styles.bombWhite} />

          {/* <div className={styles.bombLightOrigin} /> */}
          <div className={styles.cashThirdBG} />
        </>
      );

    default:
      return;
  }
};

export default Card;
