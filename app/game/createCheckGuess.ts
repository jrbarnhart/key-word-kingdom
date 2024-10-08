import { SetStateAction } from "react";

export default function createCheckGuess({
  ...props
}: {
  keyWords: string[];
  keyWordCount: number;
  currentKeyWordIndex: number;
  currentInput: string[];
  guesses: string[];
  wordArray: string[];
  setScore: React.Dispatch<SetStateAction<number>>;
  setGuesses: React.Dispatch<SetStateAction<string[]>>;
  setHint: React.Dispatch<SetStateAction<string[]>>;
  startNextRound: () => void;
}) {
  const {
    keyWords,
    keyWordCount,
    currentKeyWordIndex,
    currentInput,
    guesses,
    wordArray,
    setScore,
    setGuesses,
    setHint,
    startNextRound,
  } = props;

  return function checkGuess() {
    let isValidGuess = false;
    const keyWord = keyWords[currentKeyWordIndex];
    const guess = currentInput.join("").toLowerCase();
    // If guess is keyWord
    if (guess === keyWord) {
      isValidGuess = true;
      // Award score and time
      setScore((prev) => prev + guess.length * 1000);
      // If the last key word has been found
      if (currentKeyWordIndex + 1 >= keyWordCount) {
        console.log("GAME WON!");
      } else {
        // Increment index and reset state for next round
        startNextRound();
      }
    } else if (wordArray.includes(guess) && !guesses.includes(guess)) {
      // Else if guess in word array and not in guesses yet
      isValidGuess = true;
      // Award score and time
      setScore((prev) => prev + guess.length * 100);
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
