import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface BusState {
  busId: null | string;
}
const initialState: BusState = {
  busId: null,
};

export const busSlice = createSlice({
  name: 'bus',
  initialState,
  reducers: {
    setBus: (state, action: PayloadAction<string>) => {
      state.busId = action.payload;
    },
  },
});

export const {setBus} = busSlice.actions;
export const selectBus = (state: RootState) => state.bus.busId;
export default busSlice.reducer;
