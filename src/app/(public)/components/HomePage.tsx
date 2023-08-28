'use client';

import { Button, Container, Typography } from '@mui/material';
import ProductCard from '@root/components/UI/products/ProductCard';
import Link from 'next/link';
import CategorySection from './CategorySection';
import ProductsSection from '../../../components/UI/products/ProductsSection';
import Banner from './Banner';
import { ProductsSectionHeader } from './styleComponents';

const HomePage = () => {
    return (
        <>
            <CategorySection />
            <Banner />
            <Container maxWidth="lg">
                <ProductsSectionHeader>
                    <Typography variant="h5">All Products</Typography>
                    <Link href={'/browse'}>
                        <Button variant="contained">See all products</Button>
                    </Link>
                </ProductsSectionHeader>
                <ProductsSection>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ProductsSection>
            </Container>
        </>
    );
};

export default HomePage;
