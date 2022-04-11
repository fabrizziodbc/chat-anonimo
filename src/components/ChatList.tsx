import { RootState } from '../store/index';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ChatPreview from './ChatPreview';
import { useEffect } from 'react';
import { setChatList } from '../store/slices/chatList';
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eef1f2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const ChatList = () => {
  const { currentOption, currentTag } = useSelector(
    (state: RootState) => state.menu,
  );
  const { list: chatList } = useSelector((state: RootState) => state.chatList);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('storage', () => {
      // When local storage changes, dump the list to
      // the console.
      dispatch(
        setChatList(JSON.parse(localStorage.getItem('chatList') as string)),
      );
    });
    if (localStorage.getItem('chatList')) {
      const saved = localStorage.getItem('chatList');
      const initialValue = JSON.parse(saved as string);
      dispatch(setChatList(initialValue));
    } else {
      dispatch(
        setChatList([
          {
            name: '5 vs 5',
            id: '53c78435-93d5-4573-b40e-a79d9c698ddb',
            chat: [
              {
                autor: 'Pedro',
                autorId: '53c78435-93d5-4573-b40e-a79d9c697ddb',
                msg: 'Este es un mensaje1',
              },
              {
                autor: 'Pedro',
                autorId: '53c78435-93d5-4573-b40e-a79d9c692ddb',
                msg: 'Este es un mensaje2',
              },
            ],
            type: 'group',
            tag: 'Gaming',
          },
          {
            name: 'Juanito',
            id: 'f431bc6f-3e3e-4046-bc57-8724af648478',
            chat: [
              {
                autor: 'Juanito',
                autorId: '53c78435-93d5-4573-b40e-a79d9c498ddb',
                msg: 'Este es un mensaje3',
              },
            ],
            type: 'Privados',
          },
          {
            name: 'Basquet CIENTEC',
            id: '9a321395-6ba9-4fce-96a3-3bd26462c9ad',
            chat: [
              {
                autor: 'Randomname',
                autorId: '53c78435-93d5-4573-b40e-a72d9c698ddb',
                msg: 'Este es un mensaje4',
              },
            ],
            type: 'group',
            tag: 'Basquet',
          },
        ]),
      );
    }
  }, []);

  return (
    <Container>
      {chatList.length &&
        chatList
          .filter((chat) =>
            currentOption === 'Todos mis chats'
              ? true
              : chat.type === 'group'
              ? chat.tag === currentTag
              : chat.type === currentOption,
          )
          .map((chat) => (
            <ChatPreview
              key={chat.name}
              name={chat.name}
              chat={chat.chat}
              id={chat.id}
              type={chat.type}
              tag={chat.type === 'group' ? chat.tag : ''}
            />
          ))}
    </Container>
  );
};

export default ChatList;
