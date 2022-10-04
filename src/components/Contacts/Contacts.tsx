import { Link, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Contacts: React.FC = () => {
  return (
    <>
      <Link
        underline="none"
        color="inherit"
        variant="h6"
        href="tel:01033334460"
        sx={{
          position: "fixed",
          right: 0,
          top: "50%",
          transform: "translateY(-50)",
          zIndex: (theme) => theme.zIndex.drawer - 1,
          border: "1px solid",
          borderColor: "primary.main",
          width: 48,
          height: 48,
          backgroundColor: "primary.main",
          color: "common.white",
          cursor: "pointer",
          transition: "all 0.2s ease-in-out",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            backgroundColor: "primary.light",
            borderColor: "primary.light",
          },
          "&:hover p": {
            opacity: 1,
            left: -224,
          },
        }}
      >
        <Typography
          sx={{
            zIndex: -1,
            position: "absolute",
            top: -1,
            left: 0,
            color: "#fff",
            height: 48,
            opacity: "0",
            width: 240,
            display: "flex",
            alignItems: "center",
            transition: "all 0.2s ease-in-out",
            border: "1px solid",
            backgroundColor: "primary.light",
            borderColor: "primary.light",
            pl: 2,
          }}
        >
          Call 01033334460
        </Typography>
        <LocalPhoneIcon sx={{ transform: "scale(1.3)" }} />
      </Link>
      <Link
        underline="none"
        color="inherit"
        variant="h6"
        href="mailto:info@astencollege.com"
        target="_blank"
        sx={{
          position: "fixed",
          right: 0,
          top: "calc(50% + 49px)",
          transform: "translateY(-50)",
          zIndex: (theme) => theme.zIndex.drawer - 1,
          border: "1px solid",
          borderColor: "primary.main",
          width: 48,
          height: 48,
          backgroundColor: "primary.main",
          color: "common.white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <EmailIcon />
      </Link>
    </>
  );
};

export default Contacts;
