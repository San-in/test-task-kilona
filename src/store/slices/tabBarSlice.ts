import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface TabBarState {
  visible: boolean;
}
const initialState: TabBarState = {
  visible: false,
};

export const tabBarSlice = createSlice({
  name: 'tabBar',
  initialState,
  reducers: {
    setTabBatStatus: (state, action: PayloadAction<boolean>) => {
      state.visible = action.payload;
    },
  },
});

export const {setTabBatStatus} = tabBarSlice.actions;
export const selectTabBar = (state: RootState) => state.tabBar.visible;
export default tabBarSlice.reducer;
