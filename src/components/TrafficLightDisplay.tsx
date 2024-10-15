import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import {
  StyledTrafficLightProps,
  TrafficLightProps,
} from "../types/TrafficLightTypes";

const StyledTrafficLight = styled(Box)<StyledTrafficLightProps>(
  ({ theme, color, active }) => ({
    width: 60,
    height: 60,
    borderRadius: "50%",
    backgroundColor: `${
      active
        ? theme.palette.traffic[color]
        : theme.palette.traffic[`${color}Light`]
    }`,
    border: `3px solid ${theme.palette.grey[300]}`,
    margin: theme.spacing(1),
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  })
);

const TrafficLightDisplay: React.FC<TrafficLightProps> = React.memo(
  ({ color, active }) => (
    <StyledTrafficLight
      color={color}
      active={active ? 1 : 0}
      data-testid={`${color}-light`}
    />
  )
);

export default TrafficLightDisplay;
