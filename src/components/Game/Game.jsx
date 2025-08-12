import Counter from "../Counter/Counter";
import Navbar from "../Navbar/Navbar";
import Title from "../Title/Title";

import styles from "./styles.module.css";

const Game = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Title title="roll craft" />
      <Counter counter={0} />
    </div>
  );
};

export default Game;
