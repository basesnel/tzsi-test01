import cashWBP from "../assets/tips/01cash.webp";
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
    label: "Cash",
    wbp: cashWBP,
    png: cashPNG,
    width: 32,
    height: 32,
    amount: 5,
  },
  {
    id: 2,
    label: "Double",
    wbp: x2WBP,
    png: x2PNG,
    width: 32,
    height: 32,
    amount: 1,
  },
  {
    id: 3,
    label: "Zero",
    wbp: zeroWBP,
    png: zeroPNG,
    width: 32,
    height: 32,
    amount: 1,
  },
  {
    id: 4,
    label: "Bomb",
    wbp: bombWBP,
    png: bombPNG,
    width: 32,
    height: 32,
    amount: 1,
  },
  {
    id: 5,
    label: "Stop",
    wbp: stopWBP,
    png: stopPNG,
    width: 32,
    height: 32,
    amount: 1,
  },
];

export default tips;
