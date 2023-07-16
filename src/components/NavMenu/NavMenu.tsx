import { Button, Container, List, IconButton, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

import useMenu from "@/hooks/useMenu";
import Link from "../UI/Link";
import { MenuItem1 } from "@/services/menu";
import React, { useState } from "react";
import { Box } from '@mui/material';
import useIsMobile from "@/hooks/useIsMobile";


const NavMenu: React.FC = () => {
  const { isMobile } = useIsMobile();
  const { menusListing } = useMenu("menus", "menu");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <>
      {isMobile ? (
        <Box style={{marginRight:20}}>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
            >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {menusListing.map((menu: MenuItem1, index: number) => (
              <MenuItem key={index} onClick={handleClose}>
                <Link href={menu.path} underline="none" color={"inherit"}>
                  {menu.name}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      ) : (
        menusListing.map((menu: any , index:number) => (
          // <Menuitem key={index} menu={menu}/>
          <Container key={index}>
        <Button
          key={menu.id}
          component="li"
          disableRipple
          endIcon={
            menu.children.length > 0 && <KeyboardArrowDownIcon onClick={()=>handleClick(menu.name)} fontSize="small" />
          }
          // onClick={handleClick}
          onClick={()=>handleClick(menu.name)}
          sx={{
            textTransform: "capitalize",
            fontWeight: 600,
            color: "text.primary",
            justifyContent: "flex-start",
            p: "0px 16px",
            mr: 1,
            "&:hover": {
              backgroundColor: "transparent",
            
            },
            span: {
              transform: open === menu.name? "rotate(180deg)" : "",
              transition:'transform 0.5s'
            },
          }}
        >
          {/* <Link href={menu.path} underline="none" color={"inherit"}> */}
          {menu.name}
          {/* </Link> */}
        </Button>
        {open === menu.name && (
          <Box
            sx={{
              backgroundColor: "#fff",
              minWidth: "10%",
              display: "flex",
              flexDirection: "column",
              position:'absolute',
              boxShadow:4,
              borderRadius:'10px',
            }}
          >
           {menu.children.map((child:any, index:number)=>(
           <Button key={index}  sx={{ borderRadius:0 ,textTransform: "capitalize",}} >
            <Link href={child.path} underline="none" color={"inherit"}> 
              {child.name}
              </Link>
           </Button>))}
          </Box>
        )}
      </Container>
        ))
      )}
    </>
  );
};

export default NavMenu;
