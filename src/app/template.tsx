'use client';

import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

export default function Template({ children }: { children: ReactNode }) {
  const router = useRouter();

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
    </>
  );
}
