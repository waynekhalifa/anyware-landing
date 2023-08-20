import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Header from "../Header/Header";
import { Items } from "./CustomSoftwareconstants";
import CashlessWalletcard from "../CashlessWallet/CashlessWalletcard";
import useIsMobile from "@/hooks/useIsMobile";
import NextImage from "next/image";
import bannerBg from "@images/home-header-bg.webp";
import Footer from "../Footer/Footer";
import vodafonelogo from '@images/vodafonelogo.png';
import bakylogo from '@images/bakylogo.png';
import newGenIcon from '@images/newGenIcon.png';
import astenlogo from '@images/astenlogo.png';
import balancedlogo from '@images/balancedlogo.webp';
import edufylogo from '@images/edufylogo.png';
import entreprewarelogo from '@images/entreprewarelogo.png';

const CustomSoftware: React.FC = () => {
  const { isMobile, width } = useIsMobile();
  const venues = [entreprewarelogo,balancedlogo, bakylogo, newGenIcon, astenlogo, edufylogo,vodafonelogo];

  return (
    <div
      style={{
        overflow: "hidden", position: "relative" ,flex:1,
        paddingTop: isMobile ? 0 : 120,
      }}
    >
      <Header />
      <Box
        style={{
          top: "-100.016vh",
          left: "calc(80vw)",
          width: "57.1vw",
          height: "185.43vh",
          display: "block",
          position: "absolute",
        }}
      >
        <NextImage
          alt="Banner background"
          layout="fill"
          src={bannerBg.src}
          style={{
            zIndex: -12,
          }}
        />
      </Box>
      <Grid
        spacing={6}
        container
        style={{
          display: "flex",
          flexDirection: "column",
          margin: 0,
          width: "100%",
          padding: 0,
          alignItems: "center",
        }}
      >
        <Grid style={{ width: "100%", margin: 0, padding: 0 }} xs={12} md={12}>
          <Box
            style={{
              width: "100%",
              minHeight: "100%",
              maxHeight: "100%",
              margin: 0,
            }}
          >
            <CashlessWalletcard index={0} items={Items[0]} />
          </Box>
        </Grid>
       
        <Grid
          spacing={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding:0,
            marginBottom: isMobile?-20 :160,
            marginTop:isMobile?20:0,
          }}
        >
          <Grid xs={12} >
            <Typography
              color="text.secondary"
              align="center"
              variant="body2"
              fontWeight="bold"
              letterSpacing={1.2}
              paragraph
            >
              JOIN 800,000+ HIGHLY PRODUCTIVE TEAMS
            </Typography>
          </Grid>
          <Grid
            xs={12}
            container
            spacing={6}
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
                    width="150px"
                  height="80px"
                    objectFit="contain"
                    src={venue.src}
                    style={{opacity:'0.7'}}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        
        <Grid style={{ width: "100%", margin: 0, padding: 0 }} xs={12} md={12}>
          <Box
            style={{
              width: "100%",
              minHeight: "100%",
              maxHeight: "100%",
              margin: 0,
            }}
          >
            <CashlessWalletcard index={1} items={Items[1]} />
          </Box>
        </Grid>
      </Grid>
      <Footer/>
    </div>
  );
};

export default CustomSoftware;
