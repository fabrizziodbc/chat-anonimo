import { RootState } from '../store/index';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteMessage } from '../store/slices/chatList';
const Incoming = styled.div`
  background-color: #fffffe;
  color: #b2b3b4;
  width: 80%;
  min-height: 32px;
  padding: 16px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 12px;
  border-bottom-left-radius: 0;
  align-self: center;
  p:first-child {
    font-weight: bold;
    height: 2px;
  }
  position: relative;
  span {
    position: absolute;
    color: black;
    right: -25px;
  }
`;
const Sent = styled(Incoming)`
  background-color: #4e59df;
  color: #fcfcfd;
  border-radius: 12px;
  border-bottom-right-radius: 0;
  align-self: flex-end;
  span {
    position: absolute;
    color: black;
    left: -25px;
  }
`;
interface MessageTypes {
  msg: string;
  mine: boolean;
  autor: string;
  autorId: string;
}
const Message = ({ msg, mine, autor, autorId }: MessageTypes) => {
  const { currentChatId } = useSelector((state: RootState) => state.chatList);
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteMessage({ id: currentChatId, msg }));
  };
  return (
    <>
      {mine ? (
        <>
          <Sent>
            <span onClick={deleteHandler}>❌</span>
            {msg}
          </Sent>
        </>
      ) : (
        <Incoming>
          <span onClick={deleteHandler}>❌</span>
          <p>{autor}</p>
          <p>{msg}</p>
        </Incoming>
      )}
    </>
  );
};

export default Message;
