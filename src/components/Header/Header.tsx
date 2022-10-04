import { useState } from "react";
import { AppBar, Box, Container, Grid, useMediaQuery } from "@mui/material";

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const tablet = useMediaQuery("(min-width:600px)");

  return (
    <AppBar position="fixed" elevation={0} color="transparent">
      <Container>
        <Grid container justifyContent="space-between">
          <Box>
            <>Logo</>
            <>Main nav</>
          </Box>
          <Box>actions</Box>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Header;
