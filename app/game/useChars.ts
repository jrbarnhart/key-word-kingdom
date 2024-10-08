import { useEffect, useState } from "react";
import { getMoreChars } from "./getMoreChars";

export default function useChars({
  keyWords,
  charTarget = 9,
}: {
  keyWords: string[];
  charTarget?: number;
}) {
  const [values, setValues] = useState<string[]>([]);

  useEffect(() => {
    setValues(getMoreChars({ keyWord: keyWords[0], charTarget }));
  }, [charTarget, keyWords]);

  const get = (keyWordIndex: number, newCharTarget?: number) => {
    setValues(
      getMoreChars({
        keyWord: keyWords[keyWordIndex],
        charTarget: newCharTarget ? newCharTarget : charTarget,
      })
    );
  };

  const chars = { values, get };

  return chars;
}
