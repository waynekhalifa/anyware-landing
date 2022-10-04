import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { commonWhite, primaryLight } from "../../../constants/colors";

interface Props {
  text: string | undefined;
  link: string;
}

const FooterLink: React.FC<Props> = ({ text, link }) => {
  return (
    <ListItem
      disablePadding
      sx={{
        color: (theme) => theme.palette.common.white,
        pt: "4px",
        pb: "4px",
        textTransform: "capitalize",
        transition: "all ease-in .1s",
        "&:first-of-type": {
          pt: 0,
        },
        "&:last-of-type": {
          borderBottom: "none",
          pb: 0,
        },
        "&:hover": {
          color: (theme) => primaryLight(theme),
        },
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 24,
          color: (theme) => commonWhite(theme),
          ml: "-8px",
        }}
      >
        <ArrowForwardIosIcon sx={{ transform: "scale(.7)" }} />
      </ListItemIcon>
      <ListItemText
        data-testid="page-link"
        primary={
          <Link
            color={"inherit"}
            underline="none"
            {...({ component: "a", href: link } as any)}
          >
            {text}
          </Link>
        }
      />
    </ListItem>
  );
};

export default FooterLink;
