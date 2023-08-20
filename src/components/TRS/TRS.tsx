import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Header from "../Header/Header";
import { Items, TRSaio } from "./TRSconstants";
import TRScard from "./TRScard";
import reif from "@images/reif.webp";
import megumi from "@images/megumi.webp";
import lexies from "@images/lexies.webp";
import sachi from "@images/sachi.webp";
import shinko from "@images/shinko.webp";
import kazoku from "@images/kazoku.webp";
import useIsMobile from "@/hooks/useIsMobile";
import NextImage from "next/image";
import bannerBg from "@images/home-header-bg.webp";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import TRSAIO from "./TRSAIO";
import Head from "next/head";
import { getAnalytics, logEvent, setUserId } from "firebase/analytics";

const TRS: React.FC = () => {
  const { isMobile, width } = useIsMobile();
  const venues = !isMobile ? [shinko, reif, megumi, lexies, sachi, kazoku] :[shinko, kazoku, reif, megumi, lexies, sachi,]  ;

  useEffect(() => {
    const analytics = getAnalytics();
    setUserId(analytics, "user1");
    logEvent(analytics, "page_view", {
      user_id: "user1",
      page_name: "TRS",
      num: "01123204458",
    });
    console.log("hi");
  }, []);

  return (
    <>
      <Head>
        <title>Anyware Software</title>
        <meta name="description" content={"Anyware Software"} />
      </Head>
      <Header />
      <Box
        style={{
          
          overflow: "hidden", position: "relative" ,flex:1,
          paddingTop: isMobile ? 0 : 120,
        }}
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
              <TRScard index={0} items={Items[0]} />
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
              marginBottom: isMobile ? 0 : 80,
              marginTop: isMobile ? 50 : -80,
            }}
          >
            <Grid xs={12}>
              <Typography
                color="text.secondary"
                align="center"
                variant="body2"
                fontWeight="bold"
                letterSpacing={1.2}
                paragraph
              >
                JOIN 800,000+ HIGHLY PRODUCTIVE TEAMS
              </Typography>
            </Grid>
            <Grid
              xs={12}
              container
              spacing={4}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                marginTop:10,
              }}
            >
              {venues.map((venue, index) => {
                return (
                  <Grid
                    key={index}
                    xs={isMobile ? 12 : undefined}
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <NextImage
                      alt="Venue Logos"
                      layout="fixed"
                      width="150px"
                      priority
                      height={isMobile ?(index===1 || index===0 ) ? "80px" : "60px" :(index===venues.length-1 || index===0 ) ? "80px" : "60px"}
                      objectFit="contain"
                      src={venue.src}
                      style={{ opacity: "0.7" }}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          {Items.slice(1, Items.length).map((item, index) => (
            <Grid
              key={index + 1 + "items"}
              style={{
                width: "100%",
                padding: 0,
                marginBottom: isMobile ? 40 : 120,
              }}
              xs={12}
              md={12}
            >
              <Box
                style={{
                  width: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  marginTop: 0,
                  
                }}
              >
                <TRScard index={index + 1} items={item} />
              </Box>
            </Grid>
          ))}
          <Grid
            style={{
              width: "100%",
              padding: 0,
              marginBottom: isMobile ? 40 : 120,
            }}
            xs={14}
            md={14}
          >
            <Box
              style={
                isMobile
                  ? {
                      width: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                      margin: 0,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }
                  : {
                      width: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                      margin: 0,
                    }
              }
            >
              <TRSAIO items={TRSaio} />
            </Box>
          </Grid>
        </Grid>
        <Footer />
      </Box>
    </>
  );
};

export default TRS;
