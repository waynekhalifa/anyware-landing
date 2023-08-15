import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Header from "../Header/Header";
import { Items } from "./CashlessWalletconstants";
import CashlessWalletcard from "./CashlessWalletcard";
import useIsMobile from "@/hooks/useIsMobile";
import NextImage from "next/image";
import bannerBg from "../../../public/images/home-header-bg.webp";
import Footer from "../Footer/Footer";
import millenium from "../../../public/images/millenium.svg";
import movenpick from "../../../public/images/Movenpick_logo_Hotels_Resorts 1.webp";
import jeddah from "../../../public/images/Jeddah Living 316X71 F 1.webp";
import coralBay from "../../../public/images/coralBay.webp";
const CashlessWallet: React.FC = () => {
  const { isMobile, width } = useIsMobile();
  const venues = [millenium, movenpick, jeddah, coralBay];

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
        overflowX: "clip",
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
        <Grid xs={12} sx={{ marginTop: isMobile ? 5 : 0 }}>
          <Typography
            color="text.secondary"
            align="center"
            variant="body2"
            fontWeight="bold"
            letterSpacing={1.2}
            paragraph
          >
            Join 100+ Highly Rated Hospitality Leaders
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
            marginBottom: isMobile ? 0 : 10,
          }}
        >
          {venues.map((venue, index) => {
            return (
              <Grid
                key={index}
                xs={isMobile ? 5 : undefined}
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <NextImage
                  alt="Banner background"
                  layout="fixed"
                  width="280px"
                  height="140px"
                  objectFit="contain"
                  src={venue.src}
                  style={{ opacity: "0.7" }}
                />
              </Grid>
            );
          })}
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
      <Footer />
    </div>
  );
};

export default CashlessWallet;
