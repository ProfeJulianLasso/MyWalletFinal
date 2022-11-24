import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from '../slices/AuthSlice';
import MessageReducer from '../slices/MessageSlice';

export const ConfigStorage = configureStore({
  reducer: {
    message: MessageReducer,
    auth: AuthReducer,
  },
});
