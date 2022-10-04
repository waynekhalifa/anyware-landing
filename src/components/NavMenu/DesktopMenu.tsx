import { useSelector } from "react-redux";
import { Box, Button, Link, List } from "@mui/material";

import { selectListing } from "@/store/pageSlice";

interface Props {
  marginTop?: boolean;
}

const DesktopMenu: React.FC<Props> = ({ marginTop }) => {
  const pages = useSelector(selectListing);

  return (
    <Box
      id="main-navigation"
      sx={{ display: { xs: "none", md: "block" }, ml: { md: 10 } }}
    >
      <List disablePadding sx={{ mt: marginTop ? 1 : 0 }}>
        {pages.map((page: any) => (
          <Button
            key={page.id}
            component="li"
            disableRipple
            sx={{
              display: "inline-flex",
              textTransform: "capitalize",
              fontWeight: 400,
              color: "white",
              justifyContent: "flex-start",
              mr: 2,
              mb: 2,
              p: 0,
              "&:hover": {
                background: "transparent",
                color: "white",
                a: { color: "white" },
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
    </Box>
  );
};

export default DesktopMenu;
