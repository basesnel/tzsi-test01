import bombWBP from "../assets/modal/01-bomb-1x.webp";
import bombPNG from "../assets/modal/01-bomb-1x.png";
import cashWBP from "../assets/modal/03-cash-1x.webp";
import cashPNG from "../assets/modal/03-cash-1x.png";
import buttonBombWBP from "../assets/modal/04-bomb-1x.webp";
import buttonBombPNG from "../assets/modal/04-bomb-1x.png";
import buttonDefuseWBP from "../assets/modal/05-defuse-1x.webp";
import buttonDefusePNG from "../assets/modal/05-defuse-1x.png";

const bomb = {
  wbp: bombWBP,
  png: bombPNG,
  width: 120,
  height: 120,
  label: "Bomb",
};

const cash = {
  wbp: cashWBP,
  png: cashPNG,
  width: 48,
  height: 48,
  label: "Cash",
};

const buttonBomb = {
  wbp: buttonBombWBP,
  png: buttonBombPNG,
  width: 24,
  height: 24,
  label: "Bomb",
};

const buttonDefuse = {
  wbp: buttonDefuseWBP,
  png: buttonDefusePNG,
  width: 24,
  height: 24,
  label: "Defuse",
};

export { bomb, cash, buttonBomb, buttonDefuse };
