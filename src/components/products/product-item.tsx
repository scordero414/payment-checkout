import { Product } from '@/src/types/products';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

interface ProductItemProps {
  product: Product;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  const { title, images, id, price } = product;
  return (
    <Grid item container xs={12} sm={5} md={3} lg={2} xl={1.5}>
      <Card sx={{ width: '100%', maxHeight: 320 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={200}
            image={images[0]}
            sx={{ objectFit: 'cover' }}
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
