import { combineReducers } from '@reduxjs/toolkit';
import { paymentCheckoutApi } from '@/redux/payment-checkout/payment-checkout-api';
import { sliceNamesConstants } from '@/constants/slice-names-constants';
import paymentCheckoutReducer from '@/redux/payment-checkout/payment-checkout-slice';
import { productsApi } from '@/redux/products/products-api';
import { persistReducer } from 'redux-persist';
import storage from '@/utils/storage';

const paymentCheckoutConfig = {
  key: sliceNamesConstants.paymentCheckoutSlice,
  storage,
};

export const rootReducer = combineReducers({
  [sliceNamesConstants.paymentCheckoutSlice]: persistReducer(
    paymentCheckoutConfig,
    paymentCheckoutReducer
  ),
  [paymentCheckoutApi.reducerPath]: paymentCheckoutApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
});
