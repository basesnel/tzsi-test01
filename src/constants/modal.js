import bombWBP from "../assets/modal/01-bomb-1x.webp";
import bomb1xPNG from "../assets/modal/01-bomb-1x.png";
import bomb2xPNG from "../assets/modal/01-bomb-2x.png";
import stopWBP from "../assets/modal/02-stop-1x.webp";
import stopPNG from "../assets/modal/02-stop-1x.png";
import cashWBP from "../assets/modal/03-cash-1x.webp";
import cashPNG from "../assets/modal/03-cash-1x.png";
import buttonBombWBP from "../assets/modal/04-bomb-1x.webp";
import buttonBombPNG from "../assets/modal/04-bomb-1x.png";
import buttonDefuseWBP from "../assets/modal/05-defuse-1x.webp";
import buttonDefusePNG from "../assets/modal/05-defuse-1x.png";

const bomb = {
  wbp: bombWBP,
  png: bomb1xPNG,
  png2x: bomb2xPNG,
  width: 120,
  height: 120,
  label: "Bomb",
};

const stop = {
  wbp: stopWBP,
  png: stopPNG,
  width: 96,
  height: 96,
  label: "Stop",
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

export { bomb, stop, cash, buttonBomb, buttonDefuse };
