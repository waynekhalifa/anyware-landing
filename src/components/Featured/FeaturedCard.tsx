import { Box, Button, Container, Tab, Tabs, Typography } from "@mui/material";
import React, { memo, useCallback, useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";
import FadingImages from "../fadingImages/FadingImages";
import useIsMobile from "@/hooks/useIsMobile";
import AnimatedTexts from "../animatedTexts/AnimatedTexts";
import NextImage from "next/image";
import useApp from "@/hooks/useApp";

interface Props {
  items: any;
  index: number;
}
const FeaturedCard: React.FC<Props> = ({ items, index }) => {
  const [selectedTap, setSelectedTap] = useState(0);
  
  
  const choosenItem = items.filter((item: any) => item.title === selectedTap);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTap(newValue);
  };
  const { isMobile, width } = useIsMobile();
  const baseHeight =
    items[selectedTap].imgOrientation == "landscape" ? 320 : 380;
  const offestHeight =
    items[selectedTap].animatedTexts.animationType == "stack"
      ? items[selectedTap].animatedTexts.items.length * 50
      : items[selectedTap].animatedTexts.items.length * 10;
  const tabs = items.map((item: any) => item.title);
  
  const images = items[selectedTap].img.map((item: any) => item.image);

  useEffect(() => {
    
    const interval2 = setInterval(() => {
      setSelectedTap((prevIndex:any) => (prevIndex + 1) % tabs.length);
    
    }, 8000 ); // Change image every 3 seconds
    
    return () => {
    
      clearInterval(interval2);
    
    };
  }, [tabs]);
  const {openModal} = useApp()
  const HandleModal = ()=>{
    openModal({ modalID: "catcher", modalContent: "login form" });

  }
  return (
    <Container
      key={index}
      style={{
        marginBottom: "10vh",
        backgroundColor: "rgba(228,198,108,0.6)",
        borderRadius: "20px",
        width: "90%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          minHeight: baseHeight + offestHeight + "px",
        }}
      >
        <Tabs
          value={selectedTap}
          onChange={handleChange}
          variant="scrollable"
          
          aria-label="scrollable prevent tabs example"
          style={{ maxWidth: width - 40, marginBottom: "2rem" }}
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

        <Grid
          container
          spacing={4}
          sx={{
            minWidth: isMobile ? "90%" : "100%",
            maxWidth: isMobile ? "100%" : "120%",
            paddingLeft: isMobile ? 0 : 10,
            paddingRight: isMobile ? 0 : 10,
          }}
        >
          <Grid
            xs={items[selectedTap].direction == "row" && !isMobile ? 6 : 12}
            sx={{}}
          >
            <Typography
              variant="h4"
              style={{
                fontWeight: "600",
                fontSize: isMobile ? "1rem" : "1.5rem",
                textAlign:
                  items[selectedTap].direction == "row" && !isMobile
                    ? "left"
                    : "center",
              }}
            >
              {items[selectedTap].typo}
            </Typography>

            {items[selectedTap].icons.length > 0 && (
               <Grid
               xs={12}
               container
               spacing={2}
               style={{
                 display: "flex",
                 alignItems: "center",
                 justifyContent: "center",
                 flexDirection: "row",
                 marginTop:10,
                 marginLeft:0,
                 paddingLeft:0
               }}
             >
               {items[selectedTap].icons.map((venue:any, index:number) => {
                 return (
                   <Grid
                     key={index}
                     xs={isMobile ? 12 : 6}
                     style={{
                       alignItems: "center",
                       display: "flex",
                       justifyContent: "center",
                     }}
                   >
                     <NextImage
                       alt="Logos"
                       layout="fixed"
                       width={isMobile?70:"100px"}
                       priority
                       height={isMobile ? index==0 ? 50:35 :index==0 ? "90px":"50px"}
                       objectFit="contain"
                       src={venue.src}
                       
                     />
                   </Grid>
                 );
               })}
             </Grid>
            )}
            <AnimatedTexts
              texts={items[selectedTap].animatedTexts.items}
              interval={2}
              animationType={
                items[selectedTap].animatedTexts.items.length===1 ? "none":
                isMobile
                  ? "slide"
                  : items[selectedTap].animatedTexts.animationType
              }
              direction={items[selectedTap].direction}
              selectedTap={selectedTap}
            />
          </Grid>
          <Grid
            xs={items[selectedTap].direction == "row" && !isMobile ? 6 : 12}
            sx={{
              marginTop:
                items[selectedTap].direction == "row" && !isMobile ? 0 : "2rem",
            }}
          >
            <Box
              style={{
                width: items[selectedTap].direction ==="column" || isMobile? "100%" : "550px",
                height: isMobile ? items[selectedTap].imgOrientation==="portrait" ?  "500px" : "300px" : "500px",
                position: "relative",
             
              }}
            >
               <FadingImages images={items[selectedTap].img} interval={5} selectedTap={selectedTap} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        style={{
          backgroundColor: "#C6A658",
          minWidth: "110%",
          minHeight: "70px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginTop: 15,
        }}
      >
        <Button
          variant="text"
          sx={{
            backgroundColor: "transparent",
            borderColor: "transparent",
            transition: "0.4s ease-in-out",
            fontSize: "1rem",
            color: "black",
            fontWeight: "600",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#fff",
              borderColor: "#fff",
              boxShadow: "0px 0px 6px #eee",
            },
          }}
          endIcon={
            <svg
              width="16"
              height="10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 3.996h11.59L10.3 1.707A1 1 0 1 1 11.715.293l3.992 3.992a.997.997 0 0 1 .293.71.997.997 0 0 1-.293.708l-4 4a1 1 0 0 1-1.414-1.414l2.293-2.293H1a1 1 0 0 1 0-2Z"
                fill="#333"
              ></path>
            </svg>
          }
    
  onClick={HandleModal}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default FeaturedCard;
