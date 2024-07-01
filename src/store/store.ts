import {configureStore} from '@reduxjs/toolkit';
import busReducer from './slices/busSlice';
import tabBarReducer from './slices/tabBarSlice';

export const store = configureStore({
  reducer: {
    bus: busReducer,
    tabBar: tabBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
