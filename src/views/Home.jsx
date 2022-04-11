import styled from 'styled-components';
import Chat from '../components/Chat';
import ChatList from '../components/ChatList';
import Header from '../components/Header';
import Menu from '../components/Menu';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
box-sizing: border-box;
}`;

const Container = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr 4fr;
  grid-template-rows: 64px 1fr;
`;

const Home = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Menu />
        <ChatList />
        <Chat />
      </Container>
    </>
  );
};

export default Home;
