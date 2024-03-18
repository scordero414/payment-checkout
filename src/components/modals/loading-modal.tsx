import { Box, CircularProgress, Modal } from '@mui/material';

export const LoadingModal = () => {
  return (
    <Modal open={true} disableAutoFocus disableEnforceFocus>
      <Box
        sx={{
          position: 'absolute' as const,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 200,
          height: 200,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          textAlign: 'center',
        }}>
        <CircularProgress color="primary" />
      </Box>
    </Modal>
  );
};
