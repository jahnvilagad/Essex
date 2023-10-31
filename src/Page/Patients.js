import React from 'react';

import Sidenav from '../Components/Sidenav';
import Box from '@mui/material/Box';
import Navbar from '../Components/Navbar';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Patients() {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <h1>List of Patients</h1>
            <Button variant="contained" size="small" sx={{ backgroundColor: "#007f80", textTransform: "capitalize" }}>
              <AddIcon sx={{ fontSize: "20px" }} /> Add Patients
            </Button>
        </Box>
            <Accordion>
              <AccordionSummary sx={{border: '1px solid #02205f'}}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{color: '#02205f', fontSize: '21px'}}>Search & Filter</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
        </Box>
      </Box>
    </>
  )
}
