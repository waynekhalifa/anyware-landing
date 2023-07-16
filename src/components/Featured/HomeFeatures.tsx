import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import Section from "../UI/Section";
import axios from "axios";
import ReactGA from "react-ga";
import Video from "./Video";
import BannerForm from "./BannerForm";
import Partners from "./Partners";
import { useEffect, useState } from "react";
import bannerBg from "../../../public/images/home-header-bg.png";
import millenium from "../../../public/images/millenium.svg";
import movenpick from "../../../public/images/Movenpick_logo_Hotels_Resorts 1.png";
import jeddah from "../../../public/images/Jeddah Living 316X71 F 1.png";
import caffe from "../../../public/images/ni-caffe-removebg-preview 1.png";
import caf from "../../../public/images/CAF.png";
import FeaturedCard from "./FeaturedCard";
import { allItems } from "@/constants/features";
interface StateProps {
  videoKey: string;
}

const initialState: StateProps = {
  videoKey: new Date().toISOString(),
};

const HomeFeatures: React.FC = () => {
  ReactGA.initialize("UA-267753856-1");
  ReactGA.set({ userId: "1241123459812" });
  const [state, setState] = useState(initialState);
  const { videoKey } = state;

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
    <Box sx={{ overflow: "hidden", width: "100%", position: "relative" }}>
      <img
        src={bannerBg.src}
        style={{
          content: '""',
          display: "block",
          position: "absolute",
          top: "-42.016vh",
          left: "calc(65vw)",
          width: "37.1vw",
          height: "135.43vh",
          //webkitTransform: "translate(0,-28.5%)",
          // msTransform: "translate(0,-28.5%)",
          // transform: "translate(0,-28.5%)",
          transition: "unset",
          zIndex: -12,
        }}
      />
      <Container sx={{ pt: 10 }}>
        <Section>
          <Grid container>
            <Grid item xs={12} md={6}>
              <BannerForm />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ span: { display: "block !important" } }}
            >
              <Video key={videoKey} />
            </Grid>
          </Grid>
        </Section>
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
            JOIN 800,000+ HIGHLY PRODUCTIVE TEAMS
          </Typography>
          {/* <Grid container justifyContent={"center"}>
            <Partners />
          </Grid> */}
                  <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <img alt="millenium" src={millenium.src} style={{ width: "18%" }} />
          <img alt="millenium" src={movenpick.src} style={{ width: "18%" }} />
          <img alt="swissotel" src={jeddah.src} style={{ width: "18%" }} />
          <img alt="anyware" src={caffe.src} style={{ width: "18%" }} />
          <img alt="caf" src={caf.src} style={{ width: "18%", height: "10%" }} />
        </Box>
        </Section>
      </Container>

      {allItems.map((item, index) => (
        <FeaturedCard key={index} index={index} items={item} />
      ))}
    </Box>
  );
};

export default HomeFeatures;
