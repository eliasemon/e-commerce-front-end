import { Box } from '@mui/material';
import Image from 'next/image';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import Search from './Search';
import { TopBar, ContactCardsGroup } from './styleComponents';
import ContactCard from './ContactCard';
import Navbar from './Navbar';

const Header = () => {
    return (
        <Box>
            <TopBar maxWidth="lg">
                <Box>
                    <Image
                        src="./logo.svg"
                        width={200}
                        height={50}
                        alt="Logo"
                    />
                </Box>
                <Search />
                <ContactCardsGroup>
                    <ContactCard
                        icon={<ContactPhoneIcon fontSize="large" />}
                        title="24 Support"
                        subtitle="0123456789"
                    />
                    <ContactCard
                        icon={<ShareLocationIcon fontSize="large" />}
                        title="Worldwide"
                        subtitle="Free Shipping"
                    />
                </ContactCardsGroup>
            </TopBar>
            <Navbar />
        </Box>
    );
};

export default Header;
