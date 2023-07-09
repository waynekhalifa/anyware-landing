import { Box, Button, Container, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";

interface Props {
  tabs: any;
  items: any;
}
const FeaturedCard: React.FC<Props> = ({ tabs, items }) => {
  const [selectedTap, setSelectedTap] = useState(0);
  const choosenItem = items.filter((item: any) => item.title === selectedTap);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTap(newValue);
  };
  return (
    <Container style={{ marginBottom: "10vh" }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#FFF7D4",
          minHeight: "300px",
          borderRadius: "20px",
        }}
      >
        <Tabs
          value={selectedTap}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={true}
          aria-label="scrollable prevent tabs example"
          style={{ maxWidth: "100%", marginBottom: "2rem" }}
        >
          {tabs.map((tab: any, index: number) => (
            <Tab
              key={index}
              sx={{
                textTransform: "capitalize",
                mr: 2,
                fontSize: "1rem",
                fontWeight: 600,
                color: "text.primary",
              }}
              label={tab}
            />
          ))}
        </Tabs>
        <Grid container spacing={4} sx={{ maxWidth: "90%" }}>
          <Grid xs={6}>
            <Typography
              variant="h4"
              style={{ fontWeight: "600", fontSize: "2rem" }}
            >
              {items[selectedTap].typo}
            </Typography>
          </Grid>
          <Grid xs={6} sx={{ maxHeight: "100%" }}>
            <Box
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Image
                alt="anyware software"
                layout="responsive"
                width="100%"
                height="50%"
                src={items[selectedTap].img[0]}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FeaturedCard;
