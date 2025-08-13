import Navbar from "../Navbar/Navbar";
import Title from "../Title/Title";
import Counter from "../Counter/Counter";
import Field from "../Field/Field";
import Tips from "../Tips/Tips";

import styles from "./styles.module.css";

const Game = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Title title="roll craft" />
      <Counter counter={0} />
      <Field />
      <Tips />
    </div>
  );
};

export default Game;
