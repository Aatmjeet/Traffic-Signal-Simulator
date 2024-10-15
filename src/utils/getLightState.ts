export const getLightState = (
  roadIndex: number,
  activeRoad: number,
  elapsedTime: number,
  greenDuration: number
): "red" | "yellow" | "green" => {
  if (roadIndex !== activeRoad) return "red";
  if (elapsedTime < greenDuration) return "green";
  return "yellow";
};
