import Card from "../Card/Card";
import initialCards from "../../constants/cards";

import styles from "./styles.module.css";
import { useState } from "react";

const Field = ({ count, setCount, tips, setTips }) => {
  const [cards, setCards] = useState(initialCards);

  return (
    <section className={styles.section}>
      <h2 className={styles.hidden}>game field</h2>
      <ul className={styles.list}>
        {cards.map(({ id, image, amount }) => (
          <li key={id} className={styles.item}>
            <Card
              image={image}
              amount={amount}
              count={count}
              setCount={setCount}
              cards={cards}
              setCards={setCards}
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
