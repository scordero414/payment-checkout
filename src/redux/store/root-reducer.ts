import { combineReducers } from '@reduxjs/toolkit';
import { sliceNamesConstants } from '@/constants/slice-names-constants';
import paymentCheckoutReducer from '@/redux/payment-checkout/payment-checkout-slice';
import generalInfoReducer from '@/redux/general/general-info-slice';
import { productsApi } from '@/redux/products/products-api';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const paymentCheckoutConfig = {
  key: sliceNamesConstants.paymentCheckoutSlice,
  storage,
};

export const rootReducer = combineReducers({
  [sliceNamesConstants.paymentCheckoutSlice]: persistReducer(
    paymentCheckoutConfig,
    paymentCheckoutReducer
  ),
  [sliceNamesConstants.generalInfoSlice]: generalInfoReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});
