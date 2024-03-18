import { useIsMobileDeviceData } from '@/hooks/use-is-mobile-device';
import { CreditCardData } from '@/types/payment-checkout';
import {
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';

export const CreditCard = ({
  cardNumber,
  holderName,
  cvc,
  expiryDate,
}: CreditCardData) => {
  const isMobile = useIsMobileDeviceData();

  const firstCardNumber = cardNumber?.charAt(0);

  return (
    <Box sx={{ px: isMobile ? 0 : 2, py: 2 }}>
      <Paper
        sx={{
          width: { xs: 330, sm: 350 },
          height: 220,
          borderRadius: 4,
          p: 2,
          backgroundImage: `url('/credit-card.svg')`, // Design from https://www.figma.com/community/file/1033618015444367784/credit-card-1-0
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          boxShadow: '0px 0px 19px 3px rgba(0,0,0,0.75)',
        }}>
        <Grid container spacing={2}>
          <Grid item container xs={12} justifyContent="space-between">
            <Grid item xs={10}>
              <Typography variant="h5" sx={{ color: 'white' }}>
                Credit Card
              </Typography>
            </Grid>
            <Grid item xs={2}>
              {firstCardNumber === '4' ? (
                <Image
                  src="/mastercard-logo.svg"
                  width={60}
                  height={30}
                  alt={'mastercard-logo'}
                />
              ) : firstCardNumber === '5' ? (
                <Image
                  src="/visa-logo.svg"
                  width={60}
                  height={30}
                  alt={'visa-logo'}
                />
              ) : null}
            </Grid>
          </Grid>
          <Grid item xs={12} mt={4}>
            <Typography
              sx={{
                fontFamily: 'monospace',
                fontSize: '1.2rem',
                color: 'white',
                letterSpacing: '0.2em',
              }}>
              {cardNumber}
            </Typography>
          </Grid>
          <Grid item container xs={12} justifyContent="space-between">
            <Grid item container xs={4}>
              <Typography sx={{ color: 'white', letterSpacing: '0.1em' }}>
                Exp.
              </Typography>
              <Typography sx={{ color: 'white' }}>{expiryDate}</Typography>
            </Grid>
            <Grid item container xs={3}>
              <Typography sx={{ color: 'white', letterSpacing: '0.1em' }}>
                cvc.
              </Typography>
              <Typography sx={{ color: 'white' }}>{cvc}</Typography>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography
              sx={{
                fontFamily: 'monospace',
                fontSize: '1.2rem',
                color: 'white',
              }}>
              {holderName}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
