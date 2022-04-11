import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  currentOption: string;
  currentTag: string;
  tags: string[];
}

const initialState: UserState = {
  currentOption: 'Todos mis chats',
  currentTag: '',
  tags: ['Gaming', 'Estudio', 'Basquet', 'Karaoke'],
};

export const counterSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    changeOption: (state, action: PayloadAction<any>) => {
      state.currentOption = action.payload.option;
      if (action.payload.tag) {
        state.currentTag = action.payload.tag;
      }
    },
    /*  changeType: (state, action: PayloadAction<'group' | 'private'>) => {
      state.currentOption = action.payload;
    }, */
  },
});

export const { changeOption } = counterSlice.actions;

export default counterSlice.reducer;
