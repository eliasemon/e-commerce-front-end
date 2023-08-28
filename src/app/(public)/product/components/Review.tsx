import { Avatar, Box, Paper, Rating, Typography } from '@mui/material';

const Review = () => {
    return (
        <Box sx={{ m: 3, display: 'flex', alignItems: 'center' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    alignItems: 'center',
                    minWidth: '120px',
                }}
            >
                <Avatar
                    alt="Avatar"
                    src="/avatar.svg"
                    sx={{ width: 56, height: 56 }}
                />
                <Typography variant="body1" color="initial">
                    Sharukh Khan
                </Typography>
            </Box>
            <Box>
                <Paper elevation={3} sx={{ mx: 3, p: 3 }}>
                    <Rating
                        name="half-rating-read"
                        defaultValue={4}
                        precision={0.5}
                        readOnly
                    />
                    <Typography>
                        We have had two great results from Discount Mugs! The
                        first was our logo on Mason Jars and the second was the
                        same logo on Campfire Coffee Mugs. Both orders were
                        perfect with timely delivery and a reasonable price. We
                        use these as welcome gifts for rental guests. We will
                        absolutely place our next order with Discount Mugs!!!
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
};

export default Review;
