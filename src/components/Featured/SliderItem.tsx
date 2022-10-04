import { useDispatch } from "react-redux";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";

import { openModal } from "@/store/appSlice";
import Link from "../UI/Link";

interface Props {
  item: any;
}

const SliderItem: React.FC<Props> = ({ item }) => {
  const mobile = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal({ name: "joinUS" }));
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${mobile ? item.mob.src : item.image.src})`,
        height: { xs: `calc(100vh + 52px)`, sm: `calc(100vh + 52px)` },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover,100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          background: "rgba(0,0,0,0.4)",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          id="call-to-action"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "common.white",
            mt: { xs: -5, md: -20 },
          }}
        >
          <Typography align="center" variant="h3" fontWeight={700}>
            WELCOME TO
          </Typography>
          <Typography align="center" variant="h3" fontWeight={700} paragraph>
            ASTEN COLLEGE
          </Typography>
          <Typography align="center" textTransform={"uppercase"} sx={{ mb: 4 }}>
            Education Beyond Boundaries
          </Typography>
          <Button
            disableElevation
            variant="contained"
            size="large"
            sx={{ mb: 4 }}

            // onClick={handleClick}
          >
            <Link
              href="https://2w79fp3aee4.typeform.com/to/ouHggmMS"
              target={"_blank"}
              color={"common.white"}
              underline={"none"}
            >
              Join us
            </Link>
          </Button>
          <Box sx={{ maxWidth: 460 }}>
            <Typography align="center">
              Admissions open October 16th, 2022 for EYFS-Year 8.
            </Typography>
            <Typography align="center">School opens September 2023.</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SliderItem;
