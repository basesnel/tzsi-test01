import Logo from "../Logo/Logo";

import styles from "./styles.module.css";

const Counter = ({ counter }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.hidden}>reward counter</h2>
      <p className={styles.counter}>
        <img src="" alt="" />
        <span>{counter}</span>
      </p>
    </section>
  );
};

export default Counter;
