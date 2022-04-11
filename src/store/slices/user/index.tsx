import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export interface UserState {
  name: string;
  id: string;
}

const initialState: UserState = {
  name: 'RandomName',
  id: uuid(),
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { changeName } = counterSlice.actions;

export default counterSlice.reducer;
