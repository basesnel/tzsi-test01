import Card from "../Card/Card";
import boxes from "../../constants/boxes";

import styles from "./styles.module.css";

const Field = ({ count, setCount, tips, setTips }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.hidden}>game field</h2>
      <ul className={styles.list}>
        {boxes.map(({ id, image, amount }) => (
          <li key={id} className={styles.item}>
            <Card
              image={image}
              amount={amount}
              count={count}
              setCount={setCount}
              tips={tips}
              setTips={setTips}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Field;
