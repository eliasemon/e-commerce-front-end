import { useTheme } from '@mui/material';
import {
    SearchButton,
    SearchButtonIcon,
    SearchContainer,
    SearchInput,
} from './Header.styled';

const Search = () => {
    const theme = useTheme();
    return (
        <SearchContainer>
            <SearchInput placeholder="Search for products" />
            <SearchButton
                style={{ backgroundColor: theme.palette.primary.main }}
            >
                <SearchButtonIcon />
            </SearchButton>
        </SearchContainer>
    );
};

export default Search;
