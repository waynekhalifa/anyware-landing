import { AppBar, Box, Button, Grid } from "@mui/material";

import logo from "@images/anywarelogo.png";
import bannerBg from "@images/home-header-bg.jpg";
import NavMenu from "../NavMenu";
import Logo from "../Logo";

const Header: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="transparent"
      sx={{
        pt: 3,
        pb: 3,
        zIndex: 1,
        "&:before": {
          content: '""',
          display: "block",
          position: "absolute",
          top: "0",
          left: "calc(50vw + 44px)",
          width: "1143px",
          height: "1149px",
          background: `url(${bannerBg.src}) no-repeat top right/cover`,
          webkitTransform: "translate(0,-28.5%)",
          msTransform: "translate(0,-28.5%)",
          transform: "translate(0,-28.5%)",
          transition: "unset",
          zIndex: 0,
        },
      }}
    >
      <Box sx={{ maxWidth: 1248, margin: "auto", width: "100%" }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: 3 }}>
              <Logo imgSrc={logo} />
            </Box>
            <NavMenu />
          </Box>
          <Box>
            <Button
              sx={{ textTransform: "capitalize", mr: 2, color: "common.white" }}
            >
              contact sales
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{ textTransform: "capitalize", boxShadow: 12 }}
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
