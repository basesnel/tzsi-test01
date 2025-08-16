import cashWBP from "../assets/fields/01cash.webp";
import cashPNG from "../assets/fields/01cash.png";
import cashBG from "../assets/fields/01cashlight.png";
import x2WBP from "../assets/fields/02x2.webp";
import x2PNG from "../assets/fields/02x2.png";
import x2BG from "../assets/fields/02x2light.png";
import x2BG2 from "../assets/fields/02x2konfetti.png";
import zeroWBP from "../assets/fields/03zero.webp";
import zeroPNG from "../assets/fields/03zero.png";
import zeroBG from "../assets/fields/03zerolight.png";
import bombWBP from "../assets/fields/04bomb.webp";
import bombPNG from "../assets/fields/04bomb.png";
import bombBG from "../assets/fields/04bomblight.png";
import stopWBP from "../assets/fields/05stop.webp";
import stopPNG from "../assets/fields/05stop.png";
import stopBG from "../assets/fields/05stoplight.png";

const cards = [
  {
    id: 1,
    amount: 100,
    bg: cashBG,
    image: { wbp: cashWBP, png: cashPNG, width: 72, height: 72, label: "cash" },
  },
  {
    id: 2,
    amount: 500,
    bg: cashBG,
    image: { wbp: cashWBP, png: cashPNG, width: 72, height: 72, label: "cash" },
  },
  {
    id: 3,
    amount: 1000,
    bg: cashBG,
    image: { wbp: cashWBP, png: cashPNG, width: 72, height: 72, label: "cash" },
  },
  {
    id: 4,
    amount: 10000,
    bg: cashBG,
    image: { wbp: cashWBP, png: cashPNG, width: 72, height: 72, label: "cash" },
  },
  {
    id: 5,
    amount: 1000000,
    bg: cashBG,
    image: { wbp: cashWBP, png: cashPNG, width: 72, height: 72, label: "cash" },
  },
  {
    id: 6,
    bg: x2BG,
    bg2: x2BG2,
    image: { wbp: x2WBP, png: x2PNG, width: 49, height: 34, label: "double" },
  },
  {
    id: 7,
    bg: zeroBG,
    image: { wbp: zeroWBP, png: zeroPNG, width: 53, height: 73, label: "zero" },
  },
  {
    id: 8,
    bg: bombBG,
    image: { wbp: bombWBP, png: bombPNG, width: 88, height: 88, label: "bomb" },
  },
  {
    id: 9,
    bg: stopBG,
    image: { wbp: stopWBP, png: stopPNG, width: 48, height: 48, label: "stop" },
  },
];

export default cards;
