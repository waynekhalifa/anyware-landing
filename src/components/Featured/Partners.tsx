import Image from "next/image";
import { Box, Grid } from "@mui/material";

import act from "@images/act.webp";
import oracle from "@images/oracle.webp";
import raya from "@images/raya.webp";

const Partners: React.FC = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent={"space-between"}
      sx={{ maxWidth: 300 }}
    >
      {/* <Box style={{width:80 , height:20,position:'relative'}}>
      <Image src={oracle} alt="oracle" layout="fill"  objectFit='contain' />
      </Box> */}
      <Box style={{width:170 , height:44,position:'relative'}}>
      <Image src={act} alt="oracle" layout="fill"  objectFit='contain' />
      </Box>
      {/* <Box style={{width:70 , height:17,position:'relative'}}>
      <Image src={raya} alt="oracle" layout="fill"  objectFit='contain' />
      </Box> */}
    </Grid>
  );
};

export default Partners;
