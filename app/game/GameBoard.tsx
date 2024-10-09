"use client";

import { useState } from "react";
import useScore from "./useScore";
import useTimer from "./useTimer";
import useChars from "./useChars";
import useKeyboard from "./useKeyboard";
import useDisplayChars from "./useDisplayChars";
import buttonHandlers from "./buttonHandlers";
import createCheckGuess from "./createCheckGuess";

export default function GameBoard({
  ...props
}: {
  keyWords: string[];
  wordArray: string[];
}) {
  const { keyWords, wordArray } = props;
  const chars = useChars({ keyWords, charTarget: 9 });
  const [currentKeyWordIndex, setCurrentKeyWordIndex] = useState(0);
  const [hint, setHint] = useState(keyWords[0].split("").map(() => "\u00A0"));
  const [currentInput, setCurrentInput] = useState<string[]>([]);
  const displayChars = useDisplayChars({
    currentInput,
    currentKeyWordIndex,
    hint,
    keyWords,
  });
  const [guesses, setGuesses] = useState<string[]>([]);
  const timer = useTimer();
  const score = useScore();

  const checkGuess = createCheckGuess({
    keyWord: keyWords[currentKeyWordIndex],
    currentInput,
    wordArray,
    setScore: score.setValue,
    setGuesses,
    setHint,
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

  return (
    <div className="text-white flex flex-col items-center">
      <div className="max-w-lg w-full h-screen flex flex-col p-4 ">
        <div className="text-center mb-4">
          <h1 className="mt-10 text-2xl font-bold">Key Word Kingdom</h1>
          <div className="flex justify-between text-sm">
            <p>Score: {score.value}</p>
            <p>{timer.formatted}</p>
          </div>
          <p className="text-blue-400 text-sm">
            KeyWord {currentKeyWordIndex + 1} / {keyWords.length}
          </p>
        </div>
        <div className="flex justify-center space-x-2 text-2xl my-6">
          <p className="flex flex-wrap gap-1">
            {displayChars.map((char, index) => (
              <span
                className="border-b-2 border-white px-2 font-mono"
                key={index}
              >
                {char}
              </span>
            ))}
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 mb-6 flex-grow h-full">
          <ul className="text-blue-400 space-y-1">
            {keyWords.map((word, index) => (
              <p key={index}>{word[0].toUpperCase() + word.slice(1)}</p>
            ))}
          </ul>
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
