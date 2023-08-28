import { Box, Chip, Rating, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../../app/(public)/components/styleComponents';

const ProductCard = () => {
    return (
        <Link href={'/product'}>
            <Product>
                <Chip
                    label="Save 30%"
                    color="warning"
                    sx={{ position: 'absolute', top: 10, right: 10 }}
                />
                <Image
                    src="/categories/0.jpg"
                    width={270}
                    height={350}
                    alt="product_image"
                />
                <Box sx={{ margin: '1rem' }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
                        Product Title
                    </Typography>
                    <Rating name="read-only" value={4} readOnly />
                    <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                        <Typography>Starts from</Typography>
                        <Typography
                            sx={{ color: '#0376d4', fontWeight: 'bold' }}
                        >
                            $150.00
                        </Typography>
                    </Box>
                </Box>
            </Product>
        </Link>
    );
};

export default ProductCard;
