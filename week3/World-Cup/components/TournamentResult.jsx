import styled from "styled-components";
import React from "react";

const TournamentResult = (tournamentResultProps) => {
  const {
    setTournamentStage,
    filterList,
    setFirstChoice,
    setSecondChoice,
    setThirdChoice,
  } = tournamentResultProps;

  const finalResult = filterList();

  return (
    <>
      <Title>Here's your random drink!</Title>
      <MenuBox>
        <MenuImage src={finalResult.img} alt={finalResult.name} />
        <MenuName>{finalResult.name}</MenuName>
        <BackBtn
          type="button"
          onClick={() => {
            setTournamentStage(0);
            setFirstChoice("");
            setSecondChoice("");
            setThirdChoice("");
          }}
        >
          Return
        </BackBtn>
      </MenuBox>
    </>
  );
};

export default TournamentResult;

const BackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 8rem;
  height: 2rem;

  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.navy};

  ${({ theme }) => theme.fonts.body_bold};

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40rem;
  height: 3rem;

  border-radius: 0.5rem;
  margin: 1.5rem 0;

  background-color: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.navy};

  user-select: none;

  ${({ theme }) => theme.fonts.subtitle};
`;

const MenuImage = styled.img`
  width: calc((100vw - 70rem));
  height: 20rem;

  border-radius: 0.5rem;
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20rem;
  height: 3rem;

  border-radius: 0.5rem;
  margin: 1rem 0;

  background-color: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.navy};

  user-select: none;

  ${({ theme }) => theme.fonts.subtitle};
`;
