import { RootState } from '../store/index';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import NewChat from './NewChat';
import ChatOption from './ChatOption';
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f5f4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Menu = () => {
  const { tags } = useSelector((state: RootState) => state.menu);
  return (
    <Container>
      <NewChat />
      <ChatOption name='Privados' check={false} />
      <ChatOption name='Todos mis chats' check={false} />
      <ChatOption name='Todos los usuarios' check={false} />
      <p>Grupos:</p>
      {tags.map((tag) => (
        <ChatOption key={tag} name={tag} tag={tag} check={true} />
      ))}
    </Container>
  );
};

export default Menu;
