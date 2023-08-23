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
import { useEffect, useState } from "react";
import {
  getAnalytics,
  logEvent,
  setUserId,
  setUserProperties,
} from "@firebase/analytics";
import Head from "next/head";

const Integration: React.FC = () => {
  const { isMobile, width } = useIsMobile();
  const [logosInView, setLogosInView] = useState(false);
  const handleLogosInView = (entries: any) => {
    if (entries[0].isIntersecting) {
      setLogosInView(true);
    } else {
      setLogosInView(false);
    }
  };
useEffect(() => {
    const observer = new IntersectionObserver(handleLogosInView, {
      root: null, // Use the viewport as the root
      threshold: 0.5, // Trigger when at least 50% of the element is in view
    });

    const target = document.querySelector("#logos-box-integration"); // Replace with the actual ID of your Box element
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  useEffect(() => {
    const analytics = getAnalytics();
    setUserProperties(analytics, { favorite_food: "apples" });
    setUserId(analytics, "user1");
    logEvent(analytics, "page_view", {
      user_id: "user1",
      page_name: "INTEGRATION",
    });
  }, []);

  const animationStyles = `
  @keyframes logoAnimation {
    0%, 100% {
      opacity: 1;
      
    }
    50% {
      opacity: 0;
      
    }
  }
`;
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
                    <style>{animationStyles}</style>

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
              id="logos-box-integration"
              sx={{
                minWidth:isMobile ?  '120%':'200%',
                height:'150px',
                transform:'translateY(3rem)',
                animation: logosInView ? "logoAnimation 2s 1" : "none",
                animationDelay: logosInView ? "1s" : "",
                
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
