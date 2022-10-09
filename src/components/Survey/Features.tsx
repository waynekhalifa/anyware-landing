import { Grid } from "@mui/material";
import FeatureCard from "./FeatureCard";

const Features: React.FC = () => {
  return (
    <Grid container columnSpacing={3} sx={{ mt: 4 }}>
      <Grid item xs={6} md={3} sx={{ mb: 3 }}>
        <FeatureCard feature={{ id: 1, name: "call center" }} />
      </Grid>
    </Grid>
  );
};

export default Features;
