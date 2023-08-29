import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface ColorBoxProps {
    colorName: string;
}

const ColorBox: React.FC<ColorBoxProps> = ({ colorName }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                border: '1px solid #ddd',
                borderRadius: '5px',
                padding: '0.25rem',

                '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: '#ddd',
                    border: '1px solid #eee',
                },
            }}
        >
            <Image
                alt={colorName}
                src="/cardImages/0.png"
                width={50}
                height={50}
            />
            <Typography variant="body1">{colorName}</Typography>
        </Box>
    );
};

export default ColorBox;
