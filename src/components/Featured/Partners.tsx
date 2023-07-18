import Image from "next/image";
import { Box, Grid } from "@mui/material";

import act from "@images/act.png";
import oracle from "@images/oracle.png";
import raya from "@images/raya.png";

const Partners: React.FC = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent={"space-between"}
      sx={{ maxWidth: 300 }}
    >
      <Box style={{width:80 , height:20,position:'relative'}}>
      <Image src={oracle} alt="oracle" layout="fill"  objectFit='contain' />
      </Box>
      <Box style={{width:70 , height:18,position:'relative'}}>
      <Image src={act} alt="oracle" layout="fill"  objectFit='contain' />
      </Box>
      <Box style={{width:70 , height:17,position:'relative'}}>
      <Image src={raya} alt="oracle" layout="fill"  objectFit='contain' />
      </Box>
    </Grid>
  );
};

export default Partners;
