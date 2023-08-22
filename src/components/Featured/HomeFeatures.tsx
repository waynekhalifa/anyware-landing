import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import ReactGA from "react-ga";
import { useCallback, useEffect, useState } from "react";
import bannerBg from "@images/home-header-bg.webp";
import millenium from "@images/millenium.png";
import movenpick from "@images/Movenpick_logo_Hotels_Resorts 1.webp";
import jeddah from "@images/Jeddah Living 316X71 F 1.webp";
import caffe from "@images/ni-caffe-removebg-preview 1.webp";
import caf from "@images/CAF.webp";

import FeaturedCard from "./FeaturedCard";
import { allItems } from "@/constants/features";
import useIsMobile from "@/hooks/useIsMobile";
import { useRouter } from "next/router";
import { Trackpathforanalytics, trackButtonclick } from "Trackpathforanalytics";
import HomeSlider from "../HomeSlider/HomeSlider";
import NextImage from "next/image";
import { getAnalytics, logEvent, setUserId } from "@firebase/analytics";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface StateProps {
  videoKey: string;
}

const initialState: StateProps = {
  videoKey: new Date().toISOString(),
};

const HomeFeatures: React.FC = () => {
  const [state, setState] = useState(initialState);
  const { videoKey } = state;
  const { isMobile, width } = useIsMobile();
  const router = useRouter();
  const pathname = "adhaaaaaaaaam";
  const search = String(router.query.search);
  const [clicked,setClicked] = useState(0)

  const analytics = useCallback(() => {
    Trackpathforanalytics({
      path: pathname,
      search: search,
      title: pathname?.split("/")[1],
    });
  }, [pathname, search]);

  useEffect(() => {
    analytics();
  }, [analytics]);

  useEffect(() => {
    const analytics = getAnalytics();
    setUserId(analytics, "user1");
    logEvent(analytics, "page_view", {
      user_id: "user1",
      page_name: "/",
      num: "01123204458",
    });
  }, []);

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
  const venues = [millenium, movenpick, jeddah, caffe, caf];
  const [tabClicked,setTabClicked] = useState(false)
  return (
    <Box
      sx={{ overflow: "hidden", width: "100%", position: "relative", flex: 1 }}
    >
      <Box
        sx={{
          content: '""',
          display: "block",
          position: "absolute",
          top: "-42.016vh",
          left: "calc(65vw)",
          width: isMobile ? "80.1vw" : "37.1vw",
          height: isMobile ? "100vh" : "135.43vh",
          transition: "unset",
          zIndex: -12,
        }}
      >
        <NextImage
          src={bannerBg.src}
          layout="fill"
          style={{
            content: '""',
            display: "block",
            position: "absolute",
            transition: "unset",
            zIndex: -12,
          }}
        />
      </Box>
      <Container
        sx={
          isMobile
            ? { pt: 12, minWidth: "90%", margin: 0 }
            : { pt: 15, minWidth: "100%" }
        }
      >
        {/*-------------------- SLIDER GOES HERE ------------------------*/}

        {!isMobile ? (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                minHeight: "100%",
                
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton
                name="back button"
                onClick={()=>setClicked(-Math.abs(clicked)-1)}

              >
                <ChevronLeft sx={{width:40,height:40}} />
              </IconButton>
            </div>
              
            <HomeSlider clicked={clicked} />
              

            <div
              style={{
                minHeight: "100%",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
            <IconButton
              name="next button"
              onClick={()=>setClicked(Math.abs(clicked)+1)}

            >
              <ChevronRight sx={{width:40,height:40}}/>
            </IconButton>
            </div>
          </div>
        ) : (
          <HomeSlider />
        )}

        <Box style={{ marginTop: "30px", padding: 0, marginBottom: "80px" }}>
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
          <Grid
            xs={12}
            container
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            {venues.map((venue, index) => {
              return (
                <Grid
                  key={index}
                  xs={isMobile ? 6 : undefined}
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <NextImage
                    alt="Banner background"
                    layout="fixed"
                    width="260px"
                    height="130px"
                    objectFit="contain"
                    src={venue.src}
                    style={{ opacity: "1" }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>

      {allItems.map((item, index) => (
        <FeaturedCard key={index} index={index} items={item} clicked={tabClicked} setClicked={setTabClicked} />
      ))}
    </Box>
  );
};

export default HomeFeatures;
