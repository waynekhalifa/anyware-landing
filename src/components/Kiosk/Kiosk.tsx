import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Header from "../Header/Header";
import { Items } from "./Kioskconstants";
import CashlessWalletcard from "../CashlessWallet/CashlessWalletcard";
import useIsMobile from "@/hooks/useIsMobile";
import NextImage from "next/image";
import bannerBg from "../../../public/images/home-header-bg.png";
import Footer from "../Footer/Footer";
import { getAnalytics, logEvent, setUserId, setUserProperties } from "@firebase/analytics";
import { useEffect } from "react";
import useFireBaseAnalysis from "@/hooks/useFireBaseAnalysis";
const Kiosk: React.FC = () => {
  const { isMobile, width } = useIsMobile();
    

  useEffect(() => {
    const analytics = getAnalytics();
    setUserProperties(analytics, { favorite_food: 'apples' });
    setUserId(analytics, "user1")
    logEvent(analytics, "page_view", { user_id: "user1", page_name: "kioskk" });
  }, []);
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
        overflowX:"clip",
        paddingTop: isMobile ? 20 : 120,
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
            marginBottom: isMobile?-20 :50,
            marginTop:isMobile?20:-50,
          }}
        >
        
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

export default Kiosk;
