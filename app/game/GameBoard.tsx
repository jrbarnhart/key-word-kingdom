"use client";

import { useState } from "react";
import useScore from "./useScore";
import useTimer from "./useTimer";

export default function GameBoard({ ...props }: { keyWords: string[] }) {
  const { keyWords } = props;
  const [currentKeyWord, setCurrentKeyWord] = useState(0);
  const [hint, setHint] = useState(keyWords[0].split("").map(() => " "));
  const timer = useTimer(55.5);
  const score = useScore();

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
            KeyWord {currentKeyWord + 1} / {keyWords.length}
          </p>
        </div>
        <div className="flex justify-center space-x-2 text-3xl my-6">
          {hint.map((char, index) => (
            <span className="border-b-2 border-white px-2" key={index}>
              {char}
            </span>
          ))}
        </div>
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <ul className="text-blue-400 space-y-1">
            {keyWords.map((word, index) => (
              <p key={index}>{word[0].toUpperCase() + word.slice(1)}</p>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <div className="grid grid-cols-3 gap-2 mb-2">
            <button className="bg-blue-500 rounded-lg py-2 text-xl">T</button>
            <button className="bg-blue-500 rounded-lg py-2 text-xl">A</button>
            <button className="bg-blue-500 rounded-lg py-2 text-xl">Y</button>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <button className="bg-blue-500 rounded-lg py-2 text-xl">W</button>
            <button className="bg-blue-500 rounded-lg py-2 text-xl">X</button>
            <button className="bg-blue-500 rounded-lg py-2 text-xl">R</button>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <button className="bg-blue-500 rounded-lg py-2 text-xl">U</button>
            <button className="bg-blue-500 rounded-lg py-2 text-xl">N</button>
            <button className="bg-blue-500 rounded-lg py-2 text-xl">F</button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className="bg-blue-500 rounded-lg py-2 text-xl">||</button>
            <button className="bg-blue-500 rounded-lg py-2 text-xl">
              Entr
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
