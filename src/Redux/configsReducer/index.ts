import { createSlice } from '@reduxjs/toolkit';

interface ConfigsReducer {
  loading: boolean;
}
const slice = createSlice({
  name: 'configs',
  initialState: {
    loading: false,
  } as ConfigsReducer,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
  },
});
export default slice.reducer;

export const { stopLoading, startLoading } = slice.actions;
