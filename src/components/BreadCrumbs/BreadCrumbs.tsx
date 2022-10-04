import Link from "next/link";
import { List, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { secondaryMain } from "../../constants/colors";
import { useRouter } from "next/router";

interface Props {
  title: string;
  isArchive?: boolean;
  archiveTitle?: string;
  archiveSlug?: string;
}

const BreadCrumbs: React.FC<Props> = ({
  title,
  isArchive,
  archiveTitle,
  archiveSlug,
}) => {
  const { locale } = useRouter();
  const renderParent = () => {
    if (isArchive)
      return (
        <Button
          component="li"
          disableRipple
          endIcon={
            <ArrowForwardIosIcon
              fontSize="small"
              sx={{
                transform:
                  locale === "ar" ? "rotate(180deg) scale(1)" : "scale(1)",
              }}
            />
          }
          sx={{
            p: 0,
            textTransform: "capitalize",
            fontWeight: 300,
            color: "white",
            justifyContent: "flex-start",
            "&:hover": {
              background: "transparent",
              color: (theme) => secondaryMain(theme),
              a: { color: (theme) => secondaryMain(theme) },
            },
            "& .MuiButton-endIcon": { marginRight: "4px" },
            a: { fontSize: 24, color: "inherit", textDecoration: "none" },
            svg: { color: (theme) => secondaryMain(theme) },
          }}
        >
          <Link href={`/${archiveSlug!}`}>
            <a>{archiveTitle!}</a>
          </Link>
        </Button>
      );
  };

  return (
    <List disablePadding>
      <Button
        component="li"
        disableRipple
        endIcon={
          <ArrowForwardIosIcon
            fontSize="small"
            sx={{
              transform:
                locale === "ar" ? "rotate(180deg) scale(1)" : "scale(1)",
            }}
          />
        }
        sx={{
          p: 0,
          textTransform: "capitalize",
          fontWeight: 300,
          color: "white",
          justifyContent: "flex-start",
          "&:hover": {
            background: "transparent",
            color: (theme) => secondaryMain(theme),
            a: { color: (theme) => secondaryMain(theme) },
          },
          "& .MuiButton-endIcon": { marginRight: "4px" },
          a: { fontSize: 24, color: "inherit", textDecoration: "none" },
          svg: { color: (theme) => secondaryMain(theme) },
        }}
      >
        <Link href={"/"}>
          <a>Home</a>
        </Link>
      </Button>
      {renderParent()}
      <Button
        component="li"
        disableRipple
        sx={{
          p: 0,
          textTransform: "capitalize",
          fontWeight: 300,
          color: "white",
          justifyContent: "flex-start",
          fontSize: 24,
          cursor: "default",
        }}
      >
        {title}
      </Button>
    </List>
  );
};

export default BreadCrumbs;
