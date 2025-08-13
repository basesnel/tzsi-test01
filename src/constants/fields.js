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

const fields = [
  {
    id: 1,
    label: "cash",
    wbp: cashWBP,
    png: cashPNG,
    bg: cashBG,
    width: 72,
    height: 72,
    amount: 100,
  },
  {
    id: 2,
    label: "cash",
    wbp: cashWBP,
    png: cashPNG,
    bg: cashBG,
    width: 72,
    height: 72,
    amount: 500,
  },
  {
    id: 3,
    label: "cash",
    wbp: cashWBP,
    png: cashPNG,
    bg: cashBG,
    width: 72,
    height: 72,
    amount: 1000,
  },
  {
    id: 4,
    label: "cash",
    wbp: cashWBP,
    png: cashPNG,
    bg: cashBG,
    width: 72,
    height: 72,
    amount: 10000,
  },
  {
    id: 5,
    label: "cash",
    wbp: cashWBP,
    png: cashPNG,
    bg: cashBG,
    width: 72,
    height: 72,
    amount: 1000000,
  },
  {
    id: 6,
    label: "double",
    wbp: x2WBP,
    png: x2PNG,
    bg: x2BG,
    bg2: x2BG2,
    width: 49,
    height: 34,
  },
  {
    id: 7,
    label: "zero",
    wbp: zeroWBP,
    png: zeroPNG,
    bg: zeroBG,
    width: 53,
    height: 73,
  },
  {
    id: 8,
    label: "bomb",
    wbp: bombWBP,
    png: bombPNG,
    bg: bombBG,
    width: 88,
    height: 88,
  },
  {
    id: 9,
    label: "stop",
    wbp: stopWBP,
    png: stopPNG,
    bg: stopBG,
    width: 48,
    height: 48,
  },
];

export default fields;
