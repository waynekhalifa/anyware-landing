import { motion } from "framer-motion";
import { Box, Button, InputBase, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import catcherBg from "@images/catcher-bg.svg";
import useApp from "@/hooks/useApp";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useIsMobile from '@/hooks/useIsMobile';
interface StateProps {
  email: string;
  errMessage: string;
}

const initialState: StateProps = { email: "", errMessage: "" };

const Catcher: React.FC = () => {
  const [state, setState] = useState(initialState);
  const { push } = useRouter();
  const { closeModal } = useApp();
  const {width, isMobile} = useIsMobile()
  const { email, errMessage } = state;

  const handleClick = () => {
    if (email.length === 0) {
      setState({ ...state, errMessage: "Please enter a valid email address" });
    } else {
      push(`/login?email=${email}`);
    }
  };

  return (
    <motion.div
      initial={{
        background: `url(${catcherBg.src}) no-repeat -50% 50%/890px`,
      }}
      animate={{
        background: `url(${catcherBg.src}) no-repeat -10% 50%/890px`,
      }}
      transition={{ duration: 0.1, delay: 0.1 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: isMobile ? "center":"flex-start",
        textShadow: "0 1px 1px rgb(0 0 0 / 20%)",
        position: "relative",
        minWidth: isMobile ? "200px":"400px",
        
        width: "100%",
        height: "100%",
        padding: "20px 80px 20px 80px",
        background: `url(${catcherBg.src}) no-repeat -10% 50%/890px`,
        color: "#fff",
        flexDirection:isMobile?'column':'row',
        
        
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "20px",
          right: "20px",
          width: "50px",
          height: "50px",
          border: "3px solid #fff",
          borderRadius: "50%",
          zIndex: "50000",
          webkitTransform: "rotate(45deg)",
          msTransform: "rotate(45deg)",
          transform: "rotate(45deg)",
          cursor: "pointer",
        }}
        onClick={closeModal}
      >
        <CloseIcon
          sx={{
            transform: "rotate(45deg)",
            "&:hover": {
              transform: "rotate(315deg)",
              transition: "all 0.3s ease-in-out",
            },
          }}
          fontSize="large"
        />
      </Box>
      <Typography fontWeight={600}  sx={{marginBottom:isMobile?5:0}}>
        <Typography component="span" variant="h3">
          <b>Sign up for FREE</b>
        </Typography>
        <br />
        <Typography component="span" variant="h5">
          and start using Anyware in seconds!
        </Typography>
      </Typography>
      <motion.div
        initial={{ opacity: 0, left: "10%", position: "relative"  }}
        animate={{ opacity: 1, left: 0 }}
        transition={{ duration: 0.1, delay: 0.2 }}
        style={{alignItems:'center',display:'flex'}}
        
      >
        <Box
          sx={{
            position: "relative",
            background: "rgba(255,255,255,.5)",
            boxShadow: "0 13.373px 75.66px rgb(38 33 74 / 50%)",
            borderRadius: "22.78px",
            padding: "6px",
            margin: isMobile ? 0:"0 0 0 50px",
            width: "100%",
            maxWidth: isMobile? width-50 : "520px",
            
          }}
        >
          <Box
            sx={{
              display: "flex",
              borderRadius: "18.778px",
              background: "#fff",
              padding: "10px",
              webkitBoxPack: "justify",
              msFlexPack: "justify",
              justifyContent: "space-between",
              
            }}
          >
            <InputBase
              fullWidth
              type="email"
              placeholder={isMobile ? "Email/phone number":"Enter your email or phone number"}
              value={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setState({
                  ...state,
                  email: event.target.value,
                  errMessage: "",
                })
              }
              sx={{
                display: "block",
                height: "50px",
                width: "300px",
                border: "none",
                padding: "12px 15px 10px 23px",
                color: "#292d34",
                borderRadius: "5px",
                marginRight: "13px",
              }}
            />
            <Button
              disableElevation
              variant="contained"
              size="large"
              sx={{
                textTransform: "none",
                boxShadow: 12,
                "&:hover": { boxShadow: 12 },
              }}
              onClick={handleClick}
            >
              Get started
            </Button>
          </Box>

          {errMessage.length > 0 && (
            <Typography
              sx={{
                position: "absolute",
                top: "100%",
                left: "0",
                width: "100%",
                padding: "20px",
                letterSpacing: ".5px",
                color: "common.white",
              }}
            >
              {errMessage}
            </Typography>
          )}
        </Box>
      </motion.div>
    </motion.div>
  );
};

export default Catcher;
