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
      sx={{ maxWidth: 408 }}
    >
      <Image src={oracle} alt="oracle" width={120} height={16} />
      <Image src={act} alt="act" width={120} height={48} />
      <Image src={raya} alt="act" width={120} height={32} />
    </Grid>
  );
};

export default Partners;
