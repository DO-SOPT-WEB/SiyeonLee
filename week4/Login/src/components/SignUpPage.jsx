import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [name, setName] = useState("");
  const [isButtonAble, setIsButtonAble] = useState(false);

  useEffect(() => {
    const allowButtonClick = () => {
      if (id && pw && confirmPw && name && pw === confirmPw) {
        setIsButtonAble(true);
      } else {
        setIsButtonAble(false);
      }
    };

    allowButtonClick();
  }, [id, pw, confirmPw, name]);

  const handleSignUpBtnClick = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/members`,
        {
          username: id,
          nickname: name,
          password: pw,
        }
      );
      response && navigate(`/login`);
    } catch (err) {
      alert("fill in the blanks plz");
      console.log(err);
    }
  };

  return (
    <SignUpPageContainer>
      <Title>Sign Up</Title>
      <InputContainer>
        <IndivInputWrapper>
          <InputTitle>ID</InputTitle>
          <IdInputWrapper>
            <Input
              placeholder="Enter ID Here"
              className="id"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <Button className="check" type="button">
              Check
            </Button>
          </IdInputWrapper>
        </IndivInputWrapper>
        <IndivInputWrapper>
          <InputTitle>PASSWORD</InputTitle>
          <Input
            placeholder="Enter Password Here"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
            }}
          />
        </IndivInputWrapper>
        <IndivInputWrapper>
          <InputTitle>CONFIRM P/W</InputTitle>
          <Input
            placeholder="Confirm Password Here"
            value={confirmPw}
            onChange={(e) => {
              setConfirmPw(e.target.value);
            }}
          />
        </IndivInputWrapper>
        <IndivInputWrapper>
          <InputTitle>USERNAME</InputTitle>
          <Input
            placeholder="Enter Username Here"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </IndivInputWrapper>
      </InputContainer>
      <Button
        type="button"
        disabled={!isButtonAble}
        onClick={handleSignUpBtnClick}
      >
        Sign Me Up!
      </Button>
    </SignUpPageContainer>
  );
};

export default SignUpPage;

const SignUpPageContainer = styled.div`
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
  margin-bottom: 3rem;
`;

const IndivInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 30rem;
`;

const InputTitle = styled.p`
  display: flex;
  justify-content: center;

  align-items: center ${({ theme }) => theme.fonts.subtitle};
`;

const IdInputWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Input = styled.input`
  width: 15rem;
  height: 2.5rem;

  border: 1px solid ${({ theme }) => theme.colors.dark_green};
  border-radius: 0.3rem;

  &.id {
    width: 10rem;
  }
`;

const Button = styled.button`
  width: 30rem;
  height: 3rem;

  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.colors.mid_green};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.subtitle};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled_button};
    color: ${({ theme }) => theme.colors.white};

    cursor: not-allowed;
  }

  &.check {
    width: 4rem;
    height: 2.5rem;
    background-color: ${({ theme }) => theme.colors.mid_green};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.small_button};
  }
`;
