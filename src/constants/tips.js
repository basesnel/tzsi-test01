import cash1xWBP from "../assets/tips/01-cash-1x.webp";
import cash1xPNG from "../assets/tips/01-cash-1x.png";
import cash2xWBP from "../assets/tips/01-cash-2x.webp";
import cash2xPNG from "../assets/tips/01-cash-2x.png";
import cash3xWBP from "../assets/tips/01-cash-3x.webp";
import cash3xPNG from "../assets/tips/01-cash-3x.png";
import doubleWBP from "../assets/tips/02-double-1x.webp";
import x2PNG from "../assets/tips/02x2.png";
import zeroWBP from "../assets/tips/03zero.webp";
import zeroPNG from "../assets/tips/03zero.png";
import bombWBP from "../assets/tips/04bomb.webp";
import bombPNG from "../assets/tips/04bomb.png";
import stopWBP from "../assets/tips/05stop.webp";
import stopPNG from "../assets/tips/05stop.png";

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
      wbp: doubleWBP,
      png: x2PNG,
      width: 32,
      height: 32,
      label: "Double",
    },
  },
  {
    id: 3,
    amount: 1,
    image: { wbp: zeroWBP, png: zeroPNG, width: 32, height: 32, label: "Zero" },
  },
  {
    id: 4,
    amount: 1,
    image: { wbp: bombWBP, png: bombPNG, width: 32, height: 32, label: "Bomb" },
  },
  {
    id: 5,
    amount: 1,
    image: { wbp: stopWBP, png: stopPNG, width: 32, height: 32, label: "Stop" },
  },
];

export default tips;
