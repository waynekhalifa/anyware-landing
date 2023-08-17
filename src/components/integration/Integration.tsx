import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Header from "../Header/Header";
import { Items } from "./Integrationconstants";
import CashlessWalletcard from "../CashlessWallet/CashlessWalletcard";
import useIsMobile from "@/hooks/useIsMobile";
import NextImage from "next/image";
import bannerBg from "@images/home-header-bg.webp";
import Footer from "../Footer/Footer";

import integrationPartners from "@images/integrationPartners.png";
import { useEffect } from "react";
import {
  getAnalytics,
  logEvent,
  setUserId,
  setUserProperties,
} from "@firebase/analytics";
import Head from "next/head";

const Integration: React.FC = () => {
  const { isMobile, width } = useIsMobile();

  useEffect(() => {
    const analytics = getAnalytics();
    setUserProperties(analytics, { favorite_food: "apples" });
    setUserId(analytics, "user1");
    logEvent(analytics, "page_view", {
      user_id: "user1",
      page_name: "INTEGRATION",
    });
  }, []);
  return (
    <>
      <Head>
        <title>Anyware Software</title>
        <meta name="description" content={"Anyware Software"} />
      </Head>
      <Header />
      <div
        style={
          isMobile
            ? {
                overflow: "hidden",
                position: "relative",
                flex: 1,
              }
            : {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                height: "100vh",
                position: "absolute",
                overflowX: "hidden",
                paddingTop: isMobile ? 20 : 120,
              }
        }
      >
        

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
          
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 0,
            width: "100%",
            padding: 0,
            alignItems: "center",
          }}
        >
          <Grid
            style={{ width: "100%", margin: 0, padding: 0 }}
            xs={12}
            md={12}
            >
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
              padding: 0,
              marginBottom: isMobile ? -20 : 100,
              marginTop: isMobile ? 50 : -50,
              transform: isMobile ? "scale(0.7)" : "scale(1)",
            }}
            >
            <Grid xs={12}>
              <Typography
                //   color="text.secondary"
                align="center"
                variant="h4"
                fontWeight="bold"
                letterSpacing={1.2}
                paragraph
                >
                Our Previous Integration Expertise
              </Typography>
            </Grid>
            <Box
              sx={{
                minWidth:'100%',
                height:'150px',
                transform:'translateY(3rem)'
              }}
              >
              <NextImage
                alt="Banner background"
                layout="fill"
                src={integrationPartners.src}
                objectFit="contain"
                style={{}}
                />
            </Box>
          </Grid>
          <Grid
            style={{ width: "100%", margin: 0, padding: 0 }}
            xs={12}
            md={12}
            >
            <Box
              style={{
                width: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                margin: 0,
              }}
              >
              <CashlessWalletcard index={1} items={Items[1]} />
            </Box>
          </Grid>
        </Grid>
              
        <Footer />
      </div>
    </>
  );
};

export default Integration;
