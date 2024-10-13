"use client";

import { useState } from "react";

export default function GameMenu() {
  const LENGTH_DEFAULT = 5;
  const TIMER_DEFAULT = 0;
  const TOTAL_DEFAULT = 3;

  const [wordLength, setWordLength] = useState(LENGTH_DEFAULT);
  const [timer, setTimer] = useState(TIMER_DEFAULT);
  const [totalKeyWords, setTotalKeyWords] = useState(TOTAL_DEFAULT);

  const [totalInputValue, setTotalInputValue] = useState<string>("");

  const handleTotalInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Clamp the input value
    const value = !isNaN(parseInt(event.target.value))
      ? parseInt(event.target.value)
      : 0;

    if (value < 0) {
      setTotalInputValue("1");
      setTotalKeyWords(1);
    } else if (value > 100) {
      setTotalInputValue("100");
      setTotalKeyWords(100);
    } else if (value === 0) {
      setTotalInputValue("");
      setTotalKeyWords(1);
    } else {
      setTotalInputValue(value.toString());
      setTotalKeyWords(value);
    }
  };

  return (
    <div className="w-full max-w-lg border-4 border-neutral-700 bg-gradient-to-t from-blue-500 to-purple-400 rounded-md flex flex-col items-center gap-3">
      <button className="bg-yellow-500 hover:bg-yellow-300 border-2 border-neutral-700 rounded-md p-3 font-bold text-lg mt-3">
        {"Play Conquest(NYI)"}
      </button>
      {/* Play Custom button */}
      <div className=" border-t-4 border-neutral-700 w-full flex justify-center">
        <button className="bg-yellow-500 hover:bg-yellow-300 border-2 border-neutral-700 rounded-md p-3 font-bold text-lg mt-3">
          {"Play Custom"}
        </button>
      </div>
      {/* Custom Options */}
      <div className="flex flex-col gap-1 w-full p-2">
        {/* Length Options */}
        <div className="word length options container">
          <h2>Word Length</h2>
          <div className="flex gap-1 justify-between items-center bg-purple-300 border-2 h-12 border-blue-800 rounded-md p-1">
            <button
              onClick={() => setWordLength(5)}
              className={`bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full px-2 rounded-md ${
                wordLength <= 5 ? "bg-sky-900 text-white" : "bg-sky-300"
              }`}
            >
              Small
            </button>
            <button
              onClick={() => setWordLength(10)}
              className={`bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full px-2 rounded-md ${
                wordLength > 5 && wordLength <= 10
                  ? "bg-sky-900 text-white"
                  : "bg-sky-500"
              }`}
            >
              Med
            </button>
            <button
              onClick={() => setWordLength(15)}
              className={`bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full px-2 rounded-md ${
                wordLength > 10 ? "bg-sky-900 text-white" : "bg-sky-500"
              }`}
            >
              Long
            </button>
          </div>
        </div>
        {/* Timer Options */}
        <div className="timer options container">
          <h2>Timer</h2>
          <div className="flex gap-1 justify-between items-center bg-purple-300 border-2 h-12 border-blue-800 rounded-md p-1">
            <button
              className={`bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full px-2 rounded-md`}
            >
              None
            </button>
            <button
              className={`bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full px-2 rounded-md`}
            >
              Normal
            </button>
            <button
              className={`bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full px-2 rounded-md`}
            >
              Time Attack
            </button>
          </div>
        </div>
        {/* Total Key Word Options */}
        <div className="total keys options container">
          <h2>Total Key Words</h2>
          <div className="flex gap-1 justify-between items-center bg-purple-300 border-2 h-12 border-blue-800 rounded-md p-1">
            <button
              className={`bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full px-2 rounded-md`}
            >
              1
            </button>
            <button
              className={`bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full px-2 rounded-md`}
            >
              3
            </button>
            <button
              className={`bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full px-2 rounded-md`}
            >
              6
            </button>
            <input
              className="bg-sky-500 border hover:bg-sky-300 border-blue-500 h-full w-full px-2 rounded-md placeholder:text-black text-center"
              placeholder="Custom"
              value={totalInputValue}
              onChange={handleTotalInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
