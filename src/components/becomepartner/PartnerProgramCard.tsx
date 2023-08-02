import { Box, Button, Container, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";
import FadingImages from "../fadingImages/FadingImages";
import useIsMobile from "@/hooks/useIsMobile";
import AnimatedTexts from "../animatedTexts/AnimatedTexts";
import NextImage from "next/image";
import handshakeicon from "../../../public/images/handshakeicon.svg"
import recycleicon from "../../../public/images/recycleicon.svg"
interface Props {
  items: any;
  index: number;
  selected : number;
}

const PartnerProgramCard: React.FC<Props> = ({ items, index,selected }) => {
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
        border  :index===selected ? 'solid 2px #D7B35E' : 'solid 0.5px #aaa',
        transform:index===selected ? 'scale(1)' : 'scale(0.8)',
        borderRadius:10,
        boxShadow:index===selected ? '0px 2px 4px #D7B35E' :'0px 2px 4px #aaa',
        cursor: 'pointer',
        transition : 'transform 0.5s ease-in-out',
    
        
      }}
    >
      <Grid xs={12} sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
        <Box>
          <NextImage
          alt="Banner background"
          layout="fixed"
          width="80px"
          height="80px"
          objectFit="contain"
          src={items.icon.src}
          />
          </Box> 

      </Grid>
      <Grid xs={12} sx={{paddingTop:0,paddingBottom:0,}}>
      <Typography
            variant="h4"
            style={{
              fontWeight: "600",
              fontSize: isMobile ? "1.5rem" : "2rem",
              textAlign: "left",
              width: "100%",
            }}
          >
            {items.title}
          </Typography>
      </Grid>
      <Grid xs={12} sx={{paddingTop: 0}}>
      
            <AnimatedTexts
              texts={[items.description]}
              interval={2}
              animationType={"none"}
              direction={"row"}
            />
      
      </Grid>
      <Grid xs={12} sx={{}}>
      <Button
          variant="text"
          sx={{
            backgroundColor: "transparent",
            borderColor: "transparent",
            transition: "0.4s ease-in-out",
            fontSize: "1rem",
            color: "primary.light",
            fontWeight: "600",
            textTransform: "capitalize",
            zIndex:100
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
                fill="#D7B35E"
              ></path>
            </svg>
          }
        >
          Learn more
        </Button>
      </Grid>
    </Box>
  );
};

export default PartnerProgramCard;
