"use client";

import { useState } from "react";
import useScore from "./useScore";
import useTimer from "./useTimer";
import useChars from "./useChars";
import useKeyboard from "./useKeyboard";
import useDisplayChars from "./useDisplayChars";
import buttonHandlers from "./buttonHandlers";
import createCheckGuess from "./createCheckGuess";
import useDevCommands from "./useDevCommands";

export default function GameBoard({
  ...props
}: {
  keyWords: string[];
  keyWordCount: number;
  wordArray: string[];
}) {
  const { keyWords, keyWordCount, wordArray } = props;

  const [currentKeyWordIndex, setCurrentKeyWordIndex] = useState(0);
  const [hint, setHint] = useState(keyWords[0].split("").map(() => "\u00A0"));
  const [currentInput, setCurrentInput] = useState<string[]>([]);
  const [guesses, setGuesses] = useState<string[]>([]);

  const chars = useChars({ keyWords, charTarget: 9 });
  const displayChars = useDisplayChars({
    currentInput,
    currentKeyWordIndex,
    hint,
    keyWords,
  });
  const timer = useTimer();
  const score = useScore();

  const startNextRound = () => {
    const oldKeyWordIndex = currentKeyWordIndex;
    chars.get(oldKeyWordIndex + 1);
    setCurrentKeyWordIndex((prev) => prev + 1);
    setHint(keyWords[oldKeyWordIndex + 1].split("").map(() => "\u00A0"));
    setCurrentInput([]);
    setGuesses([]);
  };

  const checkGuess = createCheckGuess({
    keyWords,
    keyWordCount,
    currentKeyWordIndex,
    currentInput,
    guesses,
    wordArray,
    setScore: score.setValue,
    setGuesses,
    setHint,
    startNextRound,
  });

  useKeyboard({
    charValues: chars.values,
    currentKeyWordIndex,
    keyWords,
    setCurrentInput,
    checkGuess,
  });

  const { handleCharButton, handleDelButton, handleEnterButton } =
    buttonHandlers({
      currentKeyWordIndex,
      keyWords,
      setCurrentInput,
      checkGuess,
    });

  useDevCommands({ keyWords });

  return (
    <div className="text-white flex flex-col items-center">
      <div className="max-w-lg w-full h-screen flex flex-col p-4 ">
        <div className="text-center mb-2">
          <h1 className="mt-10 text-2xl font-bold">Key Word Kingdom</h1>
          <div className="flex justify-between text-sm">
            <p>Score: {score.value}</p>
            <p>{timer.formatted}</p>
          </div>
          <p className="text-purple-300 text-sm">
            KeyWord {currentKeyWordIndex + 1} / {keyWords.length}
          </p>
        </div>
        <div className="flex justify-center space-x-2 text-2xl mb-6">
          <p className="flex flex-wrap gap-1">
            {displayChars.map((char, index) => (
              <span
                className={`border-b-2 border-white px-2 font-mono ${
                  // Display chars and hint length should always be the same
                  typeof currentInput[index] === "string" &&
                  typeof hint[index] === "string" &&
                  char.toLowerCase() === currentInput[index].toLowerCase() &&
                  char.toLowerCase() === hint[index].toLowerCase()
                    ? "text-yellow-600"
                    : typeof hint[index] === "string" &&
                      char.toLowerCase() === hint[index].toLowerCase()
                    ? "text-green-500"
                    : "text-neutral-50"
                }`}
                key={index}
              >
                {char}
              </span>
            ))}
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 mb-6 flex-grow h-full overflow-y-auto overflow-x-hidden">
          <p className="text-blue-400 flex flex-wrap items-center gap-2 break-all">
            {guesses.map((word, index) => {
              if (word.length > 0) {
                return (
                  <span key={index}>
                    {word[0].toUpperCase() + word.slice(1)}
                  </span>
                );
              }
            })}
          </p>
        </div>
        <div className="h-full flex flex-col justify-end gap-3">
          <div className="h-full flex flex-wrap justify-center content-end gap-2">
            {chars.values.map((char, index) => {
              return (
                <button
                  key={index}
                  onClick={(e) => handleCharButton(e, char)}
                  className={`${
                    chars.values.length >= 20
                      ? "w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16"
                      : chars.values.length >= 15
                      ? "w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
                      : chars.values.length >= 10
                      ? "w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24"
                      : "w-16 h-16 sm:w-18 sm:h-18 md:w-24 md:h-24 lg:w-28 lg:h-28"
                  } bg-blue-500 rounded-full`}
                >
                  {char}
                </button>
              );
            })}
          </div>
          <div className="flex gap-3 justify-around">
            <button
              onClick={handleDelButton}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-red-500 rounded-full"
            >
              DEL
            </button>
            <button
              onClick={handleEnterButton}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-green-500 rounded-full"
            >
              ↵
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
