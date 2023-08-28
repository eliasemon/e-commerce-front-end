'use client';

import {
    Box,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    MenuItem,
    Paper,
    Select,
    Typography,
} from '@mui/material';
import ProductCard from '@root/components/UI/products/ProductCard';
import ProductsSection from '@root/components/UI/products/ProductsSection';

const Browse = () => {
    const colors = ['red', 'blue', 'green', 'black', 'white'];
    const ounces = [
        '10 oz or Less',
        '10 oz - 13 oz',
        '13 or - 17 oz',
        '17 oz or more',
    ];

    return (
        <Container maxWidth="lg" sx={{ my: 5 }}>
            <Grid container>
                {/* Category List  */}
                <Grid item xs={3}>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h6">Color</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            {colors.map((color) => (
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={color}
                                    key={color}
                                />
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h6">Ounce</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            {ounces.map((ounce) => (
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={ounce}
                                    key={ounce}
                                />
                            ))}
                        </Box>
                    </Box>
                </Grid>

                {/* Products list  */}
                <Grid item xs={9}>
                    <Paper
                        variant="outlined"
                        square
                        sx={{
                            py: 1,
                            px: 2,
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            <Typography>View : </Typography>
                            <FormControl>
                                <Select
                                    defaultValue={20}
                                    displayEmpty
                                    inputProps={{
                                        'aria-label': 'Without label',
                                    }}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl>
                                <Select
                                    defaultValue={'none'}
                                    displayEmpty
                                    inputProps={{
                                        'aria-label': 'Without label',
                                    }}
                                >
                                    <MenuItem value="none">
                                        <em>Sort by pricing</em>
                                    </MenuItem>
                                    <MenuItem value="asc">
                                        Price : Low to High
                                    </MenuItem>
                                    <MenuItem value="desc">
                                        Price : High to Low
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Paper>

                    <ProductsSection>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </ProductsSection>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Browse;
