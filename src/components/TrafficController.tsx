import { useState, useCallback } from "react";
import Grid from "@mui/material/Grid2";
import Road from "./Road";
import { useTrafficController } from "../hooks/useTrafficController";
import { getLightState } from "../utils/getLightState";

export const TrafficController = () => {
  const roads = ["North", "East", "South", "West"];
  const yellowDuration = 1;
  const [greenDurations, setGreenDurations] = useState<number[]>([5, 5, 5, 5]);

  const { activeRoad, elapsedTime } = useTrafficController(
    greenDurations,
    yellowDuration
  );

  const handleGreenDurationChange = useCallback(
    (roadIndex: number, duration: number) => {
      setGreenDurations((prevDurations) => {
        const newDurations = [...prevDurations];
        newDurations[roadIndex] = duration;
        return newDurations;
      });
    },
    []
  );

  return (
    <Grid container justifyContent="center" spacing={2}>
      {roads.map((road, index) => (
        <Grid size={{ xs: 12, sm: 6 }} key={road}>
          <Road
            name={road}
            lightState={getLightState(
              index,
              activeRoad,
              elapsedTime,
              greenDurations[index]
            )}
            onGreenDurationChange={(duration) =>
              handleGreenDurationChange(index, duration)
            }
            greenDuration={greenDurations[index]}
          />
        </Grid>
      ))}
    </Grid>
  );
};
