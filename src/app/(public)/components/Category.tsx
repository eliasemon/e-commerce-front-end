import { CategoryStyled } from './styleComponents';

const Category = ({ title, link }) => {
    return <CategoryStyled href={link}>{title}</CategoryStyled>;
};

export default Category;
