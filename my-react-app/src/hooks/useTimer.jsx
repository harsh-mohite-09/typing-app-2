import { useState, useEffect } from "react";

const useTimer = (initialSeconds) => {
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (remainingSeconds === 0) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [remainingSeconds]);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  return { minutes, seconds };
};

export default useTimer;
