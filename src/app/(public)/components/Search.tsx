import {
    SearchButton,
    SearchButtonIcon,
    SearchContainer,
    SearchInput,
} from './styleComponents';

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
