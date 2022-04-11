import styled from 'styled-components';
import CurrentName from './CurrentName';
import SearchBar from './SearchBar';
const Container = styled.div`
  width: 100%;
  height: 100%;
  grid-column-start: span 3;
  background-color: #fefffe;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.p`
  padding-left: 32px;
  font-size: 24px;
  font-weight: bold;
  color: #4d5082;
  justify-self: flex-start;
`;
const ButtonsContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Header = () => {
  return (
    <Container>
      <Logo>My-chat</Logo>
      <ButtonsContainer>
        <SearchBar />
        <CurrentName />
      </ButtonsContainer>
    </Container>
  );
};

export default Header;
