import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  products: [];
}

const initialState: CounterState = {
  products: [],
};

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
    // use PayloadAction
  },
});

export const {} = storeSlice.actions;

export default storeSlice.reducer;
