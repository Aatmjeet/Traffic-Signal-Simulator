import { useState, useEffect } from "react";

export const useTrafficController = (
  greenDurations: number[],
  yellowDuration: number
) => {
  const [activeRoad, setActiveRoad] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prevTime) => {
        const newTime = prevTime + 1;
        const currentCycleDuration =
          greenDurations[activeRoad] + yellowDuration;

        if (newTime >= currentCycleDuration) {
          setActiveRoad((prevRoad) => (prevRoad + 1) % greenDurations.length);
          return 0;
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activeRoad, greenDurations, yellowDuration]);

  return { activeRoad, elapsedTime };
};
