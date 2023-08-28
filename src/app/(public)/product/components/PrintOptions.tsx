'use client';

import { Box, Typography } from '@mui/material';

const PrintOptions = ({ value }) => {
    console.log(value);

    return (
        <Box>
            <Typography variant="h6">
                Select Quantity & Print Options
            </Typography>
            <Box sx={{ display: 'flex', gap: 5 }}>
                <Box>
                    <Typography>How many would you like?</Typography>
                    {(value === 0 || 1) && (
                        <>
                            <Typography>
                                Where do you want it printed?
                            </Typography>
                            <Typography>
                                How many colors is your design?
                            </Typography>
                        </>
                    )}
                    {value === 0 && (
                        <Typography>Select Imprint Color - 1</Typography>
                    )}
                </Box>
                <Box>
                    <Typography>How many would you like?</Typography>
                    {(value === '0' || '1') && (
                        <>
                            <Typography>
                                Where do you want it printed?
                            </Typography>
                            <Typography>
                                How many colors is your design?
                            </Typography>
                        </>
                    )}
                    {value === 0 && (
                        <Typography>Select Imprint Color - 1</Typography>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default PrintOptions;
