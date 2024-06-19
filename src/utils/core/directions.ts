// utils/instructionsUtils.ts

// Define types for clarity
type Direction = [number, number];
type Position = {
  x: number;
  y: number;
  direction: Direction;
};

// Directions mapped to their vector equivalents for movement
const directionMap: { [key: string]: Direction } = {
  N: [0, 1], // North
  E: [1, 0], // East
  S: [0, -1], // South
  W: [-1, 0], // West
};

// Array of directions in order of rotation
const orderedDirections: string[] = ['N', 'E', 'S', 'W'];

// Function to update the direction based on the turn
export function updateDirection(
  currentDirection: string,
  turn: string
): string {
  const currentIndex = orderedDirections.indexOf(currentDirection);
  const newIndex = (currentIndex + (turn === 'L' ? -1 : 1) + 4) % 4; // +4 to handle negative index wrap-around
  return orderedDirections[newIndex];
}

// Function to move the position according to the direction and steps
export function move(position: Position, steps: number): Position {
  return {
    x: position.x + position.direction[0] * steps,
    y: position.y + position.direction[1] * steps,
    direction: position.direction,
  };
}

// Main function to process instructions and calculate the total distance
export function navigate(instructions: string[]): number {
  let position: Position = {
    x: 0,
    y: 0,
    direction: directionMap['N'], // Start facing North
  };

  instructions.forEach((instruction) => {
    const turn = instruction.charAt(0);
    const steps = parseInt(instruction.substring(1), 10);
    const currentDirectionKey = Object.keys(directionMap).find(
      (key) => directionMap[key] === position.direction
    );
    const newDirectionKey = updateDirection(currentDirectionKey!, turn);
    position.direction = directionMap[newDirectionKey];
    position = move(position, steps);
  });

  return Math.abs(position.x) + Math.abs(position.y);
}
