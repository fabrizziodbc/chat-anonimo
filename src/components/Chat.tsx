import { useState } from 'react';
import { RootState } from '../store/index';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Message from './Message';
import { sendMessage } from '../store/slices/chatList';
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ChatCanvas = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;
const ChatInput = styled.div`
  width: 100%;
  height: 52px;
  background-color: #fffefe;
  padding: 16px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  input {
    width: 100%;
    height: 32px;
    border: none;
    padding: 0 8px;
  }
  button {
    color: #fffefe;
    background-color: #5359d9;
    padding: 4px 8px;
    border: none;
    &:hover {
      background-color: #999a9b;
      color: black;
    }
    &:active {
      color: #fffefe;
      background-color: #5d59d8;
    }
  }
`;
const ChatName = styled.div`
  height: 60px;
  width: 90%;
  background-color: #fffefe;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
`;

const Chat = () => {
  const [newMessage, setnewMessage] = useState('');
  const { id, name } = useSelector((state: RootState) => state.user);
  const { list: chatList, currentChatId } = useSelector(
    (state: RootState) => state.chatList,
  );
  const dispatch = useDispatch();
  const newMessageHandler = () => {
    dispatch(
      sendMessage({
        id: currentChatId as string,
        chat: { autor: name, autorId: id as string, msg: newMessage },
      }),
    );
    setnewMessage('');
  };
  return (
    <Container>
      <ChatName>
        {chatList.length &&
          chatList.find((chat) => chat.id === currentChatId)?.name}
      </ChatName>
      <ChatCanvas>
        {chatList.length > 1 &&
          chatList
            .find((chat) => chat.id === currentChatId)
            ?.chat.map((e) => (
              <Message
                key={e.msg}
                msg={e.msg}
                autor={e.autor}
                autorId={e.autorId}
                mine={e.autorId === id}
              />
            ))}
      </ChatCanvas>
      <ChatInput>
        <input
          placeholder='Escribe tu mensaje aquí'
          value={newMessage}
          onChange={(e) => setnewMessage(e.target.value)}
        />
        <button onClick={newMessageHandler}>Enviar</button>
      </ChatInput>
    </Container>
  );
};

export default Chat;
