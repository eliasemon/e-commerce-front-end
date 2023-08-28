import {
    SearchButton,
    SearchButtonIcon,
    SearchContainer,
    SearchInput,
} from './Header.styled';

const Search = () => {
    return (
        <SearchContainer>
            <SearchInput placeholder="Search for products" />
            <SearchButton>
                <SearchButtonIcon />
            </SearchButton>
        </SearchContainer>
    );
};

export default Search;
