import Image from "../Image/Image";
import tips from "../../constants/tips";

import styles from "./styles.module.css";

const Tips = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.hidden}>game tips</h2>
      <ul className={styles.list}>
        {tips.map((tip) => (
          <li key={tip.id} className={styles.item}>
            <Image image={tip} />
            <span className={styles.amount}>{tip.amount}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tips;
