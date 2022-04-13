import React, { forwardRef } from "react";

import {
    Grid,
    Box
} from '@mui/material';

const Column = forwardRef(({ num, numColor, numColumns }, ref) => {
    let multiple = 225 / numColumns;
    let height = multiple * num;
    return (
        <Grid xs={1} ref={ref} item alignSelf="end">
            <Box bgcolor={numColor} sx={{height: height, width: '50%', borderRadius: '3px'}}></Box>
        </Grid>
    );
    }
);

export default Column;