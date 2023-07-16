import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Header from "../Header/Header";
import { Items } from "./TRSconstants";
import TRScard from "./TRScard";
import reif from "../../../public/images/reif.png";
import megumi from "../../../public/images/megumi.png";
import lexies from "../../../public/images/lexies.png";
import sachi1 from "../../../public/images/sachi1.png";
import sachi2 from "../../../public/images/sachi2.png";
import sachi3 from "../../../public/images/sachi3.png";
import kazoku from "../../../public/images/kazoku.png";
import useIsMobile from "@/hooks/useIsMobile";
import NextImage from "next/image";
import bannerBg from "../../../public/images/home-header-bg.png";

const TRS: React.FC = () => {
  const venues = [reif, megumi, lexies, sachi1, sachi2, sachi3, kazoku];
  const { isMobile, width } = useIsMobile();

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
        paddingTop: "120px",
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
        spacing={2}
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
            <TRScard index={0} items={Items[0]} />
          </Box>
        </Grid>

        <Grid
          spacing={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Grid xs={12}>
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
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            {venues.map((venue, index) => {
              return (
                <Grid key={index} xs={isMobile ? 5 : undefined}>
                  <NextImage
                    alt="Banner background"
                    layout="fixed"
                    width="150px"
                    height="60px"
                    src={venue.src}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        {Items.slice(1, Items.length).map((item, index) => (
          <Box
            key={index}
            style={{ width: "100%", minHeight: "50%", maxHeight: "100%" }}
          >
            <TRScard index={index} items={item} />
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default TRS;
