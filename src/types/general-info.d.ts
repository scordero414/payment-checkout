import { AlertColor } from '@mui/material';

export interface GeneralInfoState {
  isLoading: boolean;
  alertMessage: string;
  isAlertActive: boolean;
  alertType: AlertColor;
}
