import { Box, Button, Container, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";
import FadingImages from "../fadingImages/FadingImages";
import useIsMobile from "@/hooks/useIsMobile";
import AnimatedTexts from "../animatedTexts/AnimatedTexts";
import NextImage from "next/image";
import bannerBg from '@images/home-header-bg.png';

interface Props {
  items: any;
  index: number;
}

const TRScard: React.FC<Props> = ({ items, index }) => {
  const { isMobile, width } = useIsMobile();
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
        position:'relative'
      }}
    >
       {index!==0 && <Box
        style={{
          top: "calc(50% + -20vw)",
          left:  items.direction=="row"? isMobile? "50%":"70%" :isMobile?"-50%": "0%",
          width: isMobile ? 400 :  "35vw",
          height: isMobile ? 400 :  "35vw",
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
      </Box>}
      <Grid
        container
        spacing={4}
        
        sx={{
          minWidth: isMobile ? "100%" : "100%",
          maxWidth: isMobile ? "100%" : "120%",
          paddingTop: isMobile ? 15 : 0,
          paddingLeft: isMobile ? 0 : 10,
          paddingRight: isMobile ? 0 : 10,
          marginBottom: isMobile?0:10,
          display:'flex',
          flexDirection: items.direction
        }}
      >
        <Grid xs={isMobile ? 12 : 6} sx={{}}>
          <Typography
            variant="h4"
            style={{
              fontWeight: "600",
              fontSize: isMobile ? "1.5rem" : "2rem",
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
          {items.animatedTexts &&items.animatedTexts.items.length>0 && (
            <AnimatedTexts
              texts={items.animatedTexts.items}
              interval={2}
              animationType={items.animatedTexts.animationType}
              direction={items.direction}
            />
          )}
         {!isMobile&& <Button
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
                backgroundColor: "primary.main",
                borderColor: "#fff",
                boxShadow: "0px 0px 6px #eee",
              },
            }}
          >
            Get Started
          </Button>}
        </Grid>
        <Grid xs={isMobile ? 12 : 6} sx={{}}>
          <Box
            style={{
              width: "100%",
              height: "400px",
              transform :items.imgOrientation=="landscape"?  "scale(1)" : "scale(1.4)",
              position: "relative",
              marginTop: isMobile && items.imgOrientation==="landscape" ? -80 : 0,
              marginBottom: isMobile && items.imgOrientation==="landscape" ? -40 : 0
            }}
          >
             <FadingImages images={items.img} interval={items.img.length>1  ? 3 : 0} />
          </Box>
          <Box sx={{minWidth:'100%',display:'flex',alignItems:'center',justifyContent:'center',}}>
          {isMobile&& <Button
            variant="contained"
            sx={{
              
              backgroundColor: "black",
              borderColor: "transparent",
              transition: "0.4s ease-in-out",
              fontSize: "1rem",
              color: "white",
              fontWeight: "500",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "primary.main",
                borderColor: "#fff",
                boxShadow: "0px 0px 6px #eee",
              },
            }}
            >
            Get Started
          </Button>}
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TRScard;
