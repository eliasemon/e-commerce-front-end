'use client';

import {
    Box,
    FormControl,
    FormControlLabel,
    Input,
    NativeSelect,
    Radio,
    RadioGroup,
    TableRow,
    Typography,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

const PrintOptions = () => {
    const colors = [
        { name: 'White', code: '#ffffff' },
        { name: 'Black', code: '#000000' },
        { name: 'Red', code: '#ff0000' },
        { name: 'Green', code: '#00ff00' },
        { name: 'Blue', code: '#0000ff' },
        { name: 'Yellow', code: '#ffff00' },
        { name: 'Orange', code: '#ffa500' },
        { name: 'Purple', code: '#800080' },
        { name: 'Pink', code: '#ff69b4' },
        { name: 'Brown', code: '#a52a2a' },
        { name: 'Gray', code: '#808080' },
        { name: 'Cyan', code: '#00ffff' },
        { name: 'Magenta', code: '#ff00ff' },
        { name: 'Lime', code: '#00ff00' },
        { name: 'Teal', code: '#008080' },
        { name: 'Indigo', code: '#4b0082' },
        { name: 'Maroon', code: '#800000' },
        { name: 'Navy', code: '#000080' },
        { name: 'Olive', code: '#808000' },
        { name: 'Silver', code: '#c0c0c0' },
        { name: 'Aquamarine', code: '#7fffd4' },
        { name: 'Lavender', code: '#e6e6fa' },
        { name: 'Beige', code: '#f5f5dc' },
        { name: 'Turquoise', code: '#40e0d0' },
        { name: 'Violet', code: '#ee82ee' },
        { name: 'Salmon', code: '#fa8072' },
        { name: 'Khaki', code: '#f0e68c' },
        { name: 'Moccasin', code: '#ffe4b5' },
        { name: 'Slate Blue', code: '#6a5acd' },
        { name: 'Chocolate', code: '#d2691e' },
    ];
    return (
        <Box>
            <Typography variant="h6" sx={{ my: 2 }}>
                Select Quantity & Print Options
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: 650 }} aria-label="caption table">
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Typography>
                                    How many would you like?
                                </Typography>
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{ display: 'flex', alignItems: 'center' }}
                            >
                                <Input placeholder="72" />
                                <Typography>x $1.55 ea.</Typography>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Typography>
                                    Where do you want it printed?
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel
                                            value="front"
                                            control={<Radio size="small" />}
                                            label="Front Side Only"
                                        />
                                        <FormControlLabel
                                            value="back"
                                            control={<Radio size="small" />}
                                            label="Back Side Only"
                                        />
                                        <FormControlLabel
                                            value="both"
                                            control={<Radio size="small" />}
                                            label="Both Sides"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Typography>
                                    How many colors is your design?
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <FormControl fullWidth>
                                    <NativeSelect
                                        defaultValue={30}
                                        inputProps={{
                                            name: 'age',
                                            id: 'uncontrolled-native',
                                        }}
                                    >
                                        <option value="one">One Color</option>
                                        <option value="full">Full Color</option>
                                    </NativeSelect>
                                </FormControl>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                <Typography>Select Imprint Color</Typography>
                            </TableCell>
                            <TableCell align="center">
                                <FormControl fullWidth>
                                    <NativeSelect
                                        defaultValue={30}
                                        inputProps={{
                                            name: 'age',
                                            id: 'uncontrolled-native',
                                        }}
                                    >
                                        {colors.map((color) => (
                                            <option
                                                key={color.code}
                                                value={color.code}
                                                style={{
                                                    backgroundColor: color.code,
                                                }}
                                            >
                                                {color.name}
                                            </option>
                                        ))}
                                        {/* <option
                                            value="1"
                                            style={{ backgroundColor: 'aqua' }}
                                        >
                                            One Color
                                        </option>
                                        <option value="2">Two Color</option>
                                        <option value="3">Three Color</option>
                                        <option value="full">Full Color</option> */}
                                    </NativeSelect>
                                </FormControl>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default PrintOptions;
