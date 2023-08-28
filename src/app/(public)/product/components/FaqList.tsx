import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FaqList() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        How do I know how much my order will cost?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        On each product page, there is a Price Estimator. Just
                        access the product details page of the product you want,
                        and enter your desired production method, production
                        time (how quickly it needs to be printed), printing
                        colors, print position, state, and shipping method (how
                        quickly you need it shipped) and an estimated price of
                        your order will appear.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>What are the Imprint Colors?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The imprint color is the color that will be used to
                        print your artwork/design. If more than one color is
                        used in your artwork, click "Add Another Print Color" to
                        add additional colors to your design. For full color
                        prints, you may select the "CMYK" or "Full Color"
                        production method when available. We can also alter your
                        own logos to simplify the number of colors in a print,
                        or print in one color.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        What if I don't have my own artwork?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        If you do not have your own graphic you wish to upload,
                        we offer a wide selection of fonts and clip arts to
                        choose from for your design. Use of our predesigned
                        images is free of charge. We offer a variety of images
                        for occasions, popular customizations, and more. You can
                        also have these clipart items changed to fit your needs
                        (like customizing a wedding one with your names and
                        dates) as well.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        What if I need to make changes after I order?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        If you need to make any changes, please contact our
                        customer service or art dept. as soon as possible.
                        (1-800-579-7152) No changes can be made to an order once
                        the proof has been approved and the production process
                        has begun.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>When will I receive my order?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        While placing your order, you will be prompted to enter
                        a desired production time (how quickly you need the
                        products printed) and a desired shipping method (how
                        quickly you need them shipped to you after printing). If
                        there are no artwork delays on your order, the estimated
                        delivery date offered by the website will provide you
                        with a realistic timeframe for the delivery of your
                        order. In most cases, it takes roughly 7-10 business
                        days to have your products perfected and printed, then
                        shipped.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
