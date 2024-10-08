import { useState } from "react";

export default function useScore() {
  const [value, setValue] = useState(0);

  const add = (val: number) => {
    setValue((prev) => prev + val);
  };

  const score = { value, setValue, add };

  return score;
}
