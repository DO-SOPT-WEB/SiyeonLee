import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <SignUpPageContainer>
      <Title>Sign Up</Title>
      <InputContainer>
        <IndivInputWrapper>
          <InputTitle>ID</InputTitle>
          <IdInputWrapper>
            <Input placeholder="Enter ID Here" className="id" />
            <Button className="check" type="button">
              Check
            </Button>
          </IdInputWrapper>
        </IndivInputWrapper>
        <IndivInputWrapper>
          <InputTitle>PASSWORD</InputTitle>
          <Input placeholder="Enter Password Here" />
        </IndivInputWrapper>
        <IndivInputWrapper>
          <InputTitle>CONFIRM P/W</InputTitle>
          <Input placeholder="Confirm Password Here" />
        </IndivInputWrapper>
        <IndivInputWrapper>
          <InputTitle>USERNAME</InputTitle>
          <Input placeholder="Enter Username Here" />
        </IndivInputWrapper>
      </InputContainer>
      <Button
        type="button"
        onClick={() => {
          navigate(`/login`);
        }}
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

  &.check {
    width: 4rem;
    height: 2.5rem;
    background-color: ${({ theme }) => theme.colors.mid_green};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.small_button};
  }
`;
