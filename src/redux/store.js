import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './questionReducer';

const store = configureStore({
  reducer: {
    question: questionReducer,
  },
});

export default store;