import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
                <Typography position="relative" sx={{ backgroundColor: "#fff", color: "#2f2f2f", bottom: "0" , width: "100%",left: "0", textAlign: "center" , padding: "1.5rem"}}>
                    Copyright © 2023 Essex Gynaecologist. Designed by The Website Factory London All rights reserved.
                </Typography>
        </Box>
    )
}
