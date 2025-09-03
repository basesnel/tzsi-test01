import cashWBP from "../assets/tips/01-cash-1x.webp";
import cashPNG from "../assets/tips/01cash.png";
import x2WBP from "../assets/tips/02x2.webp";
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
    image: { wbp: cashWBP, png: cashPNG, width: 32, height: 32, label: "Cash" },
  },
  {
    id: 2,
    amount: 1,
    image: { wbp: x2WBP, png: x2PNG, width: 32, height: 32, label: "Double" },
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
