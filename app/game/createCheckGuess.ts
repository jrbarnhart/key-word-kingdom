import { SetStateAction } from "react";

export default function createCheckGuess({
  keyWord,
  keyWordCount,
  currentInput,
  guesses,
  wordArray,
  setScore,
  setGuesses,
  setHint,
}: {
  keyWord: string;
  keyWordCount: number;
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
    // If it is keyWord
    if (guess === keyWord) {
      isValidGuess = true;
      // Award score and time
      // Increment the index
      // Clear hint
      // Clear guesses
    } else if (wordArray.includes(guess) && !guesses.includes(guess)) {
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
    // If it is neither
    return isValidGuess;
  };
}
