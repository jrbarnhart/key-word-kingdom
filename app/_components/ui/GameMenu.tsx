"use client";

import { useState } from "react";

export default function GameMenu() {
  const LENGTH_DEFAULT = 5;
  const TIMER_DEFAULT = 0;
  const TOTAL_DEFAULT = 3;

  const [wordLength, setWordLength] = useState(LENGTH_DEFAULT);
  const [timer, setTimer] = useState(TIMER_DEFAULT);
  const [totalKeyWords, setTotalKeyWords] = useState(TOTAL_DEFAULT);

  return (
    <div className="w-full max-w-lg border-4 border-neutral-700 bg-gradient-to-t from-blue-500 to-purple-400 rounded-md flex flex-col items-center gap-3">
      <button className="bg-yellow-500 hover:bg-yellow-300 border-2 border-neutral-700 rounded-md p-3 font-bold text-lg mt-3">
        {"Play Conquest(NYI)"}
      </button>
      {/* Custom Options */}
      <div className="flex flex-col gap-1 w-full border-t-4 border-neutral-700 p-3">
        {/* Length Options */}
        <div className="word length options container">
          <h2>Word Length</h2>
          <div className="flex gap-1 justify-between items-center bg-purple-300 border h-12 border-blue-800 rounded-md p-1">
            <button className="bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full rounded-md">
              Small
            </button>
            <button className="bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full rounded-md">
              Med
            </button>
            <button className="bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full rounded-md">
              Long
            </button>
          </div>
        </div>
        {/* Timer Options */}
        <div className="timer options container">
          <h2>Timer</h2>
          <div className="flex gap-1 justify-between items-center bg-purple-300 border h-12 border-blue-800 rounded-md p-1">
            <button className="bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full rounded-md">
              None
            </button>
            <button className="bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full rounded-md">
              Normal
            </button>
            <h3>Time Attack:</h3>
            <button className="bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full rounded-md">
              Easy
            </button>
            <button className="bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full rounded-md">
              Med
            </button>
            <button className="bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full rounded-md">
              Hard
            </button>
          </div>
        </div>
        {/* Total Key Word Options */}
        <div className="total keys options container">
          <h2>Total Key Words</h2>
          <div className="flex gap-1 justify-between items-center bg-purple-300 border h-12 border-blue-800 rounded-md p-1">
            <button className="bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full rounded-md">
              1
            </button>
            <button className="bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full rounded-md">
              3
            </button>
            <button className="bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full rounded-md">
              6
            </button>
            <button className="bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full rounded-md">
              X
            </button>
          </div>
        </div>
      </div>
      {/* Play Custom button */}
      <div className="custom button area">
        <button className="bg-yellow-500 hover:bg-yellow-300 border-2 border-neutral-700 rounded-md p-3 font-bold text-lg mb-3">
          {"Play Custom"}
        </button>
      </div>
    </div>
  );
}
