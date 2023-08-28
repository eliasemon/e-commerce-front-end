'use client';

import { Box, Container, Rating, Typography, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import ColorBox from './ColorBox';
import CustomTabPanel from './CustomTabPanel';
import PricingTable from './PricingTable';
import PrintOptions from './PrintOptions';
import TabsGroup from './TabsGroup';

const Product = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const a11yProps = (index: number) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    };
    return (
        <Container maxWidth="lg" sx={{ my: 3 }}>
            <Box sx={{ display: 'flex', gap: 3 }}>
                <Box sx={{ width: '40%' }}>
                    <Box>
                        <img
                            src="/cardImages/0.png"
                            alt=""
                            style={{ width: '100%' }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Box>
                            <img
                                src="/cardImages/1.png"
                                alt="image"
                                style={{ width: '100%' }}
                            />
                        </Box>
                        <Box>
                            <img
                                src="/cardImages/2.png"
                                alt="image"
                                style={{ width: '100%' }}
                            />
                        </Box>
                        <Box>
                            <img
                                src="/cardImages/3.png"
                                alt="image"
                                style={{ width: '100%' }}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '60%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <Typography variant="h5">
                        MOCHO Popular TWS F9 Smart Touch Power Display Upgrade
                        HiFi Bluetooth Headset HIFI Stereo 9D
                    </Typography>
                    <Box>
                        <Rating name="read-only" value={3} readOnly />
                    </Box>
                    <Box>
                        <Typography variant="h6">
                            Choose Product Color
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                            <ColorBox colorName="Black" />
                            <ColorBox colorName="Red" />
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant="h6">
                            Select Print Method
                        </Typography>
                        <Box
                            sx={{
                                borderBottom: 1,
                                borderColor: 'divider',
                            }}
                        >
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example"
                            >
                                <Tab
                                    label="Order With Logo"
                                    {...a11yProps(0)}
                                />
                                <Tab label="Full Color" {...a11yProps(1)} />
                                <Tab label="Blank" {...a11yProps(2)} />
                                <Tab label="Sample" {...a11yProps(3)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <PricingTable />
                            <PrintOptions value={value} />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <PricingTable />
                            <PrintOptions value={value} />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <PricingTable />
                            <PrintOptions value={value} />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3}>
                            <Box>
                                <Typography
                                    sx={{ fontSize: '0.8rem', mb: 1 }}
                                    textAlign="center"
                                >
                                    Can't decide between products? We're happy
                                    to send you a sample to help you decide.
                                </Typography>
                                <Typography textAlign="center" fontWeight={600}>
                                    $1.64 each (Maximum 1 sample)
                                </Typography>
                            </Box>
                        </CustomTabPanel>
                    </Box>
                </Box>
            </Box>
            <TabsGroup />
        </Container>
    );
};

export default Product;
