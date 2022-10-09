import { Box, Button, InputBase, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import catcherBg from "@images/catcher-bg.svg";
import useApp from "@/hooks/useApp";
import { useRouter } from "next/router";

const Catcher: React.FC = () => {
  const { push } = useRouter();
  const { modalContent, closeModal } = useApp();

  const handleClick = () => {
    closeModal();
    push("/personal-info");
  };

  return (
    <Box
      sx={{
        display: "flex",
        webkitBoxAlign: "center",
        msFlexAlign: "center",
        alignItems: "center",
        webkitBoxPack: "start",
        msFlexPack: "start",
        justifyContent: "flex-start",
        textShadow: "0 1px 1px rgb(0 0 0 / 20%)",
        position: "relative",
        minWidth: "400px",
        width: "100%",
        height: "100%",
        padding: "20px 80px 20px 80px",
        background: `url(${catcherBg.src}) no-repeat -10% 50%/890px`,
        color: "#fff",
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
      <Typography fontWeight={600}>
        <Typography component="span" variant="h3">
          <b>Sign up for FREE</b>
        </Typography>
        <br />
        <Typography component="span" variant="h5">
          and start using ClickUp in seconds!
        </Typography>
      </Typography>
      <Box
        sx={{
          position: "relative",
          background: "rgba(255,255,255,.5)",
          boxShadow: "0 13.373px 75.66px rgb(38 33 74 / 50%)",
          borderRadius: "22.78px",
          padding: "6px",
          margin: "0 0 0 50px",
          width: "100%",
          maxWidth: "520px",
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
            placeholder="Enter your email or phone number"
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
        <div
          data-error-mail-catcher-step1
          className="mail-catcher-form__error"
          style={{ display: "none" }}
        >
          Please enter a valid email address
        </div>
      </Box>
    </Box>
  );
};

export default Catcher;
