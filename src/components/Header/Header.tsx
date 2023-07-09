import { AppBar, Box, Button, Grid } from "@mui/material";

import NavMenu from "../NavMenu";
import Logo from "../Logo";

import logo from "@images/anywarelogo.png";
import bannerBg from "@images/home-header-bg.png";

const Header: React.FC = () => {
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
          <Box sx={{ display: "flex", alignItems: "center",justifyContent:'center' }}>
            <Box sx={{ mr: 3 , ml :3 }}>
              <Logo imgSrc={logo} />
            </Box>
            <NavMenu />
          </Box>
          <Box style={{display:"flex",flexDirection:"row",columnGap:"1vw"}}>
            <Button
              variant="contained"
              
              sx={{ textTransform: "capitalize", boxShadow: 12 }}
            >
              contact sales
            </Button>
            <Button
              variant="contained"
              sx={{ textTransform: "capitalize", boxShadow: 12 ,mr:3}}
            >
              Login
            </Button>
          </Box>
        </Grid>
      </Box>
    </AppBar>
  );
};

export default Header;
