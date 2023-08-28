import { CategoryStyled } from './Header.styled';

const Category = ({ title, link }) => {
    return <CategoryStyled href={link}>{title}</CategoryStyled>;
};

export default Category;
