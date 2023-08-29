'use client';

import { Box, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import {
    BottomBar,
    FooterContainer,
    FooterStyled,
    LinkList,
} from './Footer.styled';

const Footer = () => {
    const theme = useTheme();
    const categories = [
        'Drinkware',
        'Glassware',
        'Bags',
        'Clothing',
        'Masks',
        'Sports',
        'Pencils',
        'Highlighters',
    ];
    return (
        <>
            <FooterStyled
                sx={{ backgroundColor: theme.palette.backgroundColor.main }}
            >
                <FooterContainer maxWidth="lg">
                    <Box>
                        <Image
                            src="/Logo.svg"
                            width={200}
                            height={50}
                            alt="Logo"
                        />
                        <Typography>
                            Condimentum adipiscing vel neque dis
                            <br />
                            nam parturient orciat scelerisque.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}
                        >
                            Categories
                        </Typography>
                        <LinkList>
                            {categories.map((category) => (
                                <Link href="/" key={category}>
                                    {category}
                                </Link>
                            ))}
                        </LinkList>
                    </Box>
                    <Box>
                        <Typography
                            sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}
                        >
                            Useful links
                        </Typography>
                        <LinkList>
                            {categories.map((category) => (
                                <Link href="/" key={category}>
                                    {category}
                                </Link>
                            ))}
                        </LinkList>
                    </Box>
                </FooterContainer>
            </FooterStyled>
            <Box>
                <BottomBar maxWidth="lg">
                    <Box>Copyright 2022. All Rights Reserved</Box>
                    <Box>
                        <Image
                            src="/payment.svg"
                            width={300}
                            height={50}
                            alt="payment"
                        />
                    </Box>
                </BottomBar>
            </Box>
        </>
    );
};

export default Footer;
