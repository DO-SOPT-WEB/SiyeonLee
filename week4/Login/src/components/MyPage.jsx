import styled from "styled-components";
import UserIcon from "../../public/icons/UserIcon.svg";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();
  return (
    <MyPageContainer>
      <Title>My Page</Title>
      <ProfileWrapper>
        <UserProfile src={UserIcon} />
        <UserInfoWrapper>
          <UserInfo>ID:</UserInfo>
          <UserInfo>PW:</UserInfo>
        </UserInfoWrapper>
      </ProfileWrapper>
      <Button
        type="button"
        onClick={() => {
          navigate(`/login`);
        }}
      >
        Logout
      </Button>
    </MyPageContainer>
  );
};

export default MyPage;

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 30rem;
  height: 30rem;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.beige};
`;

const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fonts.title};
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;

  margin-top: 3rem;
`;

const UserProfile = styled.img`
  width: 5rem;
  height: 5rem;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;

  width: 15rem;
  height: 2.5rem;

  padding: 0.5rem;

  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.colors.light_green};
  ${({ theme }) => theme.fonts.subtitle};
`;

const Button = styled.button`
  width: 23rem;
  height: 3rem;

  margin-top: 3rem;

  border-radius: 0.5rem;

  ${({ theme }) => theme.fonts.subtitle};
`;
