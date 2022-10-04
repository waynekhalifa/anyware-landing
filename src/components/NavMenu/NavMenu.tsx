import { Button, List } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import useMenu from "@/hooks/useMenu";
import Link from "../UI/Link";
import { MenuItem } from "@/services/menu";

const NavMenu: React.FC = () => {
  const { menusListing } = useMenu("menus", "menu");

  return (
    <List disablePadding>
      {menusListing.map((menu: MenuItem) => (
        <Button
          key={menu.id}
          component="li"
          disableRipple
          endIcon={
            menu.children.length > 0 && (
              <KeyboardArrowDownIcon fontSize="small" />
            )
          }
          sx={{
            textTransform: "capitalize",
            fontWeight: 600,
            color: "text.primary",
            justifyContent: "flex-start",
            p: "0px 16px",
            mr: 1,
            "&:hover": {
              backgroundColor: "transparent",
              span: {
                transform: "rotate(180deg)",
              },
            },
          }}
        >
          <Link href={menu.path} underline="none" color={"inherit"}>
            {menu.name}
          </Link>
        </Button>
      ))}
    </List>
  );
};

export default NavMenu;
