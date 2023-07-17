import { AppBar, Box, Button, Grid } from "@mui/material";

import NavMenu from "../NavMenu";
import Logo from "../Logo";

import logo from "@images/anywarelogo.png";
import bannerBg from "@images/home-header-bg.png";
import React from "react";
import { ContactForm } from '../UI/Forms';
import useApp from '@/hooks/useApp';
import useIsMobile from "@/hooks/useIsMobile";


const Header: React.FC = () => {
  const { isMobile } = useIsMobile();

  const { openModal } = useApp();

  const handleClick=()=>{
    openModal({ modalID: "contact"});

  }
  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="transparent"
      sx={{
        pt: 3,
        pb: 3,
        zIndex: 12,
        backgroundColor:"white"
        
      }}
    >
      <Box sx={{margin: "auto", width: "100%" }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Box sx={{ display: "flex", alignItems: "center",justifyContent:'space-between',width:isMobile?'100%':'80%' }}>
            <Box sx={{ mr: 3 , ml :3 }}>
              <Logo imgSrc={logo} />
            </Box>
            <NavMenu />
          </Box>
          {!isMobile&&

            <Box style={{display:"flex",flexDirection:"row",columnGap:"1vw"}}>
            <Button
              variant="contained"
              sx={{ textTransform: "capitalize", boxShadow: 12 ,"&:hover": {
                backgroundColor: "primary.light",
                borderColor: "primary.light",
              },}}
              onClick={handleClick}
              >
              contact sales
            </Button>
            <Button
              variant="contained"
              sx={{ textTransform: "capitalize", boxShadow: 12 ,mr:3,"&:hover": {
                backgroundColor: "primary.light",
                borderColor: "primary.light",
              },}}
            >
              Login
            </Button>
          </Box>
          

        //   <Box style={{display:"flex",flexDirection:"row",columnGap:"1vw",marginTop:'5%',marginLeft:'5%'}}>
        //   <Button
        //     variant="contained"
        //     sx={{ textTransform: "capitalize", boxShadow: 8 ,"&:hover": {
        //       backgroundColor: "primary.light",
        //       borderColor: "primary.light",
        //     },}}
        //     onClick={handleClick}
        //     >
        //     contact sales
        //   </Button>
        //   <Button
        //     variant="contained"
        //     sx={{ textTransform: "capitalize", boxShadow: 8 ,mr:3,"&:hover": {
        //       backgroundColor: "primary.light",
        //       borderColor: "primary.light",
        //     },}}
        //   >
        //     Login
        //   </Button>
        // </Box>

              }
        </Grid>
      </Box>
    </AppBar>
  );
};

export default Header;
