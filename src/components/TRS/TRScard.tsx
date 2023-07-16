import { Box, Button, Container, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";
import FadingImages from "../fadingImages/FadingImages";
import useIsMobile from "@/hooks/useIsMobile";
import AnimatedTexts from "../animatedTexts/AnimatedTexts";
import NextImage from "next/image";
import bannerBg from "../../../public/images/home-header-bg.png";
import Section from "../UI/Section/Section";
import kazoku from "../../../public/images/kazoku.png";
import lexies from "../../../public/images/lexies.png";
import sachi1 from "../../../public/images/sachi1.png";
import sachi2 from "../../../public/images/sachi2.png";
import sachi3 from "../../../public/images/sachi3.png";
import reif from "../../../public/images/reif.png";
import megumi from "../../../public/images/megumi.png";

interface Props {
  items: any;
  index: number;
}

const TRScard: React.FC<Props> = ({ items, index }) => {
  const { isMobile, width } = useIsMobile();
  const venues = [reif, megumi, lexies, sachi1, sachi2, sachi3, kazoku];
  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        minHeight: "100%",
        maxHeight: "100%",
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
        container
        spacing={4}
        sx={{
          minWidth: isMobile ? "80%" : "100%",
          maxWidth: isMobile ? "100%" : "120%",
          paddingTop: isMobile ? 10 : 0,
          paddingLeft: isMobile ? 0 : 10,
          paddingRight: 10,
          marginBottom: 10,
        }}
      >
        <Grid xs={6} sx={{}}>
          <Typography
            variant="h4"
            style={{
              fontWeight: isMobile ? "400" : "600",
              fontSize: isMobile ? "1rem" : "2rem",
              textAlign: "left",
              width: "100%",
            }}
          >
            {items.typo}
          </Typography>
          {items.Description && (
            <AnimatedTexts
              texts={[items.Description]}
              interval={2}
              animationType={"none"}
              direction={items.direction}
            />
          )}
          {items.animatedTexts && (
            <AnimatedTexts
              texts={items.animatedTexts.items}
              interval={2}
              animationType={items.animatedTexts.animationType}
              direction={items.direction}
            />
          )}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              borderColor: "transparent",
              transition: "0.4s ease-in-out",
              fontSize: "1rem",
              color: "white",
              fontWeight: "500",
              marginTop: "5.5rem",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#fff",
                borderColor: "#fff",
                boxShadow: "0px 0px 6px #eee",
              },
            }}
          >
            Get Started
          </Button>
        </Grid>
        <Grid xs={6} sx={{}}>
          <Box style={{ width: "50%", height: "50%", position: "absolute" }}>
            <FadingImages images={items.img} interval={0} />
          </Box>
        </Grid>
      </Grid>
      {index === 0 && (
        <Box style={{alignItems:'center', marginTop:'1rem'}}>
          <Typography
            color="text.secondary"
            align="center"
            variant="body2"
            fontWeight="bold"
            letterSpacing={1.2}
            paragraph
            sx={{ mt: 1 }}
          >
            JOIN 800,000+ HIGHLY PRODUCTIVE TEAMS
          </Typography>
              
                <Grid container spacing={8} style={{alignItems:'center',justifyContent:'center'}} >

                {venues.map((venue, index) => {
                    return (
                    
                    <Grid key={index} xs={isMobile ? 6 : 1.5}>
                    <NextImage
                      
                      alt="Banner background"
                      layout="fixed"
                      width="150px"
                      height="60px"
                      src={venue.src}
                      
                      />
                      </Grid>
                  );
                })}
                </Grid>
              
            
        </Box>
      )}
    </Box>
  );
};

export default TRScard;
