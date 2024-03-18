'use client';

import { InsertCreditCardModal } from '@/components/modals/insert-credit-card-modal';
import { CheckoutInfo } from '@/components/product-info/checkout-info';
import { useHandleOpen } from '@/hooks/use-handle-open';
import { Product } from '@/types/products';
import { Box, Button, Typography, styled } from '@mui/material';

export const Puller = styled(Box)(() => ({
  width: 30,
  height: 6,
  backgroundColor: 'white',
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));
interface PayActionButtonProps {
  product: Product;
}

export const PayActionButton = ({ product }: PayActionButtonProps) => {
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
    <Box sx={{ width: '100%', height: '100%' }}>
      <Button variant="contained" fullWidth onClick={handleOpen}>
        Pay with credit card
      </Button>
      <InsertCreditCardModal
        open={open}
        handleClose={handleClose}
        processCheckout={processCheckout}
      />

      <CheckoutInfo
        openCheckout={openCheckout}
        toggleOpen={toggleOpen}
        product={product}
      />

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
  );
};
