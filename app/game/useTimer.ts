import { useEffect, useState } from "react";

export default function useTimer(
  startsAt: number = 0,
  countDown: boolean = false
) {
  const [time, setTime] = useState(startsAt ? startsAt : 0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(
        (prev) => prev + (countDown && prev > 0 ? -1 : !countDown ? 1 : 0)
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countDown]);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const sec = (seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  const timer = { time, formatted: formatTime(time) };

  return timer;
}
