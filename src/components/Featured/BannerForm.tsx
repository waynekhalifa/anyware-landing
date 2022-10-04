import useApp from "@/hooks/useApp";
import useUpdating from "@/hooks/useUpdating";
import { Box, Button, TextField, Typography } from "@mui/material";
import CustomLoader from "../UI/CustomLoader";
import Partners from "./Partners";

const BannerForm: React.FC = () => {
  const { openModal } = useApp();
  const { updating, changeUpdating } = useUpdating();

  const handleClick = async () => {
    changeUpdating(true);

    console.log("should save user input");

    setTimeout(() => {
      changeUpdating(false);

      openModal({ modalID: "login modal", modalContent: "login form" });
    }, 2000);
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
            autoFocus={false}
            defaultValue={""}
            sx={{
              minWidth: 400,
              input: { p: 2 },
            }}
          />
        </Box>
        <Button
          disableElevation
          color="secondary"
          variant="contained"
          size="large"
          sx={{
            textTransform: "none",
            boxShadow: 12,
            "&:hover": { boxShadow: 12 },
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
