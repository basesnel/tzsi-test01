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
    label: "Cash",
    tipWBP: cashWBP,
    tipPNG: cashPNG,
    tipBG: cashBG,
  },
  {
    label: "Double",
    tipWBP: x2WBP,
    tipPNG: x2PNG,
    tipBG: x2BG,
    tipBG2: x2BG2,
  },
  {
    label: "Zero",
    tipWBP: zeroWBP,
    tipPNG: zeroPNG,
    tipBG: zeroBG,
  },
  {
    label: "Bomb",
    tipWBP: bombWBP,
    tipPNG: bombPNG,
    tipBG: bombBG,
  },
  {
    label: "Stop",
    tipWBP: stopWBP,
    tipPNG: stopPNG,
    tipBG: stopBG,
  },
];

export default fields;
