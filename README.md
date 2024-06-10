# One Digital Media Programming Challenge

## Overview

This project solves a programming challenge from One Digital Media. The task involves navigating a grid of city blocks based on a set of instructions and calculating the total distance from the starting point to the destination. This solution uses React with Next.js, TypeScript, and Tailwind CSS to create a functional UI that includes an input form and a submit button.

![Preview Image](/src/public/UI.png)

## Explanation of the Logic

Imagine you are a robot starting at the center of a grid, facing north. You are given a list of instructions to follow. Each instruction tells you to turn either left (L) or right (R) and then move forward a certain number of blocks. Our job is to find out how far you are from the starting point after following all the instructions.

Here is a simple way to understand how it works:

1. **Starting Point**: You begin at the center (0, 0) of the grid, facing north.
2. **Instructions**: Each instruction tells you to turn left or right and then move forward. For example, "L2" means turn left and move forward 2 blocks.
3. **Turning**: When you turn left or right, your direction changes. If you are facing north and turn left, you will face west. If you turn right, you will face east.
4. **Moving**: After turning, you move forward the specified number of blocks in the new direction.
5. **Distance Calculation**: The total distance is the number of blocks you are away from the starting point, measured by how far you moved horizontally (east-west) and vertically (north-south).

## Code Explanation

1. **State Management**:Uses useState to manage the instructions input by the user and the total distance calculated.
2. **Effect Hook**:Uses useEffect to calculate the total distance whenever the instructions change.
3. **Event Handlers**:

- `handleInputChange`:Updates the instructions state when the input changes.
- `handleSubmit`:Prevents the default form submission and alerts the total distance.

1. **Navigation Logic**:

- `Direction Mapping`: Maps each direction (N, E, S, W) to its corresponding movement vector.
- `Update Direction`: Determines the new direction based on the current direction and the turn (left or right).
- `Move`: Updates the position based on the current direction and the number of steps.

- `Navigate`: Processes all instructions and calculates the total distance from the starting point.

## Example Calculation

`Consider the instructions`: ["L1", "R3", "R1", "L5"]

1. Start at (0, 0), facing north.
2. "L1": Turn left to face west and move 1 block to (-1, 0).
3. "R3": Turn right to face north and move 3 blocks to (-1, 3).
4. "R1": Turn right to face east and move 1 block to (0, 3).
5. "L5": Turn left to face north and move 5 blocks to (0, 8).

The total distance from the starting point (0, 0) is |0| + |8| = 8 blocks.

## Conclusion

This project provides a simple and interactive way to solve the given challenge. By following the instructions, you can calculate how many blocks away you are from the starting point after navigating the grid.

Feel free to play around with the instructions and see how the distance changes!

## Project Structure

```bash
├── components
│ └── NavigateDirections.tsx
├── pages
│ └── _app.tsx
│ └── _document_.tsx
│ └── index.tsx
└── api
├── public
│ └── UI.png
├── styles
│ └── globals.css
├── utils
└── core
│ └── direction.tsx
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.mjs.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock
```

## Contact

- Email: (<donaldmzima8@gmail.com>)
