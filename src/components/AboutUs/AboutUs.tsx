import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import Section from "../UI/Section";
import axios from "axios";
import ReactGA from "react-ga";
import { useEffect, useState } from "react";
import bannerBg from "../../../public/images/home-header-bg.png";
import millenium from "../../../public/images/millenium.svg";
import movenpick from "../../../public/images/Movenpick_logo_Hotels_Resorts 1.png";
import jeddah from "../../../public/images/Jeddah Living 316X71 F 1.png";
import caffe from "../../../public/images/ni-caffe-removebg-preview 1.png";
import caf from "../../../public/images/CAF.png";
import { allItems } from "@/constants/features";
import useIsMobile from "@/hooks/useIsMobile";

const AboutUs: React.FC = () => {
  ReactGA.initialize("UA-267753856-1");
  ReactGA.set({ userId: "1241123459812" });
  const { isMobile } = useIsMobile();


  return (
    <Box sx={{ overflow: "hidden",width:'100%',  }}>
      <img
        src={bannerBg.src}
        style={{
          content: '""',
          display: "block",
          position: "absolute",
          top: "-60.016vh",
          left: "calc(0vw)",
          width: "100%",
          height: "145.43vh",
          //webkitTransform: "translate(0,-28.5%)",
          // msTransform: "translate(0,-28.5%)",
          // transform: "translate(0,-28.5%)",
        //   transition: "unset",
          zIndex: -12,
        }}
      />

      <Container sx={{pt:10}}>
        <Section>
            <Grid item xs={12} md={6}>
                <Typography component="h1" variant="h3" fontWeight={700} sx={{color:'white', mb: 4 }}>
                #1 Digitizing 
                <br />
                Software House
                </Typography>
            </Grid>
        </Section>
      </Container>

    </Box>
  );
};

export default AboutUs;
