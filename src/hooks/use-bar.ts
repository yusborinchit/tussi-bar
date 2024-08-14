import { useEffect, useState } from "react";
import { getRandomBar } from "../utils/get-random-bar";

export interface Bar {
  first_bar: string;
  second_bar: string;
  song_title: string;
  url: string;
}

export function useBar() {
  const [bar, setBar] = useState<Bar>(getRandomBar());

  useEffect(() => {
    setBar(getRandomBar());
  }, []);

  return bar;
}
