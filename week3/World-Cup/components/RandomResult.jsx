import styled from "styled-components";
import React, { useState, useEffect } from "react";
import DRINK_LIST from "../src/assets/data";

const RandomResult = ({ setShowResult }) => {
  const [time, setTime] = useState(3);

  useEffect(() => {
    time > 0 && setTimeout(() => setTime(time - 1), 1000);
  }, [time]);

  const randomPick = DRINK_LIST[Math.floor(Math.random() * DRINK_LIST.length)];

  const renderRandomDrink = () => {
    return (
      <>
        <Title>Here's your random drink!</Title>
        <MenuBox>
          <MenuImage src={randomPick.img} alt={randomPick.name} />
          <MenuName>{randomPick.name}</MenuName>
          <BackBtn
            type="button"
            onClick={() => {
              setShowResult(false);
            }}
          >
            Return
          </BackBtn>
        </MenuBox>
      </>
    );
  };
  return <div>{time ? <TimeBox>{time}</TimeBox> : renderRandomDrink()}</div>;
};

export default RandomResult;

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

const TimeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(100vh - 20rem);
  height: calc(100vh - 20rem);

  ${({ theme }) => theme.fonts.title};
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
