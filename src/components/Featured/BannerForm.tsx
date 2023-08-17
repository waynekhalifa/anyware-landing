import useApp from "@/hooks/useApp";
import useUpdating from "@/hooks/useUpdating";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import CustomLoader from "../UI/CustomLoader";
import Partners from "./Partners";
import useIsMobile from "@/hooks/useIsMobile";
import { getAnalytics, logEvent, setUserId } from "firebase/analytics";
import { Grid, IconButton } from "@mui/material";
import Video from "@/components/HomeSlider/Video";
import Image from "next/image";
import act from "@images/act.webp";
// import useFireBaseAnalysis from '@/hooks/useFireBaseAnalysis';

interface StateProps {
  email: string;
}

const initialState: StateProps = { email: "" };

const BannerForm = ({ bannerData, videoKey, SlidePage , Arrows} : any) => {
  const [state, setState] = useState(initialState);
  const { email } = state;

  const { push } = useRouter();
  const { openModal } = useApp();

  const { updating, changeUpdating } = useUpdating();

  const { width, isMobile } = useIsMobile();
  // const { app } = useFireBaseAnalysis()

  const handleClick = async () => {
    const analytics = getAnalytics();
    setUserId(analytics, "user1");
    logEvent(analytics, email, {
      user_id: "user1",
      eventHappened: "Get Started",
    });

    // const analytics = getAnalytics();
    // logEvent(analytics, 'Get Started Button');
    changeUpdating(true);

    if (email.length === 0) {
      changeUpdating(false);
      openModal({ modalID: "catcher", modalContent: "login form" });
    } else {
      setTimeout(() => {
        changeUpdating(false);

        // setUserId(analytics, "Test123");

        push(`/login?email=${email}`);
      }, 1000);
    }
  };

  return (
    <>
      <Typography
        component="h1"
        variant={isMobile ? "h5" : "h3"}
        fontWeight={700}
        sx={{ mb: isMobile ? (bannerData.index === 2 ? 0 : 2) : 2}}
      >
        {bannerData.title}
        {/* All in one hospitality
        <br />
        digitization platform */}
      </Typography>
      <Typography
        variant="body2"
        fontWeight={500}
        sx={{ mb: isMobile ? (bannerData.index === 2 ? 0 : 2) : 2 }}
      >
        {bannerData.description}
        {/* {`Online Ordering, Table Reservation, Call Center, Rewarding Loyalty Solution & more.`} */}
      </Typography>
      {isMobile && (
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            span: { display: "block !important" },
            transform: isMobile
                ? bannerData.index === 1 ? "scale(0.85)":"scale(0.7)"
              : "scale(1)",
            marginBottom:  isMobile ? bannerData.index === 2 ? 0 : 2 : 2,
            marginTop: isMobile ? bannerData.index===1 ? 5 :0 : 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Video key={videoKey} SlidePage={SlidePage} />
        </Grid>
      )}
      {isMobile && Arrows}
      <Box
        sx={
          isMobile
            ? {
                mb: 4,
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }
            : { mb: 8 }
        }
      >
        <Box sx={{ mb: 4 }}>
          <TextField
            placeholder={"Enter your email address or phone number"}
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setState({ ...state, email: e.target.value })
            }
            sx={{
              minWidth: 350,
              input: { p: 2 },
            }}
          />
        </Box>
        <Button
          disableElevation
          variant="contained"
          size="large"
          sx={{
            alignSelf: "center",
            textTransform: "none",
            boxShadow: 12,
            "&:hover": {
              boxShadow: 12,
              backgroundColor: "primary.light",
              borderColor: "primary.light",
            },
            position: "relative",
            width: 152,
            height: 56,
          }}
          onClick={handleClick}
        >
          {updating ? <CustomLoader /> : "Get Started"}
        </Button>
      </Box>
      {isMobile ? (
        <Box sx={{ alignSelf: "center", width: "100%", alignItems: "center" }}>
          <Typography
            component="h2"
            variant="h6"
            sx={{ mb: 2, textAlign: "center" }}
          >
            In partnership with
          </Typography>

          <Box
            style={{
              width: 170,
              height: 44,
              position: "relative",
              left: width / 2 - 85,
            }}
          >
            <Image src={act} alt="oracle" layout="fill" objectFit="contain" />
          </Box>
        </Box>
      ) : (
        <>
        <Typography
          component="h2"
          variant="h6"
          sx={{ mb: 2}}
        >
          In partnership with
        </Typography>
        <Partners />
        </>
      )}
     
    </>
  );
};

export default BannerForm;
