import { motion } from "framer-motion";
import Image from "next/image";
import { Box, Grid } from "@mui/material";

import videoPlaceholder from "@images/banner.webp";
import onlineOrdering from "@images/online-ordering.webp";
import menuItemOne from "@images/menu-item-1.webp";
import menuItemTwo from "@images/menu-item-2.webp";
import menuItemThree from "@images/menu-item-3.webp";
import useIsMobile from "@/hooks/useIsMobile";
import bannerform1 from "@images/bannerform1.webp";
import bannerform3 from "@images/bannerform3.webp";

const Video: React.FC<{ SlidePage?: Number }> = ({ SlidePage }) => {
  const { isMobile } = useIsMobile();

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
        {SlidePage===1?
        <Image src={videoPlaceholder} alt="video placeholder" />
        :SlidePage===2?
        <Image src={bannerform1} alt="video placeholder" />
        :SlidePage===3&&
        <Image src={bannerform3} alt="video placeholder" />
        }
        { SlidePage===1&&
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
        }
        { SlidePage===1&&
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
        
        }
        { SlidePage===1&&
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
}
{ SlidePage===1&&
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
}
      </motion.div>
    </Box>
  );
};

export default Video;
