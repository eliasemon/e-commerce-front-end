import { Box, Chip, useTheme } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CategoryList, NavbarContainer, NavbarStyled } from './Header.styled';
import Category from './Category';

const Navbar = () => {
    const theme = useTheme();
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
        <NavbarContainer
            sx={{ backgroundColor: theme.palette.backgroundColor.main }}
        >
            <NavbarStyled maxWidth="lg">
                <CategoryList>
                    {categories.map((category) => (
                        <Category
                            link="/browse"
                            key={category}
                            title={category}
                        />
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
