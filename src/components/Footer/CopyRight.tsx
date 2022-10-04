import { Box, Container, Grid, Typography } from "@mui/material";

const CopyRight: React.FC = () => {
  return (
    <Box sx={{ pb: { xs: 2, md: 0 } }}>
      <Container>
        <Grid container justifyContent={"center"} sx={{ pb: 2 }}>
          <Typography sx={{ mr: { md: 2 } }}>
            Developed by Entrepreware.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography sx={{ mr: 2 }}>All Rights Reserved.</Typography>
            <Typography>&copy; {new Date().getFullYear()}</Typography>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default CopyRight;
