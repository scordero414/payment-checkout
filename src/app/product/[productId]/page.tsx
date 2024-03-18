import { InsertCreditCardModal } from '@/components/modals/insert-credit-card-modal';
import { PayActionButton } from '@/components/product-info/pay-action';
import { Product } from '@/types/products';
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const getProduct = async (productId: string): Promise<Product> => {
  const product = await fetch(
    `${process.env.NEXT_PUBLIC_PRODUCTS_BASE_URL}/products/${productId}`
  );
  return product.json();
};

interface ProductPageProps {
  productId: string;
}

export default async function ProductPage({
  params: { productId },
}: {
  params: ProductPageProps;
}) {
  const { id, title, description, image, price } = await getProduct(productId);

  if (!id) {
    notFound();
  }

  return (
    <Container maxWidth="xl" sx={{ height: '100vh' }}>
      <Grid
        container
        pt={4}
        pb={{ xs: 10, sm: 0 }}
        gap={4}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: { xs: 'none', sm: '100%' },
        }}>
        <Grid
          item
          container
          xs={12}
          sm={5.5}
          height={{ xs: '70vh', sm: '40vh' }}>
          <Image
            src={image}
            alt={`product-image`}
            sizes="100vw"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: 10,
            }}
            width={500}
            height={300}
          />
        </Grid>
        <Grid item container xs={12} sm={5.5} gap={{ xs: 2, sm: 5 }}>
          <Stack>
            <Typography variant="h4" component="h1">
              {title}
            </Typography>
            <Typography variant="h6" fontWeight="bold" component="h1">
              ${price}
            </Typography>
            <Typography variant="subtitle1" component="h1">
              {description}
            </Typography>
          </Stack>
          <PayActionButton />
        </Grid>
      </Grid>
    </Container>
  );
}
