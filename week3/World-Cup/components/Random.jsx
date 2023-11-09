import styled from "styled-components";
import React, { useState } from "react";
import RandomResult from "./RandomResult";

const Random = () => {
  const [showResult, setShowResult] = useState(false);

  const renderRandom = () => {
    return showResult ? (
      <RandomResult />
    ) : (
      <>
        <HomeTitle>How would you like to choose your drink?</HomeTitle>
        <RandomBox>Random!</RandomBox>
        <StartBtn
          type="button"
          onClick={() => {
            setShowResult(true);
          }}
        >
          Start!
        </StartBtn>
      </>
    );
  };

  return <RandomContainer>{renderRandom()}</RandomContainer>;
};

export default Random;

const RandomContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: calc(100vw - 20rem);
  height: calc(100vh - 20rem);

  border-radius: 2rem;

  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
`;

const HomeTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40rem;
  height: 3rem;

  border-radius: 0.5rem;
  margin: 3rem 0;

  background-color: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.navy};

  user-select: none;

  ${({ theme }) => theme.fonts.subtitle};
`;

const RandomBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc((100vw - 60rem));
  height: 20rem;

  background-color: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.navy};

  border-radius: 1rem;

  user-select: none;

  ${({ theme }) => theme.fonts.body_bold};
`;

const StartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 8rem;
  height: 2rem;

  margin-top: 2rem;

  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.navy};

  ${({ theme }) => theme.fonts.body_bold};

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
  }
`;
