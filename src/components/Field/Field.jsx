// import Image from "../Image/Image";
// import count from "../../constants/count";

import styles from "./styles.module.css";

const Field = () => {
  return (
    <section>
      <h2 className={styles.hidden}>game field</h2>
      <ul className={styles.list}>
        {[...Array(9)].map((_, i) => (
          <li key={i} className={styles.item}>
            <div className={styles.front}>$</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Field;
