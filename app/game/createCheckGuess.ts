import { SetStateAction } from "react";

export default function createCheckGuess({
  keyWord,
  currentInput,
  wordArray,
  setScore,
  setGuesses,
  setHint,
}: {
  keyWord: string;
  currentInput: string[];
  wordArray: string[];
  setScore: React.Dispatch<SetStateAction<number>>;
  setGuesses: React.Dispatch<SetStateAction<string[]>>;
  setHint: React.Dispatch<SetStateAction<string[]>>;
}) {
  return function checkGuess() {
    let isValidGuess = false;
    // See if current input is in wordarray
    if (wordArray.includes(currentInput.join("").toLowerCase())) {
      // If it is, award score and time
      setScore((prev) => prev + currentInput.length * 100);
      isValidGuess = true;
      // Set hint entries
      for (let i = 0; i < currentInput.length; i++) {
        if (currentInput[i].toLowerCase() === keyWord[i].toLowerCase()) {
          setHint((prev) => {
            const newValues = [...prev];
            newValues[i] = keyWord[i].toUpperCase();
            return newValues;
          });
        }
      }
    }
    // If it is keyWord
    // If it is neither
    return isValidGuess;
  };
}
