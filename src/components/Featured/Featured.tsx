import { Box, Container, Grid, Typography } from "@mui/material";
import Section from "../UI/Section";

import Video from "./Video";
import BannerForm from "./BannerForm";
import Partners from "./Partners";

const Featured: React.FC = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Container sx={{ pt: 10 }}>
        <Section>
          <Grid container>
            <Grid item xs={12} md={6}>
              <BannerForm />
            </Grid>
            <Grid item xs={12} md={6}>
              <Video />
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
