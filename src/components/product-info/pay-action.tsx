'use client';

import { InsertCreditCardModal } from '@/components/modals/insert-credit-card-modal';
import { useHandleOpen } from '@/hooks/use-handle-open';
// import { persistor } from '@/redux/store';
import styled from '@emotion/styled';
import { Box, Button, Grid, SwipeableDrawer, Typography } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: 'white',
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

export const PayActionButton = () => {
  const { open, handleOpen, handleClose } = useHandleOpen();

  const {
    open: openCheckout,
    handleOpen: handleOpenCheckout,
    handleClose: handleCloseCheckout,
  } = useHandleOpen();

  const toggleOpen = () => {
    if (openCheckout) {
      handleCloseCheckout();
      return;
    }

    handleOpenCheckout();
  };

  const processCheckout = () => {
    handleClose();
    handleOpenCheckout();
  };

  return (
    // <PersistGate persistor={persistor}>
    <Box sx={{ width: '100%', height: '100%' }}>
      <Button variant="contained" fullWidth onClick={handleOpen}>
        Pay with credit card
      </Button>
      <InsertCreditCardModal
        open={open}
        handleClose={handleClose}
        processCheckout={processCheckout}
      />

      <SwipeableDrawer
        anchor={'bottom'}
        open={openCheckout}
        onClose={toggleOpen}
        onOpen={toggleOpen}>
        <Box
          onClick={toggleOpen}
          sx={{
            height: '50vh',
            textAlign: 'center',
          }}>
          <Box sx={{ backgroundColor: 'primary.main' }}>
            <Puller />
            <Typography sx={{ pb: 1, pt: 2.5, color: 'white' }}>
              Checkout
            </Typography>
          </Box>
          <Grid container>
            <Grid item></Grid>
          </Grid>
        </Box>
      </SwipeableDrawer>

      <Box
        onClick={toggleOpen}
        sx={{
          cursor: 'pointer',
          position: 'fixed',
          right: 0,
          left: 0,
          bottom: 0,
          backgroundColor: 'primary.main',
          textAlign: 'center',
        }}>
        <Puller />
        <Typography sx={{ pb: 1, mt: 2.5, color: 'white' }}>
          Checkout
        </Typography>
      </Box>
    </Box>
    // </PersistGate>
  );
};
