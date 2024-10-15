import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import TrafficLightDisplay from "./TrafficLightDisplay";
import DurationControl from "./DurationControl";

interface RoadProps {
  name: string;
  lightState: "red" | "yellow" | "green";
  onGreenDurationChange: (duration: number) => void;
  greenDuration: number;
}

const Road: React.FC<RoadProps> = React.memo(
  ({ name, lightState, onGreenDurationChange, greenDuration }) => (
    <Card
      sx={{
        width: "100%",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
        borderRadius: 2,
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" gutterBottom>
          {name} Road
        </Typography>
        <Box display="flex" justifyContent="center" sx={{ mb: 2 }}>
          <TrafficLightDisplay color="red" active={lightState === "red"} />
          <TrafficLightDisplay
            color="yellow"
            active={lightState === "yellow"}
          />
          <TrafficLightDisplay color="green" active={lightState === "green"} />
        </Box>
        <DurationControl
          name={name}
          duration={greenDuration}
          onDurationChange={onGreenDurationChange}
        />
      </CardContent>
    </Card>
  )
);

export default Road;
