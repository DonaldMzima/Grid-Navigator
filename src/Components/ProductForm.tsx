/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const ProductForm: React.FC = () => {
  const [instructions, setInstructions] = useState<string>(
    "L1, R3, R1, L5, L2, L5, R4, L2, R2, R2, L2, R1, L5, R3, L4, L1, L2, R3, R5, L2, R5, L1, R2, L5, R4, R2, R2, L1, L1, R1, L3, L1, R1, L3, R5, R3, R3, L4, R4, L2, L4, R1, R1, L193, R2, L1, R54, R1, L1, R71, L4, R3, R191, R3, R2, L4, R3, R2, L2, L4, L5, R4, R1, L2, L2, L3, L2, L1, R4, R1, R5, R3, L5, R3, R4, L2, R3, L1, L3, L3, L5, L1, L3, L3, L1, R3, L3, L2, R1, L3, L1, R5, R4, R3, R2, R3, L1, L2, R4, L3, R1, L1, L1, R5, R2, R4, R5, L1, L1, R1, L2, L4, R3, L1, L3, R5, R4, R3, R3, L2, R2, L1, R4, R2, L3, L4, L2, R2, R2, L4, R3, R5, L2, R2, R4, R5, L2, L3, L2, R5, L4, L2, R3, L5, R2, L1, R1, R3, R3, L5, L2, L2, R5"
  );
  const [totalDistance, setTotalDistance] = useState<number>(0);

  useEffect(() => {
    // Calculate total distance when instructions change
    const instructionArray = instructions
      .split(",")
      .map((instr) => instr.trim());
    const distance = navigate(instructionArray);
    setTotalDistance(distance);
  }, [instructions, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInstructions(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Total number of blocks away: ${totalDistance}`);
  };

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
  function navigate(instructions: string[]): number {
    let position: Position = {
      x: 0,
      y: 0,
      direction: directionMap["N"], // Start facing North
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

  return (
    <header
      id="up"
      className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative"
    >
      <div className="h-screen bg-opacity-50 bg-black flex items-center justify-center">
        <div className="mx-2 text-center">
          <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
            <span className="text-white">One </span> Digital Media
          </h1>
          <h2 className="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
            Programming Challenge
          </h2>
          <div className="inline-flex"></div>
          <form onSubmit={handleSubmit} className="space-y-2">
            <p>
              <label htmlFor="instructions">Insert Instructions:</label>
              <input
                type="text"
                id="instructions"
                name="instructions"
                value={instructions}
                onChange={handleInputChange}
                placeholder="Enter instructions separated by comma (e.g., L5, R10, L3)"
                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
            </p>
            <button
              type="submit"
              className="w-full focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-purple-500 hover:bg-purple-600 hover:shadow-lg"
            >
              Calculate Distance
            </button>
            {totalDistance > 0 && (
              <p>The total number of blocks away is: {totalDistance}</p>
            )}
          </form>
        </div>
      </div>
    </header>
  );
};

export default ProductForm;
