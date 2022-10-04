import Image from "next/image";
import { Box, Grid } from "@mui/material";

import mete from "@images/mete.png";
import microsoft from "@images/microsoft.png";
import covey from "@images/covey.png";

const partnersImages = [
  { id: 7, img: mete, width: 101, height: 101, mb: 0 },
  { id: 2, img: microsoft, width: 281, height: 74, mb: 4 },
  { id: 4, img: covey, width: 266, height: 48, mb: 4 },
];

const Partners: React.FC = () => {
  return (
    <Grid container alignItems={"center"}>
      {partnersImages.map((partner: any) => (
        <Grid item xs={12} md={4} key={partner.id} justifyContent="center">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: partner.mb,
              img: {
                maxWidth: partner.width,
                height: "auto",
                display: "block",
                ml: "auto",
                mr: "auto",
              },
            }}
          >
            <Image src={partner.img} alt={`partner-${partner.id}`} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Partners;
