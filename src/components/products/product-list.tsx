'use client';

import { ProductItem } from '@/src/components/products/product-item';
import { useGetProductsQuery } from '@/src/redux/products/products-api';
import { Grid } from '@mui/material';

export const ProductList = () => {
  const { data: products = [] } = useGetProductsQuery();

  return (
    <Grid
      item
      container
      gap={{ xs: 2, md: 4 }}
      sx={{ justifyContent: 'center' }}>
      {products.map(product => (
        <ProductItem product={product} />
      ))}
    </Grid>
  );
};
