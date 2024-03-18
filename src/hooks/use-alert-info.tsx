import { setAlertInfo } from '@/redux/general/general-info-slice';
import { AlertColor } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useAlertInfo = (
  isActive: boolean,
  message: string,
  alertType: AlertColor = 'error'
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isActive) {
      dispatch(
        setAlertInfo({
          alertMessage: message,
          alertType: alertType,
          isAlertActive: isActive,
        })
      );
    }
  }, [isActive]);
};
