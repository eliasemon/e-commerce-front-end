import { Box, Button } from '@mui/material';
import { CategoryBoxGroup } from '@root/components/UI/categories/categories.styled';
import Link from 'next/link';
import { CategorySectionStyle } from './styleComponents';
import CategoryBox from '../../../components/UI/categories/CategoryBox';

const CategorySection = () => {
    const categories = [
        'Drinkware',
        'Glassware',
        'Bags',
        'Clothing',
        'Masks',
        'Sports',
        'Pencils',
        'Highlighters',
    ];
    return (
        <CategorySectionStyle maxWidth="lg">
            <CategoryBoxGroup>
                {categories.slice(0, 4).map((category, index) => (
                    <CategoryBox
                        key={category}
                        imageNo={index}
                        categoryName={category}
                    />
                ))}
            </CategoryBoxGroup>
            <Box>
                <Link href="/categories">
                    <Button variant="contained">All Categories</Button>
                </Link>
            </Box>
        </CategorySectionStyle>
    );
};

export default CategorySection;
