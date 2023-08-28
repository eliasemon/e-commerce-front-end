import { Box, styled } from '@mui/material';

export const CategoryBoxGroup = styled(Box)`
    display: flex;
    width: 100%;
    gap: 2rem;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 1rem 0;
`;

export const CategoryBoxStyled = styled(Box)`
    min-height: 25rem;
    width: 20%;
    background-color: teal;
    border-radius: 0.5rem;
    position: relative;
    background-size: cover;
    overflow: hidden;

    &:hover {
        cursor: pointer;
    }
`;
