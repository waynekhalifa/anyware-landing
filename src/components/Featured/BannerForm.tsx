import useApp from "@/hooks/useApp";
import useUpdating from "@/hooks/useUpdating";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import CustomLoader from "../UI/CustomLoader";
import Partners from "./Partners";

interface StateProps {
  email: string;
}

const initialState: StateProps = { email: "" };

const BannerForm: React.FC = () => {
  const [state, setState] = useState(initialState);
  const { push } = useRouter();
  const { openModal } = useApp();
  const { updating, changeUpdating } = useUpdating();
  const { email } = state;

  const handleClick = async () => {
    changeUpdating(true);

    if (email.length === 0) {
      changeUpdating(false);
      openModal({ modalID: "catcher", modalContent: "login form" });
    } else {
      setTimeout(() => {
        changeUpdating(false);
        push(`/login?email=${email}`);
      }, 1000);
    }
  };

  return (
    <>
      <Typography component="h1" variant="h3" fontWeight={700} sx={{ mb: 4 }}>
        All in one hospitality
        <br />
        digitization platform
      </Typography>
      <Typography variant="body2" fontWeight={500} sx={{ mb: 4 }}>
        {`Online Ordering, Table Reservation, Call Center, Rewarding Loyalty Solution & more.`}
      </Typography>
      <Box sx={{ mb: 8 }}>
        <Box sx={{ mb: 4 }}>
          <TextField
            placeholder={"Enter your email address or phone number"}
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setState({ ...state, email: e.target.value })
            }
            sx={{
              minWidth: 400,
              input: { p: 2 },
            }}
          />
        </Box>
        <Button
          disableElevation
          variant="contained"
          size="large"
          sx={{
            textTransform: "none",
            boxShadow: 12,
            "&:hover": { boxShadow: 12 ,  backgroundColor: "primary.light",
            borderColor: "primary.light"},
            position: "relative",
            width: 152,
            height: 56,
            
          }}
          onClick={handleClick}
        >
          {updating ? <CustomLoader /> : "Get Started"}
        </Button>
      </Box>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Trusted by
      </Typography>
      <Partners />
    </>
  );
};

export default BannerForm;
