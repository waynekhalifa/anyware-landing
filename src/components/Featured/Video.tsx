import { motion } from "framer-motion";
import Image from "next/image";

import videoPlaceholder from "@images/banner.svg";

interface VideoProps {}

const Video: React.FC<VideoProps> = ({}) => {
  return (
    <motion.div
      style={{ position: "relative", zIndex: 10 }}
      animate={{
        transform: [
          "perspective(400px) rotateX(0) rotateY(0deg) scale3d(1, 1, 1)",
          "perspective(400px) rotateX(0) rotateY(-4deg) scale3d(1, 1, 1)",
          "perspective(400px) rotateX(0) rotateY(0deg) scale3d(1, 1, 1)",
          "perspective(400px) rotateX(0) rotateY(4deg) scale3d(1, 1, 1)",
          "perspective(400px) rotateX(0) rotateY(0deg) scale3d(1, 1, 1)",
        ],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
        repeat: Infinity,
      }}
    >
      <Image src={videoPlaceholder} alt="video placeholder" />
    </motion.div>
  );
};

export default Video;
