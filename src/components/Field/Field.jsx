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
        {/* {[...Array(9)].map((_, i) => (
          <li key={i} className={styles.item}>
            <div className={styles.front}>$</div>
          </li>
        ))} */}
        {fields.map((field) => (
          <li key={field.id} className={styles.item}>
            {isOpen ? (
              <div
                style={{
                  backgroundImage: `url(${field.bg})`,
                  backgroundPosition: `${
                    field.label === "Cash" ? "center 100%" : "center"
                  }`,
                  backgroundSize: "185% auto",
                  backgroundRepeat: "no-repeat",
                }}
                className={`${styles.front} ${styles.back}`}
              >
                <Image image={field} />
                {field.amount && (
                  <span className={styles.amount}>
                    {formatAmount(field.amount)}
                  </span>
                )}
              </div>
            ) : (
              <div className={styles.front}>$</div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Field;
