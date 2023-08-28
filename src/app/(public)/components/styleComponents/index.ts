import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';

export const CategorySectionStyle = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

export const ProductsSectionHeader = styled(Box)`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
`;

export const ProductList = styled(Box)`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
`;

export const Product = styled(Box)`
    width: 270px;
    border-radius: 0.5rem;
    overflow: hidden;
    border: 1px solid #ddd;
    transition: 0.3s;
    position: relative;

    &:hover {
        cursor: pointer;
        transform: scale(1.025);
    }
`;
