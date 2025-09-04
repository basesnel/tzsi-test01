import cash1xWBP from "../assets/tips/01-cash-1x.webp";
import cash1xPNG from "../assets/tips/01-cash-1x.png";
import cash2xWBP from "../assets/tips/01-cash-2x.webp";
import cash2xPNG from "../assets/tips/01-cash-2x.png";
import cash3xWBP from "../assets/tips/01-cash-3x.webp";
import cash3xPNG from "../assets/tips/01-cash-3x.png";
import doubleWBP from "../assets/tips/02-double-1x.webp";
import doublePNG from "../assets/tips/02-double-1x.png";
import double2xWBP from "../assets/tips/02-double-2x.webp";
import double2xPNG from "../assets/tips/02-double-2x.png";
import double3xWBP from "../assets/tips/02-double-3x.webp";
import double3xPNG from "../assets/tips/02-double-3x.png";
import zeroWBP from "../assets/tips/03zero.webp";
import zeroPNG from "../assets/tips/03zero.png";
import zero1xPNG from "../assets/tips/03-zero-1x.png";
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
      png: doublePNG,
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
      wbp: zeroWBP,
      png: zero1xPNG,
      width: 32,
      height: 32,
      label: "Zero",
    },
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
