import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginBtnClick = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/members/sign-in`,
        {
          username: id,
          password: password,
        }
      );

      response && navigate(`/mypage/${response.data.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginPageContainer>
      <Title>Login</Title>
      <InputContainer>
        <IndivInputWrapper>
          <InputTitle>ID</InputTitle>
          <Input
            placeholder="Enter ID Here"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </IndivInputWrapper>
        <IndivInputWrapper>
          <InputTitle>PASSWORD</InputTitle>
          <Input
            placeholder="Enter Password Here"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </IndivInputWrapper>
      </InputContainer>
      <ButtonContainer>
        <Button type="button" onClick={handleLoginBtnClick}>
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  margin-top: 3rem;
`;

const IndivInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 30rem;
`;

const Input = styled.input`
  width: 15rem;
  height: 2.5rem;

  border: 1px solid ${({ theme }) => theme.colors.dark_green};
  border-radius: 0.3rem;
`;

const InputTitle = styled.p`
  display: flex;
  justify-content: center;

  align-items: center ${({ theme }) => theme.fonts.subtitle};
`;

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

  ${({ theme }) => theme.fonts.subtitle};

  &.signup {
    background-color: ${({ theme }) => theme.colors.mid_green};
    color: ${({ theme }) => theme.colors.white};
  }
`;
