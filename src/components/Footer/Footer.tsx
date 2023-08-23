import { Alert, Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../Logo';
import logo from "@images/anywarelogowhite.webp";
import useApp from '@/hooks/useApp';

const Footer = () => {
  const { openModal } = useApp();

  const handleclick = () => {
    openModal({ modalID: "contact" });
  };
const [alert,setAlert] = useState(false)
const linkStyle = {
  // Define the same styles as the Link component
  color: 'inherit',  // Inherit the text color from parent
  textDecoration: 'none', // Remove underline
  cursor: 'pointer', // Show pointer cursor
};
  return (
    
    <footer>
      {<Alert icon={false} severity='info' style={{opacity:alert?1:0,transition:'opacity 0.5s ease-in-out' , position:'fixed' , bottom:100,width:'30%',left:'35%'}} onClose={() => {setAlert(false)}}>Coming soon {";)"} </Alert>}
      <Box
        sx={{
          background: 'linear-gradient(to right, #745C34, #D7B35E)',
          padding: '20px',
          textAlign: 'center',
          color: 'white',
          borderTopLeftRadius: 130,
          borderTopRightRadius: 60,
        }}  
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            marginLeft: 10
          }}
        >
          <Box sx={{ marginRight: '50px', marginBottom: 5, minWidth: 200 }}>
            <Typography style={{ fontSize: 20, fontWeight: 'bolder', marginBottom: 10 }}>
              Ordering Features
            </Typography>
            <Link href="/ComingSoon" passHref >
            <a target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer', marginBottom: 5 }}>
                - Online Ordering System
              </Typography>
              </a>
            </Link>
            <Link href="/ComingSoon" passHref >
            <a target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer', marginBottom: 5 }}>
                - QR Dine-in Self Ordering
              </Typography>
              </a>
            </Link>
            <Link href="/Kiosk" passHref>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer', marginBottom: 5 }}>
                - Self Service Kiosk
              </Typography>
            </Link>
            <Link href="/ComingSoon" passHref >
            <a target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer', marginBottom: 5 }}>
                - Call Center Solution
              </Typography>
              </a>
            </Link>
          </Box>

          <Box sx={{ marginRight: '50px', marginBottom: 5 }}>
            <Box style={{ width: '100%' }}>
              <Typography style={{ fontSize: 20, fontWeight: 'bolder', marginBottom: 10, textAlign: 'left' }}>
                Customer Retention Features
              </Typography>
            </Box>
            <Link href="/ComingSoon" passHref >
            <a target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer', marginBottom: 5 }}>
                - Loyalty & Rewarding System
              </Typography>
              </a>
            </Link>
            <Link href="/ComingSoon" passHref >
            <a target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer', marginBottom: 5 }}>
                - Packages Solution
              </Typography>
              </a>
            </Link>
          </Box>

          <Box sx={{ marginRight: '50px', marginBottom: 5 }}>
            <Box style={{ width: '120%' }}>
              <Typography style={{ fontSize: 20, fontWeight: 'bolder', marginBottom: 10, textAlign: 'left' }}>
                Customer Management Features
              </Typography>
            </Box>
            <Link href="/ComingSoon" passHref >
            <a target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer', marginBottom: 5 }}>
                - CRM Solution
              </Typography>
              </a>
            </Link>
            <Link href="/Table-Reservation-System" passHref>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer', marginBottom: 5 }}>
                - Table Reservation System
              </Typography>
            </Link>
            <Link href="/ComingSoon" passHref >
            <a target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer', marginBottom: 5 }}>
                - Feedback, Reviews & Surveys
              </Typography>
              </a>
            </Link>
          </Box>

          <Box sx={{ marginRight: '50px', marginBottom: 5 }}>
            <Typography style={{ fontSize: 20, fontWeight: 'bolder', marginBottom: 10 }}>
              Payment Features
            </Typography>
            <Link href="/IntegrationServices" passHref>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer', marginBottom: 5 }}>
                - POS Payment Integrations
              </Typography>
            </Link>
            <Link href="/ComingSoon" passHref >
            <a target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer', marginBottom: 5 }}>
                - In-App Payments
              </Typography>
              </a>
            </Link>
            <Link href="CashlessWallet" passHref>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer', marginBottom: 5 }}>
                - Cashless Solution
              </Typography>
            </Link>
          </Box>

          <Box sx={{ marginRight: '50px', marginBottom: 5 }}>
            <Typography style={{ fontSize: 20, fontWeight: 'bolder', marginBottom: 10,textAlign:'left' }}>Locations:</Typography>
            <Typography style={{ fontSize: 15, textAlign: 'left', marginBottom: 5 }}>
              - Dubai, UAE Office #: <span style={{color:'blue',textDecoration:'underline'}}>+971 50 506 4187</span>
            </Typography>
            {/* <Typography style={{ fontSize: 15, textAlign: 'left', marginBottom: 5 }}>
              - Cairo, Egypt Office #: +20 100 667 6388
            </Typography> */}
          </Box>

          <Box sx={{ marginRight: '50px', marginBottom: 5 }}>
            <Typography style={{ fontSize: 20, fontWeight: 'bolder', marginBottom: 10 }}>
              Anyware Software
            </Typography>
            <Box style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <Button
                onClick={handleclick}
                sx={{
                  textTransform: "capitalize",
                  "&hover":{
                    backgroundColor:'transparent',
                    border:'none'
                  }
                }}
              >
                <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer', marginBottom: 5, color: 'white', marginLeft: -8 }}>
                  - Contact Us
                </Typography>
              </Button>
            </Box>
            <Box style={{ display: 'flex' }}>
            </Box>
            <Link href="AboutUs" passHref>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer', marginBottom: 5 }}>
                - About Us
              </Typography>
            </Link>
            <Link href="becomepartner" passHref>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer', marginBottom: 5 }}>
                - Become a partner
              </Typography>
            </Link>
          </Box>
          

        </Box>
        <hr style={{ borderTop: '1px grey', margin: '20px auto', width: '90%' }} />

        <Box style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
          <Box style={{ marginTop: 20}}>
            <Logo imgSrc={logo} />
            <Link href={""} passHref>
              <Typography style={{ fontSize: 12, cursor: 'pointer' }}>@2023 Anyware Software  |  Security  |  Terms</Typography>
            </Link>
          </Box>

        </Box>

      </Box>

    </footer>
  );
};

export default Footer;
