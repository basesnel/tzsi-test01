import { useState } from "react";
import Image from "../Image/Image";
import fields from "../../constants/fields";

import formatAmount from "../../helpers/formatAmount";
import styles from "./styles.module.css";

const Field = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section>
      <h2 className={styles.hidden}>game field</h2>
      <ul className={styles.list}>
        {fields.map((field) => (
          <li key={field.id} className={styles.item}>
            {isOpen ? (
              <div className={`${styles.field} ${styles.back}`}>
                {field.label === "cash" && (
                  <>
                    <div className={styles.cashFirstBG} />
                    <div className={styles.cashLight} />
                    <div className={styles.cashGreenUp} />
                    <div className={styles.cashGreenUpYellow} />
                    <div className={styles.cashGreenDown} />
                    <div className={styles.cashSecondBG} />
                    <div className={styles.cashThirdBG} />
                  </>
                )}
                {field.label === "double" && (
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
                )}
                {field.label === "zero" && (
                  <>
                    <div className={styles.cashFirstBG} />
                    <div className={styles.zeroLight} />
                    <div className={styles.zeroYellowTop} />
                    <div className={styles.zeroYellowBottom} />
                    <div className={styles.zeroSecondBG} />
                    <div className={styles.cashThirdBG} />
                  </>
                )}
                {field.label === "stop" && (
                  <>
                    <div className={styles.stopLight} />
                    <div className={styles.stopBG} />
                  </>
                )}
                {field.label === "bomb" && (
                  <>
                    <div className={styles.bombFirstBG} />
                    <div className={styles.bombLight} />
                    <div className={styles.bombYellow} />
                    <div className={styles.bombRed} />
                    <div className={styles.bombRedSecond} />
                    <div className={styles.bombWhite} />
                    <div className={styles.cashThirdBG} />
                  </>
                )}
                <div className={styles[`icon-${field.label}`]}>
                  <Image image={field} />
                  {field.amount && (
                    <span className={styles.amount}>
                      {formatAmount(field.amount)}
                    </span>
                  )}
                </div>
              </div>
            ) : (
              <div className={`${styles.field} ${styles.front}`}>$</div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Field;
