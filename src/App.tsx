import {
  Box,
  Typography,
  Alert,
  AlertTitle,
  ThemeProvider,
} from "@mui/material";
import theme from "./themes/theme";
import { TrafficController } from "./components/TrafficController";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ margin: "auto", p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Traffic Light Simulation
        </Typography>
        <Alert severity="info" sx={{ mb: 2 }}>
          <AlertTitle>Note</AlertTitle>
          Yellow light duration is fixed at 1 second. Red light duration is
          automatically adjusted.
        </Alert>
        <TrafficController />
      </Box>
    </ThemeProvider>
  );
}

export default App;
