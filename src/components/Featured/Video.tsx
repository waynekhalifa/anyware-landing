import { motion } from "framer-motion";
import Image from "next/image";
import { Box } from "@mui/material";

import videoPlaceholder from "@images/banner.png";
import onlineOrdering from "@images/online-ordering.png";
import menuItemOne from "@images/menu-item-1.png";
import menuItemTwo from "@images/menu-item-2.png";
import menuItemThree from "@images/menu-item-3.png";

const Video: React.FC = () => {
  return (
    <Box sx={{ position: "relative", zIndex: 10 }}>
      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          boxShadow:
            "0px 7px 8px -4px rgb(0 0 0 / 20%), 0px 12px 17px 2px rgb(0 0 0 / 14%), 0px 5px 22px 4px rgb(0 0 0 / 12%",
        }}
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
          duration: 8,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
          repeat: Infinity,
        }}
      >
        <Image src={videoPlaceholder} alt="video placeholder" />
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            zIndex: 11,
            right: -96,
          }}
          initial={{
            opacity: 0,
            transform: "translateY(-100%)",
          }}
          animate={{
            opacity: 1,
            transform: "translateY(-50%)",
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <Image src={onlineOrdering} alt="Online Ordering" />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            top: "30%",
            zIndex: 12,
            right: 16,
          }}
          initial={{
            opacity: 0,
            transform: "translateY(-100%)",
          }}
          animate={{
            opacity: 1,
            transform: "translateY(-50%)",
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 4.5,
          }}
        >
          <Image src={menuItemOne} alt="Menu Item One" />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            zIndex: 12,
            right: 16,
          }}
          initial={{
            opacity: 0,
            transform: "translateY(-100%)",
          }}
          animate={{
            opacity: 1,
            transform: "translateY(-50%)",
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 3.5,
          }}
        >
          <Image src={menuItemTwo} alt="Menu Item Two" />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            top: "70%",
            zIndex: 12,
            right: 16,
          }}
          initial={{
            opacity: 0,
            transform: "translateY(-100%)",
          }}
          animate={{
            opacity: 1,
            transform: "translateY(-50%)",
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 2.5,
          }}
        >
          <Image src={menuItemThree} alt="Menu Item Two" />
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Video;
