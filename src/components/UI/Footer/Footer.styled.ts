import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FooterStyled = styled(Box)`
    margin-top: 2rem;
    padding: 3rem 0;
`;

export const FooterContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`;

export const LinkList = styled(Box)`
    display: flex;
    flex-direction: column;
`;

export const BottomBar = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
