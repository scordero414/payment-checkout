'use client';

import { AlertInfo } from '@/components/common/alert-info';
import { LoadingModal } from '@/components/modals/loading-modal';
import {
  resetAlertInfo,
  selectGeneralInfo,
} from '@/redux/general/general-info-slice';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Template({ children }: { children: ReactNode }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoading, isAlertActive, alertMessage, alertType } =
    useSelector(selectGeneralInfo);

  const onCloseSnackbar = (
    _?: Event | React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(resetAlertInfo());
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" component="nav">
          <Toolbar>
            <Typography
              onClick={() => {
                router.push('/');
              }}
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: 'monospace',
                fontSize: '1.2rem',
                letterSpacing: '0.2em',
              }}>
              CHECKOUT PAYMENT
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
      {isLoading ? <LoadingModal /> : null}
      <AlertInfo
        title={alertMessage}
        open={isAlertActive}
        alertType={alertType}
        onClose={onCloseSnackbar}
      />
    </>
  );
}
