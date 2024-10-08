import { SetStateAction } from "react";

export default function buttonHandlers({
  setCurrentInput,
  keyWords,
  currentKeyWordIndex,
}: {
  setCurrentInput: React.Dispatch<SetStateAction<string[]>>;
  keyWords: string[];
  currentKeyWordIndex: number;
}) {
  const handleCharButton = (
    event: React.MouseEvent<HTMLButtonElement>,
    char: string
  ) => {
    setCurrentInput((prev) => {
      if (prev.length < keyWords[currentKeyWordIndex].length) {
        return [...prev, char.toUpperCase()];
      }
      return prev;
    });
  };

  const handleDelButton = () => {
    setCurrentInput((prev) => {
      if (prev.length > 0) {
        const newInput = [...prev];
        newInput.pop();
        return newInput;
      }
      return prev;
    });
  };

  const handleEnterButton = () => {
    // Handle a guess input here
  };

  const buttonHandlers = {
    handleCharButton,
    handleDelButton,
    handleEnterButton,
  };
  return buttonHandlers;
}
