import { createSlice } from '@reduxjs/toolkit';
import { HelloWorld } from '@/src/types/hello-world';
import { RootState } from '@/src/lib/store';

const initialState: HelloWorld = {
  value: '',
};

export const helloWorldSlice = createSlice({
  name: 'helloWorldSlice',
  initialState,
  reducers: {},
});

export const {} = helloWorldSlice.actions;

export const selectHelloWorld = (state: RootState): HelloWorld =>
  state.helloWorld;

export default helloWorldSlice.reducer;
