import { SetStateAction } from "react";

export default function createCheckGuess({
  keyWord,
  currentInput,
  guesses,
  wordArray,
  setScore,
  setGuesses,
  setHint,
}: {
  keyWord: string;
  currentInput: string[];
  guesses: string[];
  wordArray: string[];
  setScore: React.Dispatch<SetStateAction<number>>;
  setGuesses: React.Dispatch<SetStateAction<string[]>>;
  setHint: React.Dispatch<SetStateAction<string[]>>;
}) {
  return function checkGuess() {
    let isValidGuess = false;
    // See if current input is in wordarray and not in guesses
    const guess = currentInput.join("").toLowerCase();
    if (wordArray.includes(guess) && !guesses.includes(guess)) {
      isValidGuess = true;
      // Award score and time
      setScore((prev) => prev + currentInput.length * 100);
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
      // Set guesses
      setGuesses((prev) => [...prev, guess]);
    }
    // If it is keyWord
    // If it is neither
    return isValidGuess;
  };
}
