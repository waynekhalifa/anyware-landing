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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue);
    setSelectedTap(newValue);
  };

  const { isMobile, width } = useIsMobile();
  const tabs = items.map((item: any) => item.title);
  return (
    <Grid
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
          scrollButtons={true}
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
        md={0}
        sx={{
          display: "flex",
          paddingLeft: 0,
          paddingRight: 0,
          alignItems: "center",
          justifyContent: "center",
          aligmSelf: "center",
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
          <FadingImages images={items[selectedTap].img} interval={0} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default TRSAIO;
