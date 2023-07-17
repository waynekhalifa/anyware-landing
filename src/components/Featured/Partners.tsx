import Image from "next/image";
import { Grid } from "@mui/material";

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
      <Image src={oracle} alt="oracle" width={70} height={14} />
      <Image src={act} alt="act" width={70} height={20} />
      <Image src={raya} alt="act" width={70} height={20} />
    </Grid>
  );
};

export default Partners;
