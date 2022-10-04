import { useSelector } from "react-redux";
import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Logo";
import headerLogo from "@images/header-logo.png";
import { commonWhite } from "../../constants/colors";
import { disableScroll } from "../../helpers/utils";
import DesktopMenu from "../NavMenu/DesktopMenu";
import NavMenu from "../NavMenu";
import { selectSelected } from "@/store/pageSlice";
import BreadCrumbs from "../BreadCrumbs";
import { useState } from "react";

const PageHeader: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const page = useSelector(selectSelected);
  const matches = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar
        position="relative"
        elevation={0}
        sx={{ backgroundColor: "primary.main", pt: 1 }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: { xs: 3, md: 0 },
            pb: { xs: 3, md: 0 },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              disableScroll(true);
              setOpen(true);
            }}
            sx={{
              display: { md: "none" },
              color: (theme) => commonWhite(theme),
              mt: -2,
              ml: -2,
              transform: "scale(1.2)",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              position: { xs: "absolute", md: "relative" },
              top: { xs: "50%", md: "auto" },
              left: { xs: "50%", md: "auto" },
              transform: { xs: "translate(-50%,-50%)", md: "none" },
              display: { md: "flex" },
              alignItems: { md: "center" },
            }}
          >
            <Logo imgSrc={headerLogo} />
          </Box>
          <Box sx={{ flex: 1 }} />
          <DesktopMenu marginTop={true} />
        </Container>
      </AppBar>
      <NavMenu open={open} setOpen={setOpen} />
      <Box
        sx={{
          backgroundImage: `url(/images/${
            page.path === "/about-us" ? "banner" : "banner"
          }.png)`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            background: "rgba(0,0,0,.5)",
            pt: { xs: 3, md: 7 },
            pb: { xs: 3, md: 7 },
          }}
        >
          <Container>
            <Grid
              display={matches ? "block" : "flex"}
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Typography
                variant={matches ? "h4" : "h3"}
                component={"h1"}
                fontWeight={500}
                sx={{ color: "white", textTransform: "capitalize" }}
              >
                {page === null ? "404" : page.name}
              </Typography>
              <BreadCrumbs title={page === null ? "404" : page.name} />
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default PageHeader;
