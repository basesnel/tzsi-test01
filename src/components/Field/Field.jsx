import Card from "../Card/Card";
import cards from "../../constants/cards";

import styles from "./styles.module.css";

const Field = ({ setCount, tips, setTips }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.hidden}>game field</h2>
      <ul className={styles.list}>
        {cards.map(({ id, image, amount }) => (
          <li key={id} className={styles.item}>
            <Card
              image={image}
              amount={amount}
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
