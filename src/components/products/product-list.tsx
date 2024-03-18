'use client';

import { ProductItem } from '@/components/products/product-item';
import { useGetProductsQuery } from '@/redux/products/products-api';
import { Grid } from '@mui/material';

export const ProductList = () => {
  const { data: products = [] } = useGetProductsQuery();

  return (
    <Grid
      item
      container
      pt={10}
      gap={{ xs: 2, md: 4 }}
      sx={{ justifyContent: 'center' }}>
      {products.map(product => (
        <ProductItem product={product} key={product.id} />
      ))}
    </Grid>
  );
};
