'use client';

import { Container, Typography } from '@mui/material';
import { CategoryBoxGroup } from '@root/components/UI/categories/categories.styled';
import CategoryBox from '../../../../components/UI/categories/CategoryBox';

const CategoriesPage = () => {
    const categories = [
        'Drinkware',
        'Glassware',
        'Bags',
        'Apparel',
        'Wellness',
        'Pens',
        'Office',
        'Technology',
        'Auto Home',
        'Outdoor',
        'New Arrivals',
        'Clearance',
    ];
    return (
        <Container maxWidth="lg">
            <Typography textAlign="center" fontSize="2rem" fontWeight="600">
                Shop All Categories
            </Typography>
            <CategoryBoxGroup>
                {categories.map((category, index) => (
                    <CategoryBox
                        key={index}
                        categoryName={category}
                        imageNo={index % 4}
                    />
                ))}
            </CategoryBoxGroup>
        </Container>
    );
};

export default CategoriesPage;
