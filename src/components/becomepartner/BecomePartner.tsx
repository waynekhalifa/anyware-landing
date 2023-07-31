import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Header from "../Header/Header";
import {Items} from "./BecomePartnerConstants"
import useIsMobile from "@/hooks/useIsMobile";
import NextImage from "next/image";
import bannerBg from "../../../public/images/home-header-bg.png";
import Footer from "../Footer/Footer";
import millenium from "../../../public/images/millenium.png";
import movenpick from "../../../public/images/Movenpick_logo_Hotels_Resorts 1.png";
import jeddah from "../../../public/images/Jeddah Living 316X71 F 1.png";
import becomepartner from "../../../public/images/becomepartner.png";
import AnimatedTexts from "../animatedTexts/AnimatedTexts";
import FadingImages from "../fadingImages/FadingImages";
import TRScard from "../TRS/TRScard";
import caffe from "../../../public/images/ni-caffe-removebg-preview 1.png";
import caf from "../../../public/images/CAF.png";
import BecomePartnerCard from "./BecomePartnerCard";
const BecomePartner: React.FC = () => {
  const { isMobile, width } = useIsMobile();
  const venues = [millenium,movenpick, jeddah, caffe, caf];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        height: "100vh",
        position: "absolute",
        overflowX: "hidden",
        paddingTop: isMobile ? 20 : 120,
      }}
    >
      <Header />
     <BecomePartnerCard index={0} items={Items[0]} />
     <Grid xs={12} sx={{marginTop:isMobile?10:-10}}>
            <Typography
              color="text.secondary"
              align="center"
              variant="body2"
              fontWeight="bold"
              letterSpacing={1.2}
              paragraph
            >
              Join 100+ Highly Rated Hospitality Leaders
            </Typography>
          </Grid>
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
                <Grid key={index} xs={isMobile ? 5 : undefined} style={{alignItems:'center',display:'flex',justifyContent:'center'}}>
                  <NextImage
                    alt="Banner background"
                    layout="fixed"
                    width="280px"
                    height="140px"
                    objectFit="contain"
                    src={venue.src}
                    style={{opacity:'0.7'}}
                  />
                </Grid>
              );
            })}
          </Grid>
        
      <Footer/>
    </div>
  );
};

export default BecomePartner;
