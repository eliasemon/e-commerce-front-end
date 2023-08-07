import { Box, Typography } from '@mui/material';
import { ContactCardStyled } from './styleComponents';

const ContactCard = ({ icon, title, subtitle }) => {
    return (
        <ContactCardStyled>
            {icon}
            <Box>
                <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
                <Typography sx={{ color: '#1979c6' }}>{subtitle}</Typography>
            </Box>
        </ContactCardStyled>
    );
};

export default ContactCard;
