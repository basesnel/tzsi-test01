import Image from "../Image/Image";
import count from "../../constants/count";
import formatAmount from "../../helpers/formatAmount";

import styles from "./styles.module.css";

const Counter = ({ counter }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.hidden}>reward counter</h2>
      <div className={styles.counter}>
        <Image image={count} />
        <span>{formatAmount(counter)}</span>
      </div>
    </section>
  );
};

export default Counter;
