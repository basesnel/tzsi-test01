import Image from "../Image/Image";

import styles from "./styles.module.css";

const Tips = ({ tips }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.hidden}>game tips</h2>
      <ul className={styles.list}>
        {tips.map(({ id, amount, image }) => (
          <li key={id} className={styles.item}>
            <Image image={image} />
            <span className={styles.amount}>{amount}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tips;
