# Traffic Light Simulation

This project simulates a four-way traffic light system using React, TypeScript, and Material UI. The simulation allows users to adjust the green light duration for each road, while the yellow light duration is fixed at 1 second. The app is interactive and updates the traffic light timings dynamically, displaying how much time remains until the lights change for each road.

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [Technologies Used](#technologies-used)
- [Application Architecture](#application-architecture)
- [Traffic Light Timing Management](#traffic-light-timing-management)

## Setup Instructions

### Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps
1. Clone the repository to your local machine:
```bash
   git clone https://github.com/your-username/traffic-light-simulation.git
   cd traffic-light-simulation
```
2. Install the dependencies:
```bash
npm install
# or if you're using yarn
yarn install
```
3. Run the development server:
```bash
npm start
# or if you're using yarn
yarn start
```
4. Open your browser and navigate to `http://localhost:3000` to view the simulation.

### Running Tests
To run the test suite, use the following command:
```bash
npm test
# or if you're using yarn
yarn test
```

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed superset of JavaScript that helps with development reliability.
- **Material UI**: A popular React component library used for UI design.
- **Jest and React Testing Library**: For unit testing and testing component behavior.

## Application Architecture

### Component Structure
The app is divided into the following key components:

1. **App Component**: The main component that orchestrates the state of the traffic lights and renders the UI.
2. **Road Component**: Represents an individual road and its associated traffic light. It allows users to adjust the green light duration and displays the current light status and remaining time.
3. **TrafficLight Component**: A presentational component that renders the traffic light with appropriate colors (`red`, `yellow`, or `green`).
4. **Utility Functions**: Contains helper functions that manage traffic light timings and calculate remaining durations.

### Folder Structure
```
src/
│
├── components/
|   ├── tests/
│   |   ├── Road.test.tsx           // Test cases for Road component
│   ├── Road.tsx                    // Displays road and its lights
|   ├── TrafficController.tsx       // Parent component
│   ├── TrafficLightDisplay.tsx     // Renders individual traffic lights
│   ├── DurationControl.tsx         // UI and controllers for updating green color timeframe
│
├── hooks/
│   ├── useTrafficController.ts     // Custom hook to manage active road logic
│
├── utils/
│   ├── getLightState.ts            // Helper functions to determine a light's state
│
├── types/
|   ├── TrafficLightTypes.ts       // Common types
├── theme/
│   ├── theme.ts     // Custom Material UI theme with traffic light colors
│
├── App.tsx          // Main application component
├── App.test.tsx     // Main component test cases
├── index.css        // Application main CSS file
├── index.tsx        // Application Entry point file
└── setupTests.ts    // File to setup Jest tests
```

## Traffic Light Timing Management

The traffic light system is managed using a cyclic approach where each road has its turn to activate the green light, followed by a yellow light, and then switches to red. The lights are updated dynamically based on user-defined green light durations for each road, and the yellow light duration is fixed at 1 second.

### How Traffic Lights Work:
1. **Green Light Duration**: Each road has a user-defined green light duration that can be adjusted using a slider or input box.
2. **Yellow Light Duration**: The yellow light is fixed at 1 second.
3. **Red Light Duration**: The red light is automatically adjusted based on the other roads’ green and yellow light durations.
4. **Light Cycling**: Once a road’s green light duration ends, the yellow light appears for 1 second, and then the next road in the cycle gets its green light.

### Timing Calculation Logic:
- Each road follows a cyclic pattern: Green → Yellow → Red.
- When a road is not active (i.e., its light is red), it calculates how long it will take for its green light to activate. This is done by summing the remaining time for all preceding roads in the cycle.

### Example:
Let’s assume we have four roads: **North**, **East**, **South**, and **West**. If **East** is currently active (green light is on for East):
- **North** will display how long it will take for its green light to activate, which is calculated by adding:
  - The remaining green time of **East**.
  - The total green and yellow light duration for **South**.
  - The total green and yellow light duration for **West**.
- **West**, if it’s active (green), will display how much time is left before the green light turns yellow.

### Utility Functions:
The `utils/getLightState.ts` file contains helper functions to determine whether a road should display a red, yellow, or green light based on the current active road and the elapsed time.

These utility functions ensure that the lights change in sync and that the correct remaining time is displayed for each road.

### Synchronization of Lights:
- At any given time, one road will have a green or yellow light, while the other three roads have red lights.
- The time it will take for a road to go from red to green is calculated based on the total green and yellow light durations of the preceding roads in the cycle.


## Final Notes
- Throughout the project, I've followed **Single Responsibility Principle**, as all of the functions have only one reason/responsibility to change.
- I've focused on keeping the functions pure
- Furthermore, I prefer using state management libraries to make states scallable. But given the scale of project, it made more sense to maintain local state.
