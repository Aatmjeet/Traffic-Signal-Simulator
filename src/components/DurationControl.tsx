import React from "react";
import {
  Box,
  Slider,
  SliderProps,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

interface DurationControlProps {
  duration: number;
  onDurationChange: (newDuration: number) => void;
  name: string;
}

const DurationControl: React.FC<DurationControlProps> = ({
  duration,
  onDurationChange,
  name,
}) => {
  const handleSliderChange: SliderProps["onChange"] = (_, newValue) => {
    if (typeof newValue === "number") {
      onDurationChange(newValue);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue) && newValue > 1 && newValue <= 30) {
      onDurationChange(newValue);
    }
  };

  return (
    <Box>
      <Tooltip title="Set green light duration" arrow>
        <Typography id={`${name}-slider-label`} gutterBottom>
          Green Duration (seconds):
        </Typography>
      </Tooltip>
      <Box sx={{ display: "flex", alignItems: "center", gap: 5, px: 2 }}>
        <Slider
          value={duration}
          onChange={handleSliderChange}
          aria-labelledby={`${name}-slider-label`}
          valueLabelDisplay="auto"
          step={1}
          min={1}
          max={30}
          sx={{
            flex: 1,
            color: "#00cc44",
          }}
        />
        <TextField
          value={duration}
          onChange={handleInputChange}
          type="number"
          sx={{ width: 80, bgcolor: "#fff" }}
        />
      </Box>
    </Box>
  );
};

export default DurationControl;
