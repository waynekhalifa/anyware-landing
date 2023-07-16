import { Button, Container, List , IconButton  , Menu , MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

import useMenu from "@/hooks/useMenu";
import Link from "../UI/Link";
import { MenuItem1 } from "@/services/menu";
import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import MuiMenuItem from "@mui/material/MenuItem";
import Menuitem from "./MenuItem";
import useIsMobile from "@/hooks/useIsMobile";


const NavMenu: React.FC = () => {
  const { menusListing } = useMenu("menus", "menu");
  const [open, setOpen] = useState<string>("");

  const handleClick = (title: string) => {
    if (open !== title) setOpen(title);
    else setOpen("");
  };

  const handleClose = () => {
    setOpen("");
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClickAnchor = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAnchor = () => {
    setAnchorEl(null);
  };

  const [loading,setLoading]=useState(false);
  const { isMobile } = useIsMobile();

  return isMobile ?  <Box style={{marginRight:20}}>

  <IconButton
    edge="end"
    color="inherit"
    aria-label="menu"
    onClick={handleClickAnchor}
    >
    <MenuIcon />
  </IconButton>
  <Menu
    id="menu-appbar"
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={handleCloseAnchor}
  >
    {menusListing.map((menu: MenuItem1, index: number) => (
      <MenuItem key={index} onClick={handleCloseAnchor}>
        <Link href={menu.path} underline="none" color={"inherit"}>
          {menu.name}
        </Link>
      </MenuItem>
    ))}
  </Menu>
</Box> : menusListing.map((menu: MenuItem1, index: number) => (
    // <Menuitem key={index} menu={menu}/>
    <Container key={index}>
      <Button
        key={menu.id}
        component="li"
        disableRipple
        endIcon={
          menu.children.length > 0 && (
            <KeyboardArrowDownIcon
              onClick={() => handleClick(menu.name)}
              fontSize="small"
            />
          )
        }
        onClick={() => handleClick(menu.name)}
        sx={{
          textTransform: "capitalize",
          fontWeight: 600,
          color: "text.primary",
          justifyContent: "flex-start",
          p: "0px 16px",
          mr: 1,
          zIndex: 2,
          "&:hover": {
            backgroundColor: "transparent",
          },
          span: {
            transform: open === menu.name ? "rotate(180deg)" : "",
            transition: "transform 0.5s",
          },
        }}
      >
        {menu.name}
      </Button>

      {open === menu.name && (
        <>
          <div
            style={{
              width: 10000,
              height: 10000,
              left: 0,
              top: 0,
              position: "absolute",
              zIndex: 0,
            }}
            onClick={handleClose}
          ></div>
          <Box
            sx={{
              backgroundColor: "#fff",
              minWidth: "13%",
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              boxShadow: 4,
              borderRadius: "10px",
              zIndex: 2,
              marginTop:'0.5rem',
            
            }}
          >
            {menu.children.map((child: any, index: number) => (
             loading ? <h3>loading...</h3> :  <Button
                key={index}
                onClick={()=>{}}
                sx={{
                  borderRadius: 0,
                  textTransform: "capitalize",
                  color: "#000",
                  textAlign: "left",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  minHeight: "50px",
                  "&:hover": {
                    color: "primary.light",
                  },
                }}
              >
                <Link href={child.path} underline="none"  color={"inherit"}>
                  {child.name}
                </Link>
              </Button>
            ))}
          </Box>
        </>
      )}
    </Container>
  ));
};

export default NavMenu;