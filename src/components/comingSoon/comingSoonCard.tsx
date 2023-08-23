import { Box, Button, Container, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import FadingImages from "../fadingImages/FadingImages";
import useIsMobile from "@/hooks/useIsMobile";
import AnimatedTexts from "../animatedTexts/AnimatedTexts";
import NextImage from "next/image";
import bannerBg from '@images/home-header-bg.webp';
import checkGold from "@images/checkGold.png"
import useApp from "@/hooks/useApp";
import { primaryDark, primaryMain } from "@/constants/colors";
import theme from "@/theme";

interface Props {
  items: any;
  index: number;
}

const ComingSoonCard: React.FC<Props> = ({ items, index }) => {
  const { isMobile, width } = useIsMobile();
  const {openModal} = useApp()
  const HandleModal = ()=>{
    openModal({ modalID: "contact"});

  }
  
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
          sizes="(max-width: 768px) 100vw"  
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
          paddingTop: isMobile ? 10 : 5,
          paddingLeft: isMobile ? 0 : 10,
          paddingRight: isMobile ? 0 : 10,
          marginBottom: isMobile?0:10,
          display:'flex',
          flexDirection: items.direction
        }}
      >
        <Grid xs={isMobile ? 12 : 6} sx={{marginTop:isMobile?5:0}}>
            <Typography style={{fontWeight:'bold',color:'#997736',marginBottom:'5%'}}>{items.header}</Typography>
          <Typography
            variant="h4"
            style={{
              fontWeight: "600",
              fontSize: isMobile ? "1.5rem" : "2rem",
              textAlign: "left",
              width: "100%",
            }}
          >
            {/* {items.typo} */}
            <span style={{color:primaryMain(theme)}}>This page</span> is currently under construction!
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
              interval={1}
              animationType={items.animatedTexts.animationType}
              direction={items.direction}
            />
            )}
  
            {/* {items.animatedTexts &&items.animatedTexts.items.length==1 && (
                <Box sx={{display:'flex',alignItems:'center'}}>
                    
                    <NextImage
                    layout="fixed"
                    width={14}
                    height={14}
                    alt="gold check sign"
                    src={checkGold.src}
                    sizes="(max-width: 768px) 100vw"  
                  />
                <Typography>{items.animatedTexts.items}</Typography>
                </Box>
          )} */}
         {!isMobile&& <Button
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
            onClick={HandleModal}
          >
            Contact Us
          </Button>}
        </Grid>
        <Grid xs={isMobile ? 12 : 6} sx={{}}>
          <Box
            style={{
              width: "100%",
              height: "320px",
              transform :items.imgOrientation=="landscape" ? "scale(1)" : isMobile ? "scale(1)": "scale(1.4)",
              position: "relative",
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
            onClick={HandleModal}

            >
            Contact Us
          </Button>}
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ComingSoonCard;
