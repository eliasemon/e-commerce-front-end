import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FaqList from './FaqList';
import ReviewSection from './ReviewSection';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TabsGroup() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="Product Specs" {...a11yProps(0)} />
                    <Tab label="FAQs" {...a11yProps(1)} />
                    <Tab label="Reviews" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                Material Stoneware Dimensions 3.10"W X 3.75"H X 3.15"B Imprint
                Area 2.50"W x 2.50"H Capacity 11 oz. Case Pack 36 Weight
                27.55lbs Product Description: What better way to promote your
                business to your loyal customers than making sure your logo is
                seen while sipping their morning coffee? Start the morning off
                right with these Traditional Ceramic Coffee Mugs. This custom
                mug is made of smooth molded ceramic composite with a glossy
                color exterior matched with its color interior perfect for your
                promotional giveaways. Classic Design Designed with C-curved
                handle for easy comfort grip, this 11 oz. ceramic mug makes the
                perfect customized gift for your family or business. Variety of
                Colors With over 10 colors to choose from, you’ll surely find
                the color that compliments your logo/design best.
                Budget-Friendly Very affordable and you’ll surely stay under
                budget with our 11oz traditional ceramic mugs. Customized coffee
                mugs are among the best and most popular promotional giveaways
                for company events, as well as for fund raisers, tradeshows, and
                more. Send us your artwork or you may also design our custom
                Traditional Ceramic Coffee Mugs by using our Design Lab. Place
                your order today to get 110% price match guarantee. Call our
                customer service to learn more about this item.
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <FaqList />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <ReviewSection />
            </CustomTabPanel>
        </Box>
    );
}
