import { Box, Button, Container, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import FadingImages from "../fadingImages/FadingImages";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";

interface Props {
  items: any;
}
const TRSAIO: React.FC<Props> = ({ items }) => {
  const [selectedTap, setSelectedTap] = useState(0);
  const [boxInView, setBoxInView] = useState(false);
  const handleBoxInView = (entries: any) => {
    if (entries[0].isIntersecting) {
      setBoxInView(true);
    } else {
      setBoxInView(false);
    }
  };


  useEffect(() => {
    const observer = new IntersectionObserver(handleBoxInView, {
      root: null, // Use the viewport as the root
      threshold: 0.5, // Trigger when at least 50% of the element is in view
    });

    const target = document.querySelector("#my-box"); // Replace with the actual ID of your Box element
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTap(newValue);
    setClikced(true);
  };

  const { isMobile, width } = useIsMobile();
  const tabs = items.map((item: any) => item.title);
  const [clicked, setClikced] = useState(false);
  useEffect(() => {
    if (!clicked && boxInView) {
      const interval2 = setInterval(() => {
        setSelectedTap((prevIndex: any) => (prevIndex + 1) % tabs.length);
      }, 5000); // Change image every 3 seconds

      return () => {
        clearInterval(interval2);
      };
    }
  }, [tabs, clicked, boxInView]);

  return (
    <Grid
      id="my-box"
      spacing={4}
      style={{
        marginBottom: "10vh",
        maxWidth: isMobile ? "90%" : "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: isMobile ? "column" : "row",
        overflow: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      <Grid xs={isMobile ? 14 : 4} sx={{}}>
        <Tabs
          value={selectedTap}
          onChange={handleChange}
          variant="scrollable"
          orientation={isMobile ? "horizontal" : "vertical"}
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
          sx={
            !isMobile
              ? { borderRight: 1, borderColor: "divider", maxHeight: "100%" }
              : {
                  maxWidth: width,
                  marginBottom: "0rem",
                  borderBottom: 1,
                  borderColor: "divider",
                }
          }
        >
          {tabs.map((tab: any, index: number) => (
            <Tab
              key={index}
              sx={{
                textTransform: "capitalize",
                fontSize: "1rem",
                lineHeight: isMobile ? "1" : "3",
                fontWeight: 600,
                color: selectedTap === tab ? "text.primary" : "#888",
                alignItems: "flex-start",
                textAlign: "left",
              }}
              label={tab}
            />
          ))}
        </Tabs>
      </Grid>
      <Grid
        xs={isMobile ? 12 : 4}
        md={6}
        sx={{
          display: "flex",
          paddingLeft: 0,
          paddingRight: 0,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          minWidth: "50%",
          minHeight: "100%",
          backgroundImage: "linear-gradient(to right bottom, #B48C44, #E4C66C)",
          boxShadow: "0 6px 6px rgba(228,198,108,0.3)",
          borderRadius: 1,
          width: "100%",
        }}
      >
        <Box
          style={{
            width: "100%",
            height: "500px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FadingImages
            images={items[selectedTap].img}
            interval={0}
            selectedTap={selectedTap}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default TRSAIO;
