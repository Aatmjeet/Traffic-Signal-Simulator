import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Road from "../Road";

const mockTheme = createTheme({
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

describe("Road Component", () => {
  const mockOnGreenDurationChange = jest.fn();

  beforeEach(() => {
    render(
      <ThemeProvider theme={mockTheme}>
        <Road
          name="Test Road"
          lightState="green"
          onGreenDurationChange={mockOnGreenDurationChange}
          greenDuration={5}
        />
      </ThemeProvider>
    );
  });

  it("renders the road name", () => {
    const roadName = screen.getByText(/Test Road/i);
    expect(roadName).toBeInTheDocument();
  });

  it("displays the correct traffic light state", () => {
    const greenLight = screen.getByTestId("green-light");
    const yellowLight = screen.getByTestId("yellow-light");
    const redLight = screen.getByTestId("red-light");

    expect(greenLight).toHaveStyle("background-color: #00ff00"); // Active green light
    expect(yellowLight).toHaveStyle("background-color: #ffffcc"); // Inactive yellow light
    expect(redLight).toHaveStyle("background-color: #ffcccc"); // Inactive red light
  });

  it("calls onGreenDurationChange when slider value changes", () => {
    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: 10 } });

    expect(mockOnGreenDurationChange).toHaveBeenCalled();
  });

  it("updates the input value correctly", () => {
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveValue(5); // Initial value
  });
});
