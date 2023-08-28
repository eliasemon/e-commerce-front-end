import { Box, Button, Rating, TextField, Typography } from '@mui/material';
import Review from './Review';

const ReviewSection = () => {
    const rating = 4.2;
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 5,
                }}
            >
                <Box>
                    <Rating
                        name="half-rating-read"
                        defaultValue={rating}
                        precision={0.5}
                        size="large"
                        readOnly
                    />
                    <Typography fontWeight={600} fontSize={'4rem'}>
                        {rating}/5
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <TextField placeholder="Write your review here" />
                    <Rating name="half-rating-read" precision={0.5} />
                    <Box>
                        <Button variant="contained">Submit</Button>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Review />
                <Review />
                <Review />
            </Box>
        </Box>
    );
};

export default ReviewSection;
