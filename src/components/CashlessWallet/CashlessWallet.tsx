import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Header from "../Header/Header";
import { Items } from "./CashlessWalletconstants";
import CashlessWalletcard from "./CashlessWalletcard";
import reif from "../../../public/images/reif.png";
import megumi from "../../../public/images/megumi.png";
import lexies from "../../../public/images/lexies.png";
import sachi from "../../../public/images/sachi.png";
import shinko from "../../../public/images/shinko.png";
import kazoku from "../../../public/images/kazoku.png";
import useIsMobile from "@/hooks/useIsMobile";
import NextImage from "next/image";
import bannerBg from "../../../public/images/home-header-bg.png";
import Footer from "../Footer/Footer";
import millenium from "../../../public/images/millenium.svg";
import movenpick from "../../../public/images/Movenpick_logo_Hotels_Resorts 1.png";
import jeddah from "../../../public/images/Jeddah Living 316X71 F 1.png";
import coralBay from "../../../public/images/coralBay.png";
const CashlessWallet: React.FC = () => {
  const { isMobile, width } = useIsMobile();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        height: "100vh",
        position: "absolute",
        overflowX: "hidden",
        paddingTop: isMobile ? 20 : 120,
      }}
    >
      <Header />
      <Box
        style={{
          top: "-100.016vh",
          left: "calc(80vw)",
          width: "57.1vw",
          height: "185.43vh",
          display: "block",
          position: "absolute",
        }}
      >
        <NextImage
          alt="Banner background"
          layout="fill"
          src={bannerBg.src}
          style={{
            zIndex: -12,
          }}
        />
      </Box>
      <Grid
        spacing={6}
        container
        style={{
          display: "flex",
          flexDirection: "column",
          margin: 0,
          width: "100%",
          padding: 0,
          alignItems: "center",
        }}
      >
        <Grid style={{ width: "100%", margin: 0, padding: 0 }} xs={12} md={12}>
          <Box
            style={{
              width: "100%",
              minHeight: "100%",
              maxHeight: "100%",
              margin: 0,
            }}
          >
            <CashlessWalletcard index={0} items={Items[0]} />
          </Box>
        </Grid>

        <Grid
          spacing={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding:0,
            marginBottom: isMobile?-20 :160,
            marginTop:isMobile?20:-100,
          }}
        >
          <Grid xs={12} >
            <Typography
            //   color="text.secondary"
              align="center"
              variant="h4"
              fontWeight="bold"
              letterSpacing={1.2}
              paragraph
            >
              Join Highly Rated Hospitality Leaders
            </Typography>
          </Grid>
          <Grid
            xs={12}
            container
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              
              
            }}
          >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            width:'50%'
          }}
          >
          <img alt="millenium" src={millenium.src} style={{ width: "16%" }} />
          <img alt="millenium" src={movenpick.src} style={{ width: "16%" }} />
          <img alt="swissotel" src={jeddah.src} style={{ width: "16%" }} />
          <img alt="coralBay" src={coralBay.src} style={{ width: "16%" }} />
        </Box>
          </Grid>
        </Grid>
        <Grid style={{ width: "100%", margin: 0, padding: 0 }} xs={12} md={12}>
          <Box
            style={{
              width: "100%",
              minHeight: "100%",
              maxHeight: "100%",
              margin: 0,
            }}
          >
            <CashlessWalletcard index={0} items={Items[1]} />
          </Box>
        </Grid>
      </Grid>
      <Footer/>
    </div>
  );
};

export default CashlessWallet;
