import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import {removeItem, updateQuantity} from 'CartSlice.jsx'

 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store