import { Box, Button, Paper, Typography } from '@mui/material';

const PriceCalculator = () => {
    return (
        <Paper
            sx={{
                my: 1,
                mx: 3,
                p: 3,
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ backgroundColor: 'orange', py: 1, px: 3 }}>
                    Save 50%
                </Box>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <Typography fontSize={'1.3rem'}>Total Price : </Typography>
                    <Typography fontSize={'1.3rem'} fontWeight={600}>
                        50.34 $
                    </Typography>
                </Box>
            </Box>
            <Button
                variant="contained"
                size="large"
                sx={{ alignSelf: 'flex-end', mt: 2 }}
            >
                Add to Cart
            </Button>
        </Paper>
    );
};

export default PriceCalculator;
