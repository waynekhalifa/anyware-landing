import { AppBar, Box, Button, Grid } from "@mui/material";

import NavMenu from "../NavMenu";
import Logo from "../Logo";

import logo from "@images/anywarelogo.png";
import bannerBg from "@images/home-header-bg.png";
import React, { useCallback, useEffect } from "react";
import { ContactForm } from '../UI/Forms';
import useApp from '@/hooks/useApp';
import useIsMobile from "@/hooks/useIsMobile";
import { Trackpathforanalytics, trackButtonclick } from "Trackpathforanalytics";
import { useDispatch } from 'react-redux';
import { MenuItem1, getMenusByName } from "@/services/menu";
import { setListing as setMenus } from "@/store/menuSlice";

const Header: React.FC = () => {
  
  const { isMobile } = useIsMobile();

  const { openModal } = useApp();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMainMenu = async () => {
      const mainMenu: MenuItem1[] = await getMenusByName("main-navigation");
      dispatch(setMenus(mainMenu));
    };

    fetchMainMenu();
  }, [dispatch]);

  const handleClick = async () => {
    openModal({ modalID: "contact" });
    const data = { Category: "Category", Action: "Button Click", Label: "Contact Sales" };
    try {
      await trackButtonclick(data);
      // Tracking successful
    } catch (err) {
      // Tracking failed
    }
  };
  // const analytics = useCallback(() => {
  //   trackButtonclick({ Category: data.Category, Action: data.Action, Label: data.Label });
  // }, [data]);
  
// useEffect(() => {
//   analytics();
// }, [analytics]); 
  
  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="transparent"
      sx={{
        pt: 3,
        pb: 3,
        zIndex: 12,
        backgroundColor:"white",
        boxShadow:3
        
      }}
    >
      <Box sx={{margin: "auto", width: "100%" }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Box sx={{ display: "flex", alignItems: "center",justifyContent:'space-between',width:isMobile?'100%':'50%' }}>
            <Box sx={{ mr: 3 , ml :3 }}>
              <Logo imgSrc={logo} />
            </Box>
            <NavMenu />
          </Box>
          {!isMobile&&

            <Box style={{display:"flex",flexDirection:"row",columnGap:"1vw"}}>
            <Button
              variant="contained"
              sx={{ textTransform: "capitalize", boxShadow: 7 ,"&:hover": {
                backgroundColor: "primary.light",
                borderColor: "primary.light",
              },}}
              onClick={handleClick}
              >
              contact sales
            </Button>
            <Button
              variant="contained"
              sx={{ textTransform: "capitalize", boxShadow: 7 ,mr:3,"&:hover": {
                backgroundColor: "primary.light",
                borderColor: "primary.light",
              },}}
            >
              Login
            </Button>
          </Box>
              }
        </Grid>
      </Box>
    </AppBar>
  );
};

export default Header;
