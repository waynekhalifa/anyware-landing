import Sidebar from "@/components/Sidebar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Section from "../Section";

interface Props {
  children: React.ReactNode;
  background?: string;
}

const TwoColumn: React.FC<Props> = ({ children, background }) => {
  return (
    <Section background={background ? background : "transparent"}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {children}
          </Grid>
          <Grid item xs={12} md={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default TwoColumn;
