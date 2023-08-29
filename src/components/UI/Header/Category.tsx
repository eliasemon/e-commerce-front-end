import { Typography } from '@mui/material';
import { CategoryStyled } from './Header.styled';

const Category = ({ title, link }) => {
    return (
        <CategoryStyled href={link}>
            <Typography fontSize="1.1rem"> {title}</Typography>
        </CategoryStyled>
    );
};

export default Category;
