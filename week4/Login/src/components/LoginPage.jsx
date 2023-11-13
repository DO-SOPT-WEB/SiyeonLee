import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <LoginPageContainer>
      <Title>Login</Title>
      <InputContainer>
        <IndivInputWrapper>
          <InputTitle>ID</InputTitle>
          <Input placeholder="Enter ID Here"></Input>
        </IndivInputWrapper>
        <IndivInputWrapper>
          <InputTitle>PASSWORD</InputTitle>
          <Input placeholder="Enter Password Here"></Input>
        </IndivInputWrapper>
      </InputContainer>
      <ButtonContainer>
        <Button type="button" onClick={() => {}}>
          Login
        </Button>
        <Button
          type="button"
          onClick={() => {
            navigate(`/signup`);
          }}
          className="signup"
        >
          Sign Up
        </Button>
      </ButtonContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 3rem;
`;

const Button = styled.button`
  width: 30rem;
  height: 3rem;

  border-radius: 0.5rem;

  &.signup {
    background-color: ${({ theme }) => theme.colors.mid_green};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Input = styled.input`
  width: 15rem;
  height: 2.5rem;

  border: 1px solid ${({ theme }) => theme.colors.dark_green};
  border-radius: 0.3rem;
`;

const IndivInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 30rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  margin-top: 3rem;
`;

const InputTitle = styled.p`
  display: flex;
  justify-content: center;

  align-items: center ${({ theme }) => theme.fonts.subtitle};
`;

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 40rem;
  height: 40rem;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.beige};
`;

const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fonts.title};
`;
