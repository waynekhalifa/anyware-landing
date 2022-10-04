import Image from "next/image";
import { Box, Grid } from "@mui/material";

import britishcouncil from "@images/britishcouncil.png";
import pearson from "@images/pearson.png";
import cambridge from "@images/cambridge.png";

const partnersImages = [
  { id: 1, img: britishcouncil, width: "75%", height: 80, mb: 4 },
  { id: 6, img: cambridge, width: 280, height: 93, mb: 4 },
  { id: 2, img: pearson, width: 240, height: 80, mb: 0 },
];

const Accreditation: React.FC = () => {
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

export default Accreditation;
