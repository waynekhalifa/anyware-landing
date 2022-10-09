import Logo from "../Logo";
import { Box, Button, Grid, Typography } from "@mui/material";

import logo from "@images/anywarelogo.png";

const Survey: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={9} sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            width: "100%",
            transform: "translateY(-50%)",
            p: 20,
          }}
        >
          <Grid container columnSpacing={4}>
            <Grid item xs={12} md={2}>
              <Logo imgSrc={logo} />
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography variant="h5" paragraph>
                Welcome Nada Ahmed,
              </Typography>
              <Typography paragraph>
                Our promise is to make your life much easier.This will only take
                a minuteLet's
              </Typography>
              <Button
                disableElevation
                variant="contained"
                size="large"
                type="submit"
                sx={{
                  textTransform: "none",
                  position: "relative",
                  height: 56,
                }}
              >
                {`Let's do it!`}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            backgroundColor: "primary.light",
            height: "100vh",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              backgroundColor: "primary.main",
              position: "absolute",
              width: "30px",
              height: "30px",
              borderRadius: "30px",
              top: "30px",
              right: "60px",
            }}
          />
          <Box
            sx={{
              backgroundColor: "primary.main",
              position: "absolute",
              width: "250px",
              height: "250px",
              borderRadius: "250px",
              top: "60px",
              left: "-125px",
            }}
          />
          <Box
            sx={{
              backgroundColor: "primary.main",
              position: "absolute",
              width: "25px",
              height: "25px",
              borderRadius: "25px",
              top: "350px",
              left: "30px",
            }}
          />
          <Box
            sx={{
              backgroundColor: "primary.main",
              position: "absolute",
              width: "15px",
              height: "15px",
              borderRadius: "15px",
              bottom: "350px",
              right: "40px",
            }}
          />
          <Box
            sx={{
              backgroundColor: "primary.main",
              position: "absolute",
              width: "130px",
              height: "130px",
              borderRadius: "130px",
              bottom: "150px",
              right: "-65px",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Survey;
