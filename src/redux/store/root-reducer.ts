import { combineSlices } from '@reduxjs/toolkit';
import { paymentCheckoutApi } from '@/src/redux/payment-checkout/payment-checkout-api';
import { sliceNamesConstants } from '@/src/constants/slice-names-constants';
import paymentCheckoutReducer from '@/src/redux/payment-checkout/payment-checkout-slice';
import { productsApi } from '@/src/redux/products/products-api';

export const rootReducer = combineSlices({
  [sliceNamesConstants.paymentCheckoutSlice]: paymentCheckoutReducer,
  [paymentCheckoutApi.reducerPath]: paymentCheckoutApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
});
