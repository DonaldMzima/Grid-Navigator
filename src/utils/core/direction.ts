// Psedu code, of the problem

// the main object algo (to determine your next/average blocks travelled from  your initial/start point)

/**
 * Function/algorithm that does the computation
 * adding subtracting the numbers of blocks .
 *
 *  - write script/code that determines north, west, south, and east
 *  - then based on the first direction (meaning the block you are instructed to travel), that becomes your starting point i.e if ["L3", "R5"], "L3" is your starting posting, going east 3 blocks
 *  - we would have separate "L3" to get the L for direction then get the number of blocks which is "3"
 *  - is to loop/go through the rest of the list (meaning we exclude the initial point, since we already have it)
 *  - based on the initial point we determine what the directions are moving forward (nested function , that determines if the next step based on the previous step, if it is north, south, east or west)
 * @
 */

//

//  types for clarity
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
const orderedDirections: string[] = ["N", "E", "S", "W"];

// Function to update the direction based on the turn
function updateDirection(currentDirection: string, turn: string): string {
  const currentIndex = orderedDirections.indexOf(currentDirection);
  const newIndex = (currentIndex + (turn === "L" ? -1 : 1) + 4) % 4; // +4 to handle negative index wrap-around
  return orderedDirections[newIndex];
}

// Function to move the position according to the direction and steps
function move(position: Position, steps: number): Position {
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
    direction: directionMap["N"], // Start facing North
  };
  instructions.forEach((instruction) => {
    // Extract the turn direction (left or right) from the instruction
    const turn = instruction.charAt(0);
    // Extract the number of steps from the instruction
    const steps = parseInt(instruction.substring(1), 10);
    // Determine the current direction based on the position object
    const currentDirectionKey = Object.keys(directionMap).find(
      (key) => directionMap[key] === position.direction
    );
    // Calculate the new direction after the turn
    const newDirectionKey = updateDirection(currentDirectionKey!, turn);
    // Update the position direction based on the new direction
    position.direction = directionMap[newDirectionKey];
    // Move the position according to the direction and number of steps
    position = move(position, steps);
  });

  // Calculate the total distance traveled (sum of absolute x and y coordinates)
  return Math.abs(position.x) + Math.abs(position.y);
}
