import { SetStateAction, useCallback, useEffect } from "react";

export default function useKeyboard({
  charValues,
  currentKeyWordIndex,
  keyWords,
  setCurrentInput,
}: {
  charValues: string[];
  currentKeyWordIndex: number;
  keyWords: string[];
  setCurrentInput: React.Dispatch<SetStateAction<string[]>>;
}) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (charValues.includes(event.key.toLowerCase())) {
        setCurrentInput((prev) => {
          if (prev.length < keyWords[currentKeyWordIndex].length) {
            return [...prev, event.key.toUpperCase()];
          }
          return prev;
        });
      } else if (event.key === "Backspace" || event.key === "Delete") {
        setCurrentInput((prev) => {
          if (prev.length > 0) {
            const newInput = [...prev];
            newInput.pop();
            return newInput;
          }
          return prev;
        });
      }
    },
    [charValues, currentKeyWordIndex, keyWords, setCurrentInput]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
}
