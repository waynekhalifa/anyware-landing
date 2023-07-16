import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Logo from '../Logo';
import logo from "@images/anywarelogo.png";

const Footer = () => {
  return (
    <footer>
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
            justifyContent: 'center',
          }}
        >
          <Box sx={{ marginRight: '50px' }}>
            <Typography style={{ fontSize: 20, fontWeight: 'bolder', marginBottom: 10 }}>
              Ordering Features
            </Typography>
            <Link href="" passHref>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer',marginBottom:5 }}>
                - Online Ordering System
              </Typography>
            </Link>
            <Link href="" passHref>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer',marginBottom:5 }}>
                - QR Dine-in Self Ordering
              </Typography>
            </Link>
            <Link href="" passHref>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer',marginBottom:5 }}>
                - Self Service Kiosk
              </Typography>
            </Link>
            <Link href="" passHref>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer',marginBottom:5 }}>
                - Call Center Solution
              </Typography>
            </Link>
          </Box>

          <Box sx={{ marginRight: '50px' }}>
            <Typography style={{ fontSize: 20, fontWeight: 'bolder', marginBottom: 10 }}>
              Customer Retention Features
            </Typography>
            <Link href="" passHref>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer',marginBottom:5 }}>
                - Loyalty & Rewarding System
              </Typography>
            </Link>
            <Link href="" passHref>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer',marginBottom:5 }}>
                - Packages Solution
              </Typography>
            </Link>
          </Box>

          <Box sx={{ marginRight: '50px' }}>
            <Typography style={{ fontSize: 20, fontWeight: 'bolder', marginBottom: 10 }}>
              Customer Management Features
            </Typography>
            <Link href="" passHref>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer',marginBottom:5 }}>
                - CRM Solution
              </Typography>
            </Link>
            <Link href="" passHref>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer',marginBottom:5 }}>
                - Table Reservation System
              </Typography>
            </Link>
            <Link href="" passHref>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer',marginBottom:5 }}>
                - Feedback, Reviews & Surveys
              </Typography>
            </Link>
          </Box>

          <Box sx={{ marginRight: '50px' }}>
            <Typography style={{ fontSize: 20, fontWeight: 'bolder', marginBottom: 10 }}>Payment Features</Typography>
            <Link href="" passHref>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer',marginBottom:5 }}>
                - POS Payment Integrations
              </Typography>
            </Link>
            <Link href="" passHref>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer',marginBottom:5 }}>
                - In-App Payments
              </Typography>
            </Link>
            <Link href="" passHref>
              <Typography style={{ fontSize: 15, textAlign: 'left', cursor: 'pointer',marginBottom:5 }}>
                - Cashless Solution
              </Typography>
            </Link>
          </Box>

          <Box>
            <Typography style={{ fontSize: 20, fontWeight: 'bolder', marginBottom: 10 }}>Locations:</Typography>
            <Typography style={{ fontSize: 15, textAlign: 'left',marginBottom:5 }}>- Cairo, Egypt Office #: +20 100 667 6388
            </Typography>
            <Typography style={{ fontSize: 15, textAlign: 'left',marginBottom:5 }}>- Dubai, UAE Office #: +971 50 506 4187
            </Typography>
          </Box>

        </Box>
      <hr style={{ borderTop: '1px grey', margin: '20px auto', width: '90%' }} />
      <Box style={{display:'flex'}}>
        <Box style={{flexDirection:'column',marginTop:20,marginLeft:'5%'}}>
      <Logo imgSrc={logo} />
      <Link href={""} passHref>
      <Typography style={{fontSize:12, cursor: 'pointer',}}>@2023 Anyware Software  |  Security  |  Terms</Typography>
      </Link>
        </Box>
        
        {/* Social icons */}
        <Box>

        </Box>

      </Box>

      </Box>

    </footer>
  );
};

export default Footer;
