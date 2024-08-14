import { bars } from "../data/bars";
import { getRandomNumber } from "./get-random-number";

export function getRandomBar() {
  const randomIndex = getRandomNumber(0, bars.length - 1);
  return bars[randomIndex];
}
