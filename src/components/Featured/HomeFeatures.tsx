import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import Section from "../UI/Section";
import axios from "axios";
import ReactGA from "react-ga";
import Video from "./Video";
import BannerForm from "./BannerForm";
import Partners from "./Partners";
import { useCallback, useEffect, useState } from "react";
import bannerBg from "../../../public/images/home-header-bg.png";
import millenium from "../../../public/images/millenium.svg";
import movenpick from "../../../public/images/Movenpick_logo_Hotels_Resorts 1.png";
import jeddah from "../../../public/images/Jeddah Living 316X71 F 1.png";
import caffe from "../../../public/images/ni-caffe-removebg-preview 1.png";
import reif from "../../../public/images/reif.png";
import GCS from "../../../public/images/GCS.png";
import capital from "../../../public/images/capital.png";
import adnec from "../../../public/images/adnec.png";
import zahrtlebanon from "../../../public/images/zahrtlebanon.png";
import bosporus from "../../../public/images/bosporus.png";
import caf from "../../../public/images/CAF.png";
import FeaturedCard from "./FeaturedCard";
import { allItems } from "@/constants/features";
import useIsMobile from "@/hooks/useIsMobile";
import { useRouter } from "next/router";
import { bannerItems } from "@/constants/features";
import { Trackpathforanalytics, trackButtonclick } from "Trackpathforanalytics";
import HomeSlider from "../HomeSlider/HomeSlider";
interface StateProps {
  videoKey: string;
}

const initialState: StateProps = {
  videoKey: new Date().toISOString(),
};

const HomeFeatures: React.FC = () => {
  const [state, setState] = useState(initialState);
  const { videoKey } = state;
  const { isMobile ,width} = useIsMobile();
  const router = useRouter();
  const pathname = "adhaaaaaaaaam";
  const search = String(router.query.search);
 
  const analytics = useCallback(() => {
    Trackpathforanalytics({ path: pathname, search: search, title: pathname?.split("/")[1] });
}, [pathname, search]);


useEffect(() => {
  analytics();
}, [analytics]);


  const useAnalyticsEventTracker = (category = "Blog category") => {
    const eventTracker = (action = "test action", label = "test label") => {
      ReactGA.event({ category, action, label });
    };
    return eventTracker;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setState({ ...state, videoKey: new Date().toISOString() });
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Box sx={{ overflow: "hidden", width: "100%", position: "relative" ,flex:1}}
    >
      <img
        src={bannerBg.src}
        style={{
          content: '""',
          display: "block",
          position: "absolute",
          top: "-42.016vh",
          left: "calc(65vw)",
          width: isMobile?'80.1vw': "37.1vw",
          height: isMobile? '100vh' : "135.43vh",
          //webkitTransform: "translate(0,-28.5%)",
          // msTransform: "translate(0,-28.5%)",
          // transform: "translate(0,-28.5%)",
          transition: "unset",
          zIndex: -12,
        }}
      />
      <Container sx={{ pt: 5 ,minWidth:'90%'}}>
        <Section>
          {/*-------------------- SLIDER GOES HERE ------------------------*/}
          {/* <Grid container>
            <Grid item xs={12} md={6}>
              <BannerForm />
            </Grid>
                <Grid
                item
                xs={12}
                md={6}
                sx={{ span: { display: "block !important" },transform:isMobile? "scale(0.7)":"scale(1)",marginTop:isMobile?'20%':0,display:'flex',alignItems:'center',justifyContent:'center',}}
                >
                <Video key={videoKey} />
              </Grid>
          </Grid> */}

          <HomeSlider/>

        </Section>
        <Box style={{transform:'translateY(-100px)'}}>

        <Section>
          <Typography
            color="text.secondary"
            align="center"
            variant="body2"
            fontWeight="bold"
            letterSpacing={1.2}
            paragraph
            sx={{ mt: 1 }}
            >
            Join 100+ Highly Rated Hospitality Leaders
           </Typography>
                  <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
          >
          <img alt="millenium" src={millenium.src} style={{ width: "13%" }} />
          <img alt="millenium" src={movenpick.src} style={{ width: "13%" }} />
          <img alt="swissotel" src={jeddah.src} style={{ width: "13%" }} />
          <img alt="anyware" src={caffe.src} style={{ width: "13%" }} />
          <img alt="caf" src={caf.src} style={{ width: "13%", height: "10%" }} />
          {/* <img alt="millenium" src={reif.src} style={{ width: "13%" }} />
          <img alt="millenium" src={GCS.src} style={{ width: "13%" }} />
          <img alt="swissotel" src={capital.src} style={{ width: "13%" }} />
          <img alt="anyware" src={adnec.src} style={{ width: "13%" }} />
          <img alt="swissotel" src={zahrtlebanon.src} style={{ width: "13%" }} />
          <img alt="swissotel" src={bosporus.src} style={{ width: "13%" }} />
          <img alt="caf" src={caf.src} style={{ width: "13%", height: "10%" }} /> */}
        </Box>
        </Section>
          </Box>
      </Container>

      {allItems.map((item, index) => (
        <FeaturedCard key={index} index={index} items={item} />
      ))}
    </Box>
  );
};

export default HomeFeatures;
