import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Header from "../Header/Header";
import { Items } from "./CashlessWalletconstants";
import CashlessWalletcard from "./CashlessWalletcard";
import useIsMobile from "@/hooks/useIsMobile";
import NextImage from "next/image";
import bannerBg from "@images/home-header-bg.webp";
import Footer from "../Footer/Footer";
import millenium from "@images/millenium.svg";
import movenpick from "@images/Movenpick_logo_Hotels_Resorts 1.webp";
import jeddah from "@images/Jeddah Living 316X71 F 1.webp";
import coralBay from "@images/coralBay.webp";
import { useEffect, useState } from "react";
const CashlessWallet: React.FC = () => {
  const { isMobile, width } = useIsMobile();
  const venues = [millenium, movenpick, jeddah, coralBay];
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

    const target = document.querySelector("#logos-box-cashless"); // Replace with the actual ID of your Box element
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);
  const animationStyles = `
  @keyframes logoAnimation {
    0%, 100% {
      opacity: 1;
      transform: translateY(0px);
    }
    50% {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
`;
  return (
    <div
      style={{
        overflow: "hidden", position: "relative" ,flex:1,
        paddingTop: isMobile ? 0 : 120,
      }}
    >
      <Header />
      <style>{animationStyles}</style>

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
          id="logos-box-cashless"
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
                  animation: logosInView ? "logoAnimation 3s 1" : "none",
                  animationDelay: logosInView?`${index * 0.5}s` : "",
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
