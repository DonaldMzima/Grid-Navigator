/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa"; // Import the GitHub icon from react-icons
import { navigate } from "@/utils/core/direction";

const NavigateDirections: React.FC = () => {
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
  }, [instructions]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInstructions(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Total number of blocks away: ${totalDistance}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header
        id="up"
        className="bg-fixed bg-no-repeat bg-center bg-cover h-screen relative flex-grow"
      >
        <div className="h-screen bg-opacity-50 bg-black flex items-center justify-center">
          <div className="mx-2 text-center space-y-10">
            <div>
              <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl ">
                <span className="text-white">One </span> Digital Media
              </h1>
              <h2 className="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
                Programming Challenge
              </h2>
            </div>
            <div className="inline-flex"></div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="space-y-4">
                <label htmlFor="instructions">
                  Enter your instructions below (e.g. "L5, R10, L3"):
                </label>
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
      <footer className="bg-black text-white py-4 mt-auto">
        <div className="container mx-auto text-center">
          <p className="mt-2">
            © {new Date().getFullYear()} Developed by Donald Mzima{" "}
            <a
              href="https://github.com/DonaldMzima/Grid-Navigator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white"
            >
              <FaGithub className="mr-2 icon-lg" />
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NavigateDirections;
