import { useReducer } from "react";
import styled from "styled-components";
import Random from "../components/Random";
import Tournament from "../components/Tournament";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_STAGE:
      return { currentStage: action.payload };
    case RESET_STAGE:
      return { currentStage: "" };
    default:
      throw new Error();
  }
};
const initialState = { currentStage: "" };
const SET_STAGE = "SET_STAGE";
const RESET_STAGE = "RESET_STAGE";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const renderOption = () => {
    switch (state.currentStage) {
      case "random":
        return <Random />;
      case "tournament":
        return (
          <Tournament
            setCurrentStage={(stage) =>
              dispatch({ type: SET_STAGE, payload: stage })
            }
          />
        );
      default:
        return (
          <Home>
            <HomeTitle>How would you like to choose your drink?</HomeTitle>
            <ChoiceBox>
              <ChooseBox
                type="button"
                onClick={() => {
                  dispatch({ type: SET_STAGE, payload: "random" });
                }}
              >
                Random!
              </ChooseBox>
              <ChooseBox
                type="button"
                onClick={() => {
                  dispatch({ type: SET_STAGE, payload: "tournament" });
                }}
              >
                Tournament!
              </ChooseBox>
            </ChoiceBox>
          </Home>
        );
    }
  };

  const renderResetBtn = () => {
    if (state.currentStage !== "") {
      return (
        <ResetBtn
          type="button"
          onClick={() => {
            dispatch({ type: RESET_STAGE });
          }}
        >
          Start Over
        </ResetBtn>
      );
    }
  };

  return (
    <>
      <Header>Would You Like Something to Drink?</Header>
      <Main>
        {renderOption()}
        {renderResetBtn()}
      </Main>
    </>
  );
}

export default App;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 10rem;

  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.navy};

  user-select: none;

  ${({ theme }) => theme.fonts.title};
`;

const ResetBtn = styled.button`
  position: fixed;
  top: 2.5rem;
  right: 2.5rem;

  width: 4.5rem;
  height: 4.5rem;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.navy};

  ${({ theme }) => theme.fonts.body_bold};

  &:hover {
    background-color: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.white};
  }
`;
const Main = styled.main`
  display: flex;
  justify-content: center;

  padding: 5rem;
`;

const Home = styled.section`
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

  ${({ theme }) => theme.fonts.subtitle};
`;

const ChoiceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`;

const ChooseBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc((100vw - 60rem) / 2);
  height: 20rem;

  background-color: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.navy};

  border-radius: 1rem;

  ${({ theme }) => theme.fonts.body_bold};

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
  }
`;
