import { SetStateAction } from "react";

export default function createCheckGuess({
  keyWord,
  currentInput,
  wordArray,
  setScore,
  setGuesses,
}: {
  keyWord: string;
  currentInput: string[];
  wordArray: string[];
  setScore: React.Dispatch<SetStateAction<number>>;
  setGuesses: React.Dispatch<SetStateAction<string[]>>;
}) {
  return function checkGuess() {
    let isValidGuess = false;
    // See if current input is in wordarray
    if (wordArray.includes(currentInput.join("").toLowerCase())) {
      setScore((prev) => prev + currentInput.length * 100);
      isValidGuess = true;
    }
    // If it is, award score and time
    // Set hint entries
    // If it is keyWord
    // If it is neither
    return isValidGuess;
  };
}
