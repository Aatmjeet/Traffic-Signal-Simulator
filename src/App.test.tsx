import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders the traffic light simulation title", () => {
    const title = screen.getByText(/Traffic Light Simulation/i);
    expect(title).toBeInTheDocument();
  });

  it("displays info alert about yellow light", () => {
    const alert = screen.getByText(
      /Yellow light duration is fixed at 1 second/i
    );
    expect(alert).toBeInTheDocument();
  });

  it("renders all four road components", () => {
    const roads = ["North Road", "East Road", "South Road", "West Road"];
    roads.forEach((road) => {
      const roadName = screen.getByText(new RegExp(road, "i"));
      expect(roadName).toBeInTheDocument();
    });
  });
});
