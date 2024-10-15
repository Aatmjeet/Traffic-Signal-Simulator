import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    traffic: {
      red: string;
      yellow: string;
      green: string;
      redLight: string;
      yellowLight: string;
      greenLight: string;
    };
  }
  interface PaletteOptions {
    traffic?: {
      red?: string;
      yellow?: string;
      green?: string;
      redLight?: string;
      yellowLight?: string;
      greenLight?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    traffic: {
      red: "#ff0000",
      yellow: "#ffff00",
      green: "#00ff00",
      redLight: "#ffcccc",
      yellowLight: "#ffffcc",
      greenLight: "#ccffcc",
    },
  },
});

export default theme;
