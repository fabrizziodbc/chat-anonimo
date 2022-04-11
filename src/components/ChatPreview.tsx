import { RootState } from '../store/index';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changeCurrentChat } from '../store/slices/chatList';

const Container = styled.div`
  width: 100%;
  height: 180px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #fefffe;
    border-right: solid 2px #5d59d8;
  }
  &:active {
    background-color: #fefffe;
    border-right: solid 2px #5d59d8;
  }
`;
const ContainerSelected = styled(Container)`
  background-color: #fefffe;
  border-right: solid 2px #5d59d8;
`;
const Title = styled.p`
  height: 18px;
  font-weight: bold;
  font-size: 18px;
`;
const Message = styled.p`
  height: 100%;
  width: 100%;
  font-size: 16px;
  text-align: center;
`;
interface ChatInterface {
  name: string;
  chat: { autor: string; msg: string }[];
  id: string;
  type: string;
  tag?: string;
}
const ChatPreview = ({ name, chat, type, tag, id }: ChatInterface) => {
  const { currentChatId } = useSelector((state: RootState) => state.chatList);
  const dispatch = useDispatch();
  const changeCurrentChatHandler = () => {
    dispatch(changeCurrentChat(id));
  };
  return chat && currentChatId === id ? (
    <ContainerSelected onClick={changeCurrentChatHandler}>
      <Title>{name}</Title>
      <Message>{chat[chat.length - 1]?.msg}</Message>
    </ContainerSelected>
  ) : (
    <Container onClick={changeCurrentChatHandler}>
      <Title>{name}</Title>
      <Message>{chat[chat.length - 1]?.msg}</Message>
    </Container>
  );
};

export default ChatPreview;
