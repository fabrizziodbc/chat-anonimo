import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type listType = {
  name: string;
  id: string;
  chat: { autor: string; autorId: string; msg: string }[];
  type: string;
  tag?: string;
}[];
type deleteType = {
  id: string | null;
  msg: string;
};
type newMessagePayloadType = {
  id: string;
  chat: { autor: string; autorId: string; msg: string };
};
export interface UserState {
  currentChatId: string | null;
  list: listType;
}

const initialState: UserState = {
  currentChatId: null,
  list: [],
};

export const counterSlice = createSlice({
  name: 'chatList',
  initialState,
  reducers: {
    changeCurrentChat: (state, action: PayloadAction<string>) => {
      state.currentChatId = action.payload;
    },
    setChatList: (state, action: PayloadAction<listType>) => {
      state.list = action.payload;
      localStorage.setItem('chatList', JSON.stringify(action.payload));
    },
    deleteMessage: (state, action: PayloadAction<deleteType>) => {
      const currentChat = JSON.parse(JSON.stringify(state.list)).find(
        (chat: any) => chat.id === action.payload.id,
      );
      currentChat.chat = currentChat.chat.filter(
        (msg: { autor: string; autorId: string; msg: string }) =>
          msg.msg !== action.payload.msg,
      );
      state.list = [
        currentChat,
        ...state.list.filter((chat) => chat.id !== action.payload.id),
      ];
      localStorage.setItem('chatList', JSON.stringify(action.payload));
    },
    sendMessage: (state, action: PayloadAction<newMessagePayloadType>) => {
      const currentChat = JSON.parse(JSON.stringify(state.list)).find(
        (chat: any) => chat.id === action.payload.id,
      );
      currentChat?.chat.push(action.payload.chat);
      state.list = [
        currentChat,
        ...state.list.filter((chat) => chat.id !== action.payload.id),
      ];
      localStorage.setItem('chatList', JSON.stringify(state.list));
    },
  },
});

export const { changeCurrentChat, setChatList, sendMessage, deleteMessage } =
  counterSlice.actions;

export default counterSlice.reducer;
