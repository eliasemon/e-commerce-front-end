import { Button, Container, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import { ProductList, ProductsSectionHeader } from './styleComponents';

const ProductsSection = () => {
    return (
        <Container maxWidth="lg">
            <ProductsSectionHeader>
                <Typography variant="h5">All Products</Typography>
                <Button variant="contained">See all products</Button>
            </ProductsSectionHeader>
            <ProductList>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </ProductList>
        </Container>
    );
};

export default ProductsSection;
