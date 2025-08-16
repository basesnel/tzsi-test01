import { useState } from "react";
import Image from "../Image/Image";
import formatAmount from "../../helpers/formatAmount";
import styles from "./styles.module.css";

const Card = ({ image, amount }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen ? (
        <div
          className={`${styles.card} ${styles.front}`}
          onClick={() => setIsOpen(true)}
        >
          $
        </div>
      ) : (
        <div
          className={`${styles.card} ${styles.back}`}
          onClick={() => setIsOpen(false)}
        >
          <Decor label={image.label} />
          <div className={styles[`icon-${image.label}`]}>
            <Image image={image} />
            {amount && (
              <span className={styles.amount}>{formatAmount(amount)}</span>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const Decor = ({ label }) => {
  switch (label) {
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
  }
};

export default Card;
