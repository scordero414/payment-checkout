import { ProductList } from '@/components/products/product-list';
import { Box, Container, Typography } from '@mui/material';
import type { Metadata } from 'next';

export default function MainPage() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          py: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Box pt={10}>
          <ProductList />
        </Box>
      </Box>
    </Container>
  );
}

export const metadata: Metadata = {
  title: 'Payment checkout',
};
