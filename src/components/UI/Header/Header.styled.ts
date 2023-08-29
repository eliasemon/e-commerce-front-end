import { Box, Container, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

export const TopBar = styled(Container)`
    padding: 0.75rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SearchContainer = styled(Box)`
    border: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    border-radius: 2rem;
    padding: 0.25rem;
    flex: 1;
    margin: 0 3rem;
    overflow: hidden;
`;

export const SearchInput = styled('input')`
    background-color: transparent;
    border: none;
    outline: none;
    flex: 1;
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
`;

export const SearchButton = styled('button')`
    border-radius: 0.5rem;
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 2.5rem;
    transition: 1s;

    &:hover {
        cursor: pointer;
        background-color: #4778d9;
        transform: scale(0.9);
    }

    &:active {
        background-color: blue;
        transform: scale(1.5);
    }
`;

export const SearchButtonIcon = styled(SearchIcon)`
    color: #fff;
`;

export const ContactCardsGroup = styled(Box)`
    display: flex;
    gap: 2rem;
`;

export const ContactCardStyled = styled(Box)`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const NavbarContainer = styled(Box)`
    padding: 1rem 0;
`;

export const NavbarStyled = styled(Container)`
    display: flex;
    align-items: center;
`;

export const CategoryList = styled(Box)`
    display: flex;
    flex: 1;
    gap: 0.25rem;
`;

export const CategoryStyled = styled(Link)`
    margin: 0 0.125rem;
    padding: 0.25rem 0.85rem;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
        background-color: #6fc3e8;
    }
`;
