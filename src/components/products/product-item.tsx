import { Product } from '@/types/products';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';

interface ProductItemProps {
  product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  const { title, image, id, price } = product;

  const router = useRouter();

  const handleOpenProduct = () => {
    router.push(`/product/${id}`);
  };
  return (
    <Grid item container xs={12} sm={5} md={3} lg={2} xl={1.5}>
      <Card sx={{ width: '100%', maxHeight: 320 }} onClick={handleOpenProduct}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={200}
            image={image}
            sx={{ objectFit: 'contain' }}
            alt={`product-image-${id}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" noWrap>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`$${price}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
