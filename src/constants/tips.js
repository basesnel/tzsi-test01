import cash1xWBP from "../assets/tips/01-cash-1x.webp";
import cash1xPNG from "../assets/tips/01-cash-1x.png";
import cash2xWBP from "../assets/tips/01-cash-2x.webp";
import cash2xPNG from "../assets/tips/01-cash-2x.png";
import cash3xWBP from "../assets/tips/01-cash-3x.webp";
import cash3xPNG from "../assets/tips/01-cash-3x.png";
import double1xWBP from "../assets/tips/02-double-1x.webp";
import double1xPNG from "../assets/tips/02-double-1x.png";
import double2xWBP from "../assets/tips/02-double-2x.webp";
import double2xPNG from "../assets/tips/02-double-2x.png";
import double3xWBP from "../assets/tips/02-double-3x.webp";
import double3xPNG from "../assets/tips/02-double-3x.png";
import zero1xWBP from "../assets/tips/03-zero-1x.webp";
import zero1xPNG from "../assets/tips/03-zero-1x.png";
import zero2xWBP from "../assets/tips/03-zero-2x.webp";
import zero2xPNG from "../assets/tips/03-zero-2x.png";
import zero3xWBP from "../assets/tips/03-zero-3x.webp";
import zero3xPNG from "../assets/tips/03-zero-3x.png";
import bomb1xWBP from "../assets/tips/04-bomb-1x.webp";
import bomb1xPNG from "../assets/tips/04-bomb-1x.png";
import bomb2xWBP from "../assets/tips/04-bomb-2x.webp";
import bomb2xPNG from "../assets/tips/04-bomb-2x.png";
import bomb3xWBP from "../assets/tips/04-bomb-3x.webp";
import bomb3xPNG from "../assets/tips/04-bomb-3x.png";
import stop1xWBP from "../assets/tips/05-stop-1x.webp";
import stop1xPNG from "../assets/tips/05-stop-1x.png";

const tips = [
  {
    id: 1,
    amount: 5,
    image: {
      label: "Cash",
      wbp: cash1xWBP,
      png: cash1xPNG,
      wbp2x: cash2xWBP,
      png2x: cash2xPNG,
      wbp3x: cash3xWBP,
      png3x: cash3xPNG,
      width: 32,
      height: 32,
    },
  },
  {
    id: 2,
    amount: 1,
    image: {
      wbp: double1xWBP,
      png: double1xPNG,
      wbp2x: double2xWBP,
      png2x: double2xPNG,
      wbp3x: double3xWBP,
      png3x: double3xPNG,
      width: 32,
      height: 32,
      label: "Double",
    },
  },
  {
    id: 3,
    amount: 1,
    image: {
      label: "Zero",
      wbp: zero1xWBP,
      png: zero1xPNG,
      wbp2x: zero2xWBP,
      png2x: zero2xPNG,
      wbp3x: zero3xWBP,
      png3x: zero3xPNG,
      width: 32,
      height: 32,
    },
  },
  {
    id: 4,
    amount: 1,
    image: {
      label: "Bomb",
      wbp: bomb1xWBP,
      png: bomb1xPNG,
      wbp2x: bomb2xWBP,
      png2x: bomb2xPNG,
      wbp3x: bomb3xWBP,
      png3x: bomb3xPNG,
      width: 32,
      height: 32,
    },
  },
  {
    id: 5,
    amount: 1,
    image: {
      wbp: stop1xWBP,
      png: stop1xPNG,
      width: 32,
      height: 32,
      label: "Stop",
    },
  },
];

export default tips;
