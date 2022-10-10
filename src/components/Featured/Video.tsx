import Image from "next/image";
import { Box } from "@mui/material";

import videoPlaceholder from "@images/banner.svg";

interface VideoProps {}

const Video: React.FC<VideoProps> = ({}) => {
  return (
    <Box sx={{ position: "relative", zIndex: 10 }}>
      <Image src={videoPlaceholder} />
    </Box>
  );
};

export default Video;
