import { ProductList } from '../../../app/(public)/components/styleComponents';

const ProductsSection = ({ children }) => {
    return (
        <ProductList sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {children}
        </ProductList>
    );
};

export default ProductsSection;
