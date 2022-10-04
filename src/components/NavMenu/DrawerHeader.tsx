import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Logo from "../Logo";
import footerLogo from "@images/footer-logo.png";
import { primaryMain } from "../../constants/colors";
import { enableScroll } from "../../helpers/utils";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const DrawerHeader: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Box
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        display: "flex",
        justifyContent: "center",
        p: 2,
        position: "relative",
      }}
    >
      <Logo imgSrc={footerLogo} />
      <IconButton
        color="inherit"
        aria-label="close drawer"
        onClick={() => {
          enableScroll();
          setOpen(false);
        }}
        sx={{
          position: "absolute",
          top: 32,
          right: 8,
          color: (theme) => primaryMain(theme),
          transform: "translateY(-50%) scale(1.2)",
        }}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

export default DrawerHeader;
