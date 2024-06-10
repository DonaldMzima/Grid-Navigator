/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { navigate } from "@/utils/core/direction";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  position: relative;
  flex-grow: 1;
`;

const HeaderOverlay = styled.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderContent = styled.div`
  margin: 0 0.5rem;
  text-align: center;
  space-y: 8px;
`;

const Title = styled.h1`
  color: #fff;
  font-weight: 800;
  font-size: 2.5rem;
  @media (min-width: 640px) {
    font-size: 3rem;
  }
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled.h2`
  color: #e5e5e5;
  font-weight: 800;
  font-size: 2rem;
  line-height: 1.2;
  @media (min-width: 640px) {
    font-size: 2.5rem;
  }
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Form = styled.form`
  space-y: 10rem;
`;

const InputWrapper = styled.p`
  space-y: 8px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #cbd5e0;
  background: transparent;
  padding: 0.75rem;
  font-family: sans-serif;
  font-size: 0.875rem;
  color: #e5e5e5;
  outline: none;
  transition: all 0.3s;
  &::placeholder {
    color: #a0aec0;
  }
  &:focus {
    border: 2px solid #d53f8c;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #cbd5e0;
  margin: 1rem 0;
`;

const Button = styled.button`
  width: 100%;
  outline: none;
  color: #fff;
  font-size: 0.875rem;
  padding: 0.625rem 1.25rem;
  border-radius: 0.375rem;
  background-color: #805ad5;
  &:hover {
    background-color: #6b46c1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const Footer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 1rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const GitHubLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
`;

const Icon = styled(FaGithub)`
  margin-right: 0.5rem;
`;

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
    <Container>
      <Header id="up">
        <HeaderOverlay>
          <HeaderContent>
            <div>
              <Title>
                <span style={{ color: "#fff" }}>One </span> Digital Media
              </Title>
              <Subtitle>Programming Challenge</Subtitle>
            </div>
            <div className="inline-flex"></div>
            <Form onSubmit={handleSubmit}>
              <InputWrapper>
                <label htmlFor="instructions">
                  Enter your instructions below (e.g. "L5, R10, L3"):
                </label>
                <Input
                  type="text"
                  id="instructions"
                  name="instructions"
                  value={instructions}
                  onChange={handleInputChange}
                  placeholder="Enter instructions separated by comma (e.g., L5, R10, L3)"
                />
              </InputWrapper>
              <Divider />
              <Button type="submit">Calculate Distance</Button>
              {totalDistance > 0 && (
                <p>The total number of blocks away is: {totalDistance}</p>
              )}
            </Form>
          </HeaderContent>
        </HeaderOverlay>
      </Header>
      <Footer>
        <FooterContent>
          <p className="mt-2">
            © {new Date().getFullYear()} Developed by Donald Mzima{" "}
            <GitHubLink
              href="https://github.com/DonaldMzima/Grid-Navigator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="icon-lg" />
            </GitHubLink>
          </p>
        </FooterContent>
      </Footer>
    </Container>
  );
};

export default NavigateDirections;
