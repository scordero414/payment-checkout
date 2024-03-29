import { Puller } from '@/components/product-info/pay-action';
import { useAlertInfo } from '@/hooks/use-alert-info';
import { useIsLoadingModal } from '@/hooks/use-loading-modal';
import { selectPaymentCheckout } from '@/redux/payment-checkout/payment-checkout-slice';
import {
  useProcessBadPaymentMutation,
  useProcessPaymentMutation,
} from '@/redux/products/products-api';
import { CreditCardData } from '@/types/payment-checkout';
import { Product } from '@/types/products';
import { decryptData } from '@/utils/encryption';
import {
  Box,
  Button,
  Grid,
  Stack,
  SwipeableDrawer,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

interface CheckoutInfoProps {
  openCheckout: boolean;
  toggleOpen: () => void;
  product: Product;
}

export const CheckoutInfo = ({
  openCheckout,
  toggleOpen,
  product,
}: CheckoutInfoProps) => {
  const { value } = useSelector(selectPaymentCheckout);
  const lastCardDigits = useMemo(
    () =>
      value
        ? (decryptData(value) as CreditCardData).cardNumber.split(' ').at(-1)
        : '',
    [value]
  );
  const [
    processPayment,
    {
      isLoading: isLoadingPayment,
      isError: isProcessPaymentError,
      error: processPaymentError,
      isSuccess: isProcessPaymentSuccess,
    },
  ] = useProcessPaymentMutation();
  const [
    processBadPayment,
    {
      isLoading: isLoadingBadPayment,
      isError: isProcessBadPaymentError,
      error: processBadPaymentError,
      isSuccess: isProcessBadPaymentSuccess,
    },
  ] = useProcessBadPaymentMutation();

  useIsLoadingModal(isLoadingPayment || isLoadingBadPayment);

  //For the bad case states
  useAlertInfo(
    isProcessBadPaymentError || isProcessBadPaymentSuccess,
    isProcessBadPaymentSuccess
      ? 'The payment process was successful'
      : 'There was an error processing the payment ',
    isProcessBadPaymentSuccess ? 'success' : 'error'
  );

  //For the good case states
  useAlertInfo(
    isProcessPaymentError || isProcessPaymentSuccess,
    isProcessPaymentSuccess
      ? 'The payment process was successful'
      : 'There was an error processing the payment ',
    isProcessPaymentSuccess ? 'success' : 'error'
  );

  const processOrder = () => {
    const body = { cardData: value, product };
    if (Math.random() > 0.5) {
      return processPayment(body);
    } else {
      return processBadPayment(body);
    }
  };

  return (
    <SwipeableDrawer
      anchor={'bottom'}
      open={openCheckout}
      onClose={toggleOpen}
      onOpen={toggleOpen}>
      <Box
        onClick={toggleOpen}
        sx={{
          textAlign: 'center',
        }}>
        <Box sx={{ backgroundColor: 'primary.main' }}>
          <Puller />
          <Typography sx={{ pb: 1, pt: 2.5, color: 'white' }}>
            Checkout
          </Typography>
        </Box>

        <Grid container pt={5} justifyContent="center">
          <Typography mb={2} variant="h6">
            Summary
          </Typography>
          <Grid item container justifyContent="center">
            <Grid item container xs={4} sm={2} justifyContent="center">
              <Box
                sx={{
                  border: '1px solid',
                  borderColor: 'primary.main',
                  p: 1,
                  borderRadius: 2,
                }}>
                <Image
                  src={product.image}
                  alt={`product-image`}
                  width={100}
                  height={100}
                />
              </Box>
            </Grid>
            <Grid
              item
              container
              xs={6}
              sm={2}
              justifyContent="center"
              alignItems="center">
              <Stack>
                <Typography variant="subtitle1" component="h1">
                  {product.title}
                </Typography>
                <Typography variant="h6" fontWeight="bold" component="h1">
                  Total: ${product.price}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Stack my={2.5} spacing={2}>
            <Typography variant="h6">Credit card</Typography>

            <Typography component="span" variant="subtitle1">
              Card number ending in
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: 'monospace',
                  fontSize: '1.2rem',
                  letterSpacing: '0.2em',
                }}>
                **{lastCardDigits}
              </Typography>
            </Typography>
          </Stack>
          <Button
            fullWidth
            variant="contained"
            sx={{ mx: 2, mb: 4 }}
            onClick={processOrder}>
            PAY
          </Button>
        </Grid>
      </Box>
    </SwipeableDrawer>
  );
};
