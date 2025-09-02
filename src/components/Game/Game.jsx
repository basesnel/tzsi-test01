import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Title from "../Title/Title";
import Counter from "../Counter/Counter";
import Field from "../Field/Field";
import Tips from "../Tips/Tips";
import Claim from "../Claim/Claim";
import Footer from "../Footer/Footer";
import initTips from "../../constants/tips";

import styles from "./styles.module.css";

const Game = () => {
  const [count, setCount] = useState(0);
  const [tips, setTips] = useState(initTips);

  return (
    <div className={styles.game}>
      <Navbar />
      <Title title="roll craft" />
      <Counter counter={count} />
      <Field count={count} setCount={setCount} tips={tips} setTips={setTips} />
      <Tips tips={tips} />
      <Claim />
      <Footer />
    </div>
  );
};

export default Game;
