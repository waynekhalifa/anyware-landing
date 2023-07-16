import { Box, Button, Container, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";
import FadingImages from "../fadingImages/FadingImages";
import useIsMobile from "@/hooks/useIsMobile";
import AnimatedTexts from "../animatedTexts/AnimatedTexts";
import NextImage from "next/image";

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
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          minWidth: isMobile ? "90%" : "100%",
          maxWidth: isMobile ? "100%" : "120%",
          paddingTop: isMobile ? 10 : 0,
          paddingLeft: isMobile ? 0 : 10,
          paddingRight: isMobile ? 0 : 10,
          marginBottom: 10,
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
                backgroundColor: "primary.main",
                borderColor: "#fff",
                boxShadow: "0px 0px 6px #eee",
              },
            }}
          >
            Get Started
          </Button>
        </Grid>
        <Grid xs={isMobile ? 12 : 6} sx={{}}>
          <Box
            style={{
              width: "100%",
              height:"300px",
              position: "relative",
            }}
          >
            <FadingImages images={items.img} interval={0} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TRScard;
