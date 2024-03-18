import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { sliceNamesConstants } from '@/constants/slice-names-constants';
import { PaymentCheckoutState } from '@/types/payment-checkout';

const initialState: PaymentCheckoutState = {
  value: '',
};

export const paymentCheckoutSlice = createSlice({
  name: sliceNamesConstants.paymentCheckoutSlice,
  initialState,
  reducers: {},
});

export const {} = paymentCheckoutSlice.actions;

export const selectPaymentCheckout = (state: RootState): PaymentCheckoutState =>
  state[sliceNamesConstants.paymentCheckoutSlice];

export default paymentCheckoutSlice.reducer;
