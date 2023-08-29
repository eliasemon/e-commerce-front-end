import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { CategoryBoxStyled } from './categories.styled';

const CategoryBox = ({ categoryName, imageNo }) => {
    return (
        <CategoryBoxStyled
        // sx={{ backgroundImage: `url('./categories/${imageNo}.jpg')` }}
        >
            <Link href={'/browse'}>
                <img
                    src={`/categories/${imageNo}.jpg`}
                    style={{ width: '100%', height: '100%' }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        width: '100%',
                    }}
                >
                    <Typography
                        sx={{
                            color: 'white',
                            textAlign: 'center',
                            fontWeight: 600,
                            fontSize: '1.5rem',
                        }}
                    >
                        {categoryName}
                    </Typography>
                </Box>
            </Link>
        </CategoryBoxStyled>
    );
};

export default CategoryBox;
