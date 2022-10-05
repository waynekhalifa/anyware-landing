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
        <Box sx={{ backgroundColor: "primary.light", height: "100vh" }} />
      </Grid>
    </Grid>
  );
};

export default Survey;
