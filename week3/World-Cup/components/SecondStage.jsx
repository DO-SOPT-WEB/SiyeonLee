import styled from "styled-components";

import React from "react";

const SecondStage = (SecondStageProps) => {
  const { tournamentStage, setTournamentStage, secondChoice, setSecondChoice } =
    SecondStageProps;

  return (
    <SecondStageContainer>
      <StageTitle>Random Choice</StageTitle>
      <ChoiceBox>
        <Choice
          type="button"
          value="Sweet"
          onClick={() => {
            setSecondChoice("sweet");
          }}
          className={secondChoice === "sweet" && "selected"}
        >
          Sweet
        </Choice>
        <Choice
          type="button"
          value="Non-Sweet"
          onClick={() => {
            setSecondChoice("non-sweet");
          }}
          className={secondChoice === "non-sweet" && "selected"}
        >
          Non-Sweet
        </Choice>
        <Choice
          type="button"
          value="dairy"
          onClick={() => {
            setSecondChoice("dairy");
          }}
          className={secondChoice === "dairy" && "selected"}
        >
          Dairy
        </Choice>
      </ChoiceBox>
      <ButtonBox>
        <Button
          type="button"
          onClick={() => {
            setTournamentStage(tournamentStage - 1);
          }}
        >
          Previous
        </Button>
        {secondChoice === "" ? (
          <Button
            type="button"
            onClick={() => {
              setTournamentStage(tournamentStage + 1);
            }}
            disabled
          >
            Next
          </Button>
        ) : (
          <Button
            type="button"
            onClick={() => {
              setTournamentStage(tournamentStage + 1);
            }}
          >
            Next
          </Button>
        )}
      </ButtonBox>
    </SecondStageContainer>
  );
};

export default SecondStage;

const SecondStageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: calc(100vw - 20rem);
  height: calc(100vh - 20rem);

  border-radius: 2rem;

  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
`;

const StageTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40rem;
  height: 3rem;

  border-radius: 0.5rem;
  margin: 3rem 0;

  background-color: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.navy};

  ${({ theme }) => theme.fonts.subtitle};
`;

const ChoiceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`;

const Choice = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc((100vw - 60rem) / 2);
  height: 20rem;

  background-color: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.navy};

  border: none;
  border-radius: 1rem;

  ${({ theme }) => theme.fonts.body_bold};

  cursor: pointer;

  &:hover,
  &.selected {
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const ButtonBox = styled.span`
  display: flex;
  gap: 5rem;
`;

const Button = styled.button`
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

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled_button};
    color: ${({ theme }) => theme.colors.navy};
    cursor: not-allowed;
  }
`;
