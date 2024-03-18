import { CreditCard } from '@/components/common/credit-card';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Slide,
  TextField,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { ReactElement, Ref, forwardRef } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { PatternFormat } from 'react-number-format';
import { useIsMobileDeviceData } from '@/hooks/use-is-mobile-device';
import CloseIcon from '@mui/icons-material/Close';
import { regexsConstants } from '@/constants/regexs';

const { cardNumberRegex, cvcRegex } = regexsConstants;

const Transition = forwardRef(
  (
    props: TransitionProps & {
      children: ReactElement<any, any>;
    },
    ref: Ref<unknown>
  ) => {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);

export interface CreditCardData {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  holderName: string;
}

const schema = yup.object().shape({
  cardNumber: yup
    .string()
    .matches(cardNumberRegex, 'Card number must be in the correct format.')
    .required('Card number is required')
    .test('cardType', 'Only Visa or Mastercard accepted', value => {
      if (!value) return true;
      const firstDigit = value.charAt(0);
      return firstDigit === '4' || firstDigit === '5'; // Visa starts with 4, Mastercard starts with 5
    }),
  expiryDate: yup
    .string()
    .test('expiryDate', 'Card has expired', function (value) {
      if (!value) return true;

      const [month, year] = value.split('/');
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100; // Get last two digits of the current year
      const currentMonth = currentDate.getMonth() + 1; // Month is 0 indexed

      if (parseInt(year, 10) < currentYear) {
        return false;
      }

      if (
        parseInt(year, 10) === currentYear &&
        parseInt(month, 10) < currentMonth
      ) {
        return false;
      }

      return true;
    })
    .required('Expiry date is required'),
  cvc: yup
    .string()
    .required('CVC is required')
    .matches(cvcRegex, 'Invalid CVC'),
  holderName: yup.string().required('Holder name is required'),
});

interface InsertCreditCardModalProps {
  open: boolean;
  handleClose: () => void;
}

export const InsertCreditCardModal = ({
  open,
  handleClose,
}: InsertCreditCardModalProps) => {
  const isMobile = useIsMobileDeviceData();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreditCardData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const currentCreditCardData = useWatch({ control }) as CreditCardData;

  const onSubmit = (data: CreditCardData) => {
    console.log(data);
  };

  return (
    <Dialog
      open={open}
      scroll="body"
      fullWidth
      maxWidth={'md'}
      fullScreen={isMobile}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}>
      <DialogTitle>Insert your credit card info</DialogTitle>
      <IconButton
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
        }}>
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Grid container spacing={1} pt={1}>
          <Grid
            item
            container
            xs={12}
            sm={6}
            justifyContent="center"
            alignItems="center">
            <CreditCard {...currentCreditCardData} />
          </Grid>
          <Grid item container xs={12} sm={6} spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="cardNumber"
                control={control}
                render={({ field }) => (
                  <PatternFormat
                    {...field}
                    customInput={TextField}
                    format="#### #### #### ####"
                    mask="_"
                    label="Card Number"
                    variant="outlined"
                    error={Boolean(errors.cardNumber)}
                    helperText={errors.cardNumber?.message}
                    fullWidth
                  />
                )}
              />
            </Grid>

            <Grid item container xs={12} spacing={1}>
              <Grid item xs={6}>
                <Controller
                  name="expiryDate"
                  control={control}
                  render={({ field }) => (
                    <PatternFormat
                      {...field}
                      customInput={TextField}
                      format="##/##"
                      label="Expiry Date"
                      variant="outlined"
                      error={Boolean(errors.expiryDate)}
                      helperText={errors.expiryDate?.message}
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="CVC"
                  variant="outlined"
                  {...register('cvc')}
                  error={Boolean(errors.cvc)}
                  helperText={errors.cvc?.message}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Holder Name"
                variant="outlined"
                {...register('holderName')}
                error={Boolean(errors.holderName)}
                helperText={errors.holderName?.message}
                fullWidth
              />
            </Grid>
            <Button
              variant="contained"
              color="primary"
              sx={{ ml: 2, mt: 2 }}
              onClick={handleSubmit(onSubmit)}
              fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
