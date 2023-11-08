import styled from "styled-components";
import React, { useState } from "react";
import FirstStage from "./FirstStage";
import SecondStage from "./SecondStage";
import ThirdStage from "./ThirdStage";
//
const Tournament = () => {
  const [tournamentStage, setTournamentStage] = useState(0);

  const renderTournament = () => {
    switch (tournamentStage) {
      case 0:
        return (
          <>
            <HomeTitle>How would you like to choose your drink?</HomeTitle>
            <TournamentBox>Tournament!</TournamentBox>
            <StartBtn
              type="button"
              onClick={() => {
                setTournamentStage(1);
              }}
            >
              Start!
            </StartBtn>
          </>
        );
      case 1:
        return (
          <FirstStage
            tournamentStage={tournamentStage}
            setTournamentStage={setTournamentStage}
          />
        );
        break;
      case 2:
        return (
          <SecondStage
            tournamentStage={tournamentStage}
            setTournamentStage={setTournamentStage}
          />
        );
      case 3:
        return (
          <ThirdStage
            tournamentStage={tournamentStage}
            setTournamentStage={setTournamentStage}
          />
        );
      // case 4:
      //return ();
    }
  };

  return <TournamentContainer>{renderTournament()}</TournamentContainer>;
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
