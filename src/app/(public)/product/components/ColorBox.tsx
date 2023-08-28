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

                '&:hover': {
                    cursor: 'pointer',
                },
            }}
        >
            <Image
                alt={colorName}
                src="/cardImages/0.png"
                width={25}
                height={25}
            />
            <Typography variant="body1">{colorName}</Typography>
        </Box>
    );
};

export default ColorBox;
