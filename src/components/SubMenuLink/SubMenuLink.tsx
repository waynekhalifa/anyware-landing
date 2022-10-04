import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { primaryMain, greyVariations } from "../../constants/colors";

interface Props {
  title: string;
  slug: string;
}

const MenuLink: React.FC<Props> = ({ title, slug }) => {
  return (
    <Box
      sx={{
        background: (theme) => greyVariations(theme, 100),
        height: 40,
        pl: "4px",
        display: "flex",
        mb: 2,
        textDecoration: "none",
        "&.active": {
          background: (theme) => primaryMain(theme),
        },
      }}
      {...({ component: "a", href: slug } as any)}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          background: (theme) => greyVariations(theme, 100),
          width: "100%",
          height: "100%",
          lineHeight: 0,
        }}
      >
        <ArrowForwardIosIcon
          sx={{
            transform: "scale(.6)",
            color: (theme) => primaryMain(theme),
          }}
        />
        <Typography color="text.secondary">{title}</Typography>
      </Box>
    </Box>
  );
};

export default MenuLink;
