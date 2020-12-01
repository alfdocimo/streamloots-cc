import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../features/cards/cardsSlice';

export default configureStore({
  reducer: {
    cards: cardsReducer,
  },
});
