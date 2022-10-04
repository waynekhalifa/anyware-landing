import { SyntheticEvent, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button, Grid, Link, List } from "@mui/material";

import DrawerHeader from "./DrawerHeader";
import { selectListing } from "@/store/pageSlice";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const NavMenu: React.FC<Props> = ({ open, setOpen }) => {
  const [expanded, setExpanded] = useState<string>("");
  const pages = useSelector(selectListing);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : "");
    };

  return (
    <Box
      id="main-navigation"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: open ? "calc(100vh - 52px)" : 0,
        maxHeight: open ? "calc(100vh - 52px)" : 0,
        opacity: open ? 1 : 0,
        zIndex: open ? (theme) => theme.zIndex.drawer + 1 : -1,
        backgroundColor: "common.white",
        transition: "all 0.2s ease-in-out",
      }}
    >
      <DrawerHeader open={open} setOpen={setOpen} />
      <List disablePadding>
        {pages.map((page: any) => (
          <Button
            key={page.id}
            component="li"
            disableRipple
            sx={{
              display: "block",
              textTransform: "capitalize",
              fontWeight: 400,
              color: "text.primary",
              justifyContent: "flex-start",
              p: 2,
              borderBottom: "1px solid",
              borderColor: "divider",
              "&:hover": {
                background: "transparent",
                color: "text.primary",
                a: { color: "text.primary" },
              },
            }}
          >
            <Link
              href={page.path}
              underline="none"
              color={"inherit"}
              sx={{ fontSize: "1.2rem" }}
            >
              {page.name}
            </Link>
          </Button>
        ))}
      </List>
      <Grid container justifyContent="center" sx={{ p: 3 }}>
        <Button
          variant="contained"
          size="large"
          disableElevation
          sx={{
            borderRadius: "50px",
            textTransform: "capitalize",
          }}
          {...({
            component: "a",
            href: "mailto:info@astencollege.com",
            target: "_blank",
          } as any)}
        >
          Enquire Now
        </Button>
      </Grid>
    </Box>
  );
};

export default NavMenu;
