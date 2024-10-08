import { useEffect, useState } from "react";

export default function useDisplayChars({
  hint,
  currentInput,
  keyWords,
  currentKeyWordIndex,
}: {
  hint: string[];
  currentInput: string[];
  keyWords: string[];
  currentKeyWordIndex: number;
}) {
  const [displayChars, setDisplayChars] = useState<string[]>([]);

  useEffect(() => {
    setDisplayChars(() => {
      // First populate the new display array with hint chars, which are initialized to spaces
      const newDisplayChars = [...hint];
      // Then replace appropriate entries with currentInput chars
      for (let i = 0; i < currentInput.length; i++) {
        if (typeof currentInput[i] === "string") {
          newDisplayChars[i] = currentInput[i];
        }
      }
      return newDisplayChars;
    });
  }, [hint, currentInput, keyWords, currentKeyWordIndex]);

  return displayChars;
}
