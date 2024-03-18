import { combineSlices } from '@reduxjs/toolkit';
import { paymentCheckoutApi } from '@/redux/payment-checkout/payment-checkout-api';
import { sliceNamesConstants } from '@/constants/slice-names-constants';
import paymentCheckoutReducer from '@/redux/payment-checkout/payment-checkout-slice';
import { productsApi } from '@/redux/products/products-api';

export const rootReducer = combineSlices({
  [sliceNamesConstants.paymentCheckoutSlice]: paymentCheckoutReducer,
  [paymentCheckoutApi.reducerPath]: paymentCheckoutApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
});
