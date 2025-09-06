import bomb1xWBP from "../assets/modal/01-bomb-1x.webp";
import bomb1xPNG from "../assets/modal/01-bomb-1x.png";
import bomb2xWBP from "../assets/modal/01-bomb-2x.webp";
import bomb2xPNG from "../assets/modal/01-bomb-2x.png";
import bomb3xWBP from "../assets/modal/01-bomb-3x.webp";
import bomb3xPNG from "../assets/modal/01-bomb-3x.png";
import stop1xWBP from "../assets/modal/02-stop-1x.webp";
import stop1xPNG from "../assets/modal/02-stop-1x.png";
import stop2xWBP from "../assets/modal/02-stop-2x.webp";
import stop2xPNG from "../assets/modal/02-stop-2x.png";
import stop3xWBP from "../assets/modal/02-stop-3x.webp";
import stop3xPNG from "../assets/modal/02-stop-3x.png";
import cash1xWBP from "../assets/modal/03-cash-1x.webp";
import cash1xPNG from "../assets/modal/03-cash-1x.png";
import cash2xWBP from "../assets/modal/03-cash-2x.webp";
import cash2xPNG from "../assets/modal/03-cash-2x.png";
import cash3xWBP from "../assets/modal/03-cash-3x.webp";
import cash3xPNG from "../assets/modal/03-cash-3x.png";
import buttonBombWBP from "../assets/modal/04-bomb-1x.webp";
import buttonBombPNG from "../assets/modal/04-bomb-1x.png";
import buttonDefuseWBP from "../assets/modal/05-defuse-1x.webp";
import buttonDefusePNG from "../assets/modal/05-defuse-1x.png";

const bomb = {
  wbp: bomb1xWBP,
  png: bomb1xPNG,
  wbp2x: bomb2xWBP,
  png2x: bomb2xPNG,
  wbp3x: bomb3xWBP,
  png3x: bomb3xPNG,
  width: 120,
  height: 120,
  label: "Bomb",
};

const stop = {
  wbp: stop1xWBP,
  png: stop1xPNG,
  wbp2x: stop2xWBP,
  png2x: stop2xPNG,
  wbp3x: stop3xWBP,
  png3x: stop3xPNG,
  width: 96,
  height: 96,
  label: "Stop",
};

const cash = {
  wbp: cash1xWBP,
  png: cash1xPNG,
  wbp2x: cash2xWBP,
  png2x: cash2xPNG,
  wbp3x: cash3xWBP,
  png3x: cash3xPNG,
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
