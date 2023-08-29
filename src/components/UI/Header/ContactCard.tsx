import { Box, Typography, useTheme } from '@mui/material';
import { ContactCardStyled } from './Header.styled';

const ContactCard = ({ icon, title, subtitle }) => {
    const theme = useTheme();
    return (
        <ContactCardStyled>
            {icon}
            <Box>
                <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
                <Typography sx={{ color: theme.palette.secondary.main }}>
                    {subtitle}
                </Typography>
            </Box>
        </ContactCardStyled>
    );
};

export default ContactCard;
