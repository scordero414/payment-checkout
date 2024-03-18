import { Alert, AlertColor, AlertTitle, Snackbar } from '@mui/material';

interface AlertInfoProps {
  title: string;
  open: boolean;
  onClose: () => void;
  alertType: AlertColor;
}

export const AlertInfo = ({
  title,
  open,
  onClose,
  alertType,
}: AlertInfoProps) => {
  const alertTitle: Record<Partial<AlertColor>, string> = {
    success: 'Success',
    error: 'Error',
    info: 'Info',
    warning: 'Warning',
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      autoHideDuration={3000}
      onClose={onClose}>
      <Alert variant="standard" onClose={onClose} severity={alertType}>
        <AlertTitle>{alertTitle[alertType]}</AlertTitle>
        {title}
      </Alert>
    </Snackbar>
  );
};
