import { useState } from "react";
import Image from "../Image/Image";
import formatAmount from "../../helpers/formatAmount";
import styles from "./styles.module.css";
import Modal from "../Modal/Modal";

const Card = ({ image, amount, setCount, tips, setTips }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [game, setGame] = useState("movement");

  const openCard = () => {
    setIsOpen(true);

    image.label.toLowerCase() === "cash" && setCount((count) => count + amount);
    image.label.toLowerCase() === "double" && setCount((count) => count * 2);
    image.label.toLowerCase() === "zero" && setCount((count) => count * 0);
    image.label.toLowerCase() === "bomb" && setGame("bomb");
    image.label.toLowerCase() === "bomb" && setShowModal(true);
    image.label.toLowerCase() === "stop" && setGame("stop");
    image.label.toLowerCase() === "stop" && setShowModal(true);

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
            {amount && (
              <span className={styles.amount}>{formatAmount(amount)}</span>
            )}
          </div>
        </div>
      )}
      <Modal showModal={showModal} setShowModal={setShowModal} game={game} />
    </>
  );
};

const Decor = ({ label }) => {
  switch (label.toLowerCase()) {
    case "cash":
      return (
        <>
          <div className={styles.cashFirstBG} />
          <div className={styles.cashLight} />
          <div className={styles.cashGreenTop} />
          <div className={styles.cashYellow} />
          <div className={styles.cashGreenBottom} />
          <div className={styles.cashSecondBG} />
          <div className={styles.cashThirdBG} />
        </>
      );

    case "double":
      return (
        <>
          <div className={styles.cashFirstBG} />
          <div className={styles.doubleLight} />
          <div className={styles.doubleBlue} />
          <div className={styles.doubleWhite} />
          <div className={styles.doubleKonfetti} />
          <div className={styles.doubleSecondWhite} />
          <div className={styles.doubleSecondBG} />
          <div className={styles.cashThirdBG} />
        </>
      );

    case "zero":
      return (
        <>
          <div className={styles.cashFirstBG} />
          <div className={styles.zeroLight} />
          <div className={styles.zeroYellowTop} />
          <div className={styles.zeroYellowBottom} />
          <div className={styles.zeroSecondBG} />
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
          <div className={styles.cashThirdBG} />
        </>
      );

    default:
      return;
  }
};

export default Card;
