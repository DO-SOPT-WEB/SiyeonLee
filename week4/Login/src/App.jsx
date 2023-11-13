// import { useState } from "react";
import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/theme";
// import "./App.css";
import { ThemeProvider } from "styled-components";
import Router from "./components/Router";
import styled from "styled-components";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainContainer>
          <Router />
        </MainContainer>
      </ThemeProvider>
    </>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;
