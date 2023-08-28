'use client';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PricingTable = () => {
    const heads = ['Qty', '12+', '24+', '48+', '72+', '144+', '288+', '576+'];
    const prices = [
        {
            regular: 'Printed',
            sale: 'Save',
        },
        {
            regular: 11.15,
            sale: 7.81,
        },
        {
            regular: 10.12,
            sale: 7.08,
        },
        {
            regular: 8.87,
            sale: 6.21,
        },
        {
            regular: 6.72,
            sale: 4.7,
        },
        {
            regular: 5.74,
            sale: 4.02,
        },
        {
            regular: 5.59,
            sale: 3.91,
        },
        {
            regular: 5.56,
            sale: 3.89,
        },
    ];

    return (
        <TableContainer component={Paper} sx={{ display: 'flex' }}>
            <Table
                sx={{ minWidth: 500 }}
                size="small"
                aria-label="a dense table"
            >
                <TableHead>
                    <TableRow>
                        {heads.map((head) => (
                            <TableCell key={head}>
                                {head}
                                <br />
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        sx={{
                            '&:last-child td, &:last-child th': {
                                border: 0,
                            },
                        }}
                    >
                        {prices.map((price) => (
                            <TableCell
                                component="th"
                                scope="row"
                                key={price.regular}
                            >
                                <Typography>{price.regular}</Typography>
                                <Typography>{price.sale}</Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <IconButton
                    aria-label="delete"
                    size="small"
                    sx={{ m: 1, p: 1 }}
                >
                    <ArrowForwardIcon />
                </IconButton>
            </Box>
        </TableContainer>
    );
};

export default PricingTable;
