import cash1xWBP from "../assets/cards/images/01-cash-1x.webp";
import cash1xPNG from "../assets/cards/images/01-cash-1x.png";
import cash2xWBP from "../assets/cards/images/01-cash-2x.webp";
import cash2xPNG from "../assets/cards/images/01-cash-2x.png";
import cash3xWBP from "../assets/cards/images/01-cash-3x.webp";
import cash3xPNG from "../assets/cards/images/01-cash-3x.png";
// import cashBG from "../assets/cards/01cashlight.png";
import double1xWBP from "../assets/cards/images/02-double-1x.webp";
import double1xPNG from "../assets/cards/images/02-double-1x.png";
import double2xPNG from "../assets/cards/images/02-double-2x.png";
import x2BG from "../assets/cards/02x2light.png";
import x2BG2 from "../assets/cards/02x2konfetti.png";
import zeroWBP from "../assets/cards/03zero.webp";
import zeroPNG from "../assets/cards/03zero.png";
import zeroBG from "../assets/cards/03zerolight.png";
import bombWBP from "../assets/cards/04bomb.webp";
import bombPNG from "../assets/cards/04bomb.png";
import bombBG from "../assets/cards/04bomblight.png";
import stopWBP from "../assets/cards/05stop.webp";
import stopPNG from "../assets/cards/05stop.png";
import stopBG from "../assets/cards/05stoplight.png";

const cards = [
  {
    id: 1,
    amount: 100,
    // bg: cashBG,
    image: {
      wbp: cash1xWBP,
      png: cash1xPNG,
      wbp2x: cash2xWBP,
      png2x: cash2xPNG,
      wbp3x: cash3xWBP,
      png3x: cash3xPNG,
      width: 72,
      height: 72,
      label: "Cash",
    },
  },
  {
    id: 2,
    amount: 500,
    // bg: cashBG,
    image: {
      wbp: cash1xWBP,
      png: cash1xPNG,
      wbp2x: cash2xWBP,
      png2x: cash2xPNG,
      wbp3x: cash3xWBP,
      png3x: cash3xPNG,
      width: 72,
      height: 72,
      label: "Cash",
    },
  },
  {
    id: 3,
    amount: 1000,
    // bg: cashBG,
    image: {
      wbp: cash1xWBP,
      png: cash1xPNG,
      wbp2x: cash2xWBP,
      png2x: cash2xPNG,
      wbp3x: cash3xWBP,
      png3x: cash3xPNG,
      width: 72,
      height: 72,
      label: "Cash",
    },
  },
  {
    id: 4,
    amount: 10000,
    // bg: cashBG,
    image: {
      wbp: cash1xWBP,
      png: cash1xPNG,
      wbp2x: cash2xWBP,
      png2x: cash2xPNG,
      wbp3x: cash3xWBP,
      png3x: cash3xPNG,
      width: 72,
      height: 72,
      label: "Cash",
    },
  },
  {
    id: 5,
    amount: 1000000,
    // bg: cashBG,
    image: {
      wbp: cash1xWBP,
      png: cash1xPNG,
      wbp2x: cash2xWBP,
      png2x: cash2xPNG,
      wbp3x: cash3xWBP,
      png3x: cash3xPNG,
      width: 72,
      height: 72,
      label: "Cash",
    },
  },
  {
    id: 6,
    bg: x2BG,
    bg2: x2BG2,
    image: {
      wbp: double1xWBP,
      png: double1xPNG,
      png2x: double2xPNG,
      width: 72,
      height: 72,
      label: "Double",
    },
  },
  {
    id: 7,
    bg: zeroBG,
    image: { wbp: zeroWBP, png: zeroPNG, width: 53, height: 73, label: "Zero" },
  },
  {
    id: 8,
    bg: bombBG,
    image: { wbp: bombWBP, png: bombPNG, width: 88, height: 88, label: "Bomb" },
  },
  {
    id: 9,
    bg: stopBG,
    image: { wbp: stopWBP, png: stopPNG, width: 48, height: 48, label: "Stop" },
  },
];

export default cards;
