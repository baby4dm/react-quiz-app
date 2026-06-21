import { useEffect, useState } from "react";

export default function QuizProgress({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    const timeoutCallback = setTimeout(onTimeout, timeout);
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);
    return () => {
      clearTimeout(timeoutCallback);
      clearInterval(interval);
    };
  }, [timeout, onTimeout]);
  return <progress max={timeout} value={remainingTime} />;
}
