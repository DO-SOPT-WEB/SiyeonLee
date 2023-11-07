import styled from "styled-components";
import React from "react";

const Tournament = () => {
  return (
    <TournamentContainer>
      <HomeTitle>How would you like to choose your drink?</HomeTitle>
      <TournamentBox>Tournament!</TournamentBox>
      <StartBtn>Start!</StartBtn>
    </TournamentContainer>
  );
};

export default Tournament;

const TournamentContainer = styled.section`
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

const TournamentBox = styled.div`
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
