import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Header from "../Header/Header";
import { programs, Items } from "./BecomePartnerConstants";
import useIsMobile from "@/hooks/useIsMobile";
import NextImage from "next/image";
import Footer from "../Footer/Footer";
import millenium from "@images/millenium.png";
import movenpick from "@images/Movenpick_logo_Hotels_Resorts 1.webp";
import jeddah from "@images/Jeddah Living 316X71 F 1.webp";
import caffe from "@images/ni-caffe-removebg-preview 1.webp";
import caf from "@images/CAF.webp";
import BecomePartnerCard from "./BecomePartnerCard";
import PartnerProgramCard from "./PartnerProgramCard";
import anywarepartner from "@images/anywarepartner.png";
import { useRef, useState } from "react";
import useUpdating from "@/hooks/useUpdating";
import useApp from "@/hooks/useApp";
import { useRouter } from "next/router";
import CustomLoader from "../UI/CustomLoader/CustomerLoader";
import { trackButtonclick } from "Trackpathforanalytics";

interface StateProps {
  email: string;
}

const initialState: StateProps = { email: "" };

const BecomePartner: React.FC = () => {
  const [state, setState] = useState(initialState);
  const { email } = state;

  const { isMobile, width } = useIsMobile();
  const venues = [millenium, movenpick, jeddah, caffe, caf];
  const [selected, setSelected] = useState(-1);
  const { push } = useRouter();
  const { openModal } = useApp();
  const textFieldRef = useRef<HTMLDivElement | null>(null); // Create a ref
  const GridRef = useRef<HTMLDivElement | null>(null); // Create a ref

  const { updating, changeUpdating } = useUpdating();

  // const { app } = useFireBaseAnalysis()

  const handleClick = async () => {
    // const analytics = getAnalytics();
    // logEvent(analytics, 'Get Started Button');

    openModal({
      modalID: "partner",
      modalContent:
        email +
        "$$" +
        (selected === 0 ? "Reseller Program" : "Affiliate Marketers"),
    });
  };
  const handleScroll = () => {
    if (isMobile) {
      if (GridRef !== null && GridRef.current !== null) {
        GridRef.current.scrollIntoView({
          behavior: "smooth", // You can use 'auto' for immediate scroll
          block: "start", // Scroll to the top of the element
        });
      }
    } else {
      if (textFieldRef !== null && textFieldRef.current !== null) {
        textFieldRef.current.scrollIntoView({
          behavior: "smooth", // You can use 'auto' for immediate scroll
          block: "start", // Scroll to the top of the element
        });
      }
    }
  };

  return (
    <>
      <Header />

      <div
        style={{
          overflow: "hidden",
          position: "relative",
          flex: 1,
          paddingTop: isMobile ? 20 : 120,
        }}
      >
        <Grid xs={12} sx={{ margin: 0, padding: 0, width: "100%" }}>
          <BecomePartnerCard
            index={0}
            items={Items[0]}
            handleScroll={handleScroll}
          />
        </Grid>
        <Grid xs={12} sx={{ marginTop: isMobile ? 5 : 10 }}>
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
          ref={textFieldRef}
        >
          {venues.map((venue, index) => {
            return (
              <Grid
                key={index}
                xs={isMobile ? 5 : undefined}
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <NextImage
                  alt="Banner background"
                  layout="fixed"
                  width="280px"
                  height="140px"
                  objectFit="contain"
                  src={venue.src}
                  style={{ opacity: "0.7" }}
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid
          container
          spacing={4}
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            flexDirection: "row",
            padding: 0,
            margin: 0,
          }}
          ref={GridRef}
        >
          {programs.map((program: any, index: number) => (
            <div
              key={index}
              style={{
                width: isMobile ? "100%" : "20%",
                minHeight: 400,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: isMobile ? 0 : 5,
              }}
              onClick={
                index === selected
                  ? () => setSelected(-1)
                  : () => setSelected(index)
              }
            >
              <PartnerProgramCard
                items={program}
                index={index}
                selected={selected}
              />
            </div>
          ))}

          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: selected === -1 ? "absolute" : "unset",
                right: -500,
                width: "25%",
                transition: "position 0.5s ease-in-out",
              }}
            >
              <Box
                sx={{
                  mb: 4,
                  mt: 4,
                  opacity: selected === -1 ? 0 : 1,

                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                <TextField
                  placeholder={"Enter your email address"}
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setState({ ...state, email: e.target.value })
                  }
                  sx={{
                    width: "100%",
                    input: { p: 2 },
                  }}
                />
              </Box>
              <Button
                disableElevation
                variant="contained"
                size="large"
                sx={{
                  opacity: selected === -1 ? 0 : 1,
                  transition: "opacity 0.5s ease-in-out",
                  alignSelf: "center",
                  textTransform: "none",
                  boxShadow: 12,
                  backgroundColor: "primary.main",
                  borderColor: "transparent",
                  fontSize: "1.3rem",
                  color: "white",
                  fontWeight: "500",

                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: "primary.light",
                    borderColor: "#fff",
                    boxShadow: "0px 0px 6px #eee",
                  },
                  position: "relative",
                  width: 250,
                  height: 56,
                }}
                onClick={handleClick}
              >
                {updating ? <CustomLoader /> : "Become a partner"}
              </Button>
            </Box>
          )}
        </Grid>

        {isMobile && (
          <>
            <Box
              sx={{
                mb: 4,
                mt: 4,
                opacity: selected === -1 ? 0 : 1,
                width: "100%",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",

                transition: "opacity 0.5s ease-in-out",
              }}
            >
              <TextField
                placeholder={"Enter your email address"}
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setState({ ...state, email: e.target.value })
                }
                sx={{
                  minWidth: "90%",
                  input: { p: 2 },
                  marginBottom: 5,
                }}
              />
              <Button
                disableElevation
                variant="contained"
                size="large"
                sx={{
                  opacity: selected === -1 ? 0 : 1,
                  transition: "opacity 0.5s ease-in-out",
                  alignSelf: "center",
                  textTransform: "none",
                  boxShadow: 12,
                  backgroundColor: "primary.main",
                  borderColor: "transparent",
                  fontSize: "1.3rem",
                  color: "white",
                  fontWeight: "500",

                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: "primary.light",
                    borderColor: "#fff",
                    boxShadow: "0px 0px 6px #eee",
                  },
                  position: "relative",
                  width: 250,
                  height: 56,
                }}
                onClick={handleClick}
              >
                {updating ? <CustomLoader /> : "Become a partner"}
              </Button>
            </Box>
          </>
        )}
        <Grid
          xs={isMobile ? 5 : undefined}
          style={{
            opacity: isMobile ? (selected === -1 ? 0 : 1) : 1,
            transition: "opacity 0.5s ease-in-out",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <NextImage
            alt="Banner background"
            layout="fixed"
            width="220px"
            height="100px"
            objectFit="contain"
            src={anywarepartner.src}
          />
        </Grid>
        <Footer />
      </div>
    </>
  );
};

export default BecomePartner;
