import { Box, Button } from '@mui/material';
import { CategoryBoxGroup, CategorySectionStyle } from './styleComponents';
import CategoryBox from './CategoryBox';

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
                <Button variant="contained">All Categories</Button>
            </Box>
        </CategorySectionStyle>
    );
};

export default CategorySection;
