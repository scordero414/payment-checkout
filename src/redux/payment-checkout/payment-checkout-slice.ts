import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStore } from '@/redux/store';
import { sliceNamesConstants } from '@/constants/slice-names-constants';
import { CreditCardData, PaymentCheckoutState } from '@/types/payment-checkout';
import { encryptData } from '@/utils/encryption';

const initialState: PaymentCheckoutState = {
  value: '',
};

export const paymentCheckoutSlice = createSlice({
  name: sliceNamesConstants.paymentCheckoutSlice,
  initialState,
  reducers: {
    setCreditCardInfo: (state, action: PayloadAction<CreditCardData>) => {
      state.value = encryptData(action.payload);
    },
  },
});

export const { setCreditCardInfo } = paymentCheckoutSlice.actions;

export const selectPaymentCheckout = (state: AppStore): PaymentCheckoutState =>
  state[sliceNamesConstants.paymentCheckoutSlice];

export default paymentCheckoutSlice.reducer;
