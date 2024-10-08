"use client";

import { useCallback, useEffect, useState } from "react";
import useScore from "./useScore";
import useTimer from "./useTimer";
import useChars from "./useChars";
import useKeyboard from "./useKeyboard";

export default function GameBoard({ ...props }: { keyWords: string[] }) {
  const { keyWords } = props;
  const chars = useChars({ keyWords, charTarget: 9 });
  const [currentKeyWordIndex, setCurrentKeyWordIndex] = useState(0);
  const [hint, setHint] = useState(keyWords[0].split("").map(() => " "));
  const [currentInput, setCurrentInput] = useState<string[]>([]);
  const [guesses, setGuesses] = useState<string[]>([]);
  const timer = useTimer();
  const score = useScore();

  useKeyboard({
    charValues: chars.values,
    currentKeyWordIndex,
    keyWords,
    setCurrentInput,
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
        <div className="flex justify-center space-x-2 text-3xl my-6">
          {hint.map((char, index) => (
            <span className="border-b-2 border-white px-2" key={index}>
              {char}
            </span>
          ))}
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
            {/* map chars to buttons here */}
            {chars.values.map((char, index) => {
              return (
                <button
                  key={index}
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
            <button className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-red-500 rounded-full">
              DEL
            </button>
            <button className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-green-500 rounded-full">
              ↵
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
