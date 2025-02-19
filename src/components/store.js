
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../components/products/cartslice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
