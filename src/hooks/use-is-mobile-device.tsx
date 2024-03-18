import { useMediaQuery, useTheme } from '@mui/material';

export const useIsMobileDeviceData = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));

  return isMobile;
};
