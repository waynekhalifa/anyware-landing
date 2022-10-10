import { Box, Container, Grid, Typography } from "@mui/material";
import Section from "../UI/Section";

import Video from "./Video";
import BannerForm from "./BannerForm";
import Partners from "./Partners";
import { useEffect, useState } from "react";

interface StateProps {
  videoKey: string;
}

const initialState: StateProps = {
  videoKey: new Date().toISOString(),
};

const Featured: React.FC = () => {
  const [state, setState] = useState(initialState);
  const { videoKey } = state;

  useEffect(() => {
    const interval = setInterval(() => {
      setState({ ...state, videoKey: new Date().toISOString() });
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Container sx={{ pt: 10 }}>
        <Section>
          <Grid container>
            <Grid item xs={12} md={6}>
              <BannerForm />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ span: { display: "block !important" } }}
            >
              <Video key={videoKey} />
            </Grid>
          </Grid>
        </Section>
        <Section>
          <Typography
            color="text.secondary"
            align="center"
            variant="body2"
            fontWeight="bold"
            letterSpacing={1.2}
            paragraph
            sx={{ mt: 1 }}
          >
            JOIN 800,000+ HIGHLY PRODUCTIVE TEAMS
          </Typography>
          <Grid container justifyContent={"center"}>
            <Partners />
          </Grid>
        </Section>
      </Container>
    </Box>
  );
};

export default Featured;
