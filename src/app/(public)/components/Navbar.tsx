import { Box, Chip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CategoryList, NavbarContainer, NavbarStyled } from './styleComponents';
import Category from './Category';

const Navbar = () => {
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
        <NavbarContainer>
            <NavbarStyled maxWidth="lg">
                <CategoryList>
                    {categories.map((category) => (
                        <Category link="/" key={category} title={category} />
                    ))}
                </CategoryList>
                <Box sx={{ position: 'relative' }}>
                    <ShoppingCartIcon
                        fontSize="large"
                        sx={{ marginRight: '.5rem' }}
                    />
                    <Chip
                        label={0}
                        size="small"
                        color="primary"
                        sx={{ position: 'absolute', bottom: 0, right: 0 }}
                    />
                </Box>
            </NavbarStyled>
        </NavbarContainer>
    );
};

export default Navbar;
