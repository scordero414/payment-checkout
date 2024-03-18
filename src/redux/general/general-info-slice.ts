import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStore } from '@/redux/store';
import { sliceNamesConstants } from '@/constants/slice-names-constants';
import { GeneralInfoState } from '@/types/general-info';

const initialState: GeneralInfoState = {
  isLoading: false,
  alertMessage: '',
  isAlertActive: false,
  alertType: 'success',
};

export const generalInfoSlice = createSlice({
  name: sliceNamesConstants.generalInfoSlice,
  initialState,
  reducers: {
    resetLoadingModal: state => {
      state.isLoading = false;
    },
    setLoadingModal: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setAlertInfo: (
      state,
      action: PayloadAction<Omit<GeneralInfoState, 'isLoading'>>
    ) => {
      const { alertMessage, alertType, isAlertActive } = action.payload;
      state.alertMessage = alertMessage;
      state.alertType = alertType;
      state.isAlertActive = isAlertActive;
    },
    resetAlertInfo: state => {
      const { alertMessage, alertType, isAlertActive } = initialState;
      state.alertMessage = alertMessage;
      state.alertType = alertType;
      state.isAlertActive = isAlertActive;
    },
  },
});

export const {
  setLoadingModal,
  resetLoadingModal,
  setAlertInfo,
  resetAlertInfo,
} = generalInfoSlice.actions;

export const selectGeneralInfo = (state: AppStore): GeneralInfoState =>
  state[sliceNamesConstants.generalInfoSlice];

export default generalInfoSlice.reducer;
