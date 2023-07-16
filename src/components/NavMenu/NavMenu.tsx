import { Button, Container, List } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from '@mui/material/Menu';

import useMenu from "@/hooks/useMenu";
import Link from "../UI/Link";
import { MenuItem } from "@/services/menu";
import React, { useState } from "react";
import { Box } from '@mui/material';
import MuiMenuItem from '@mui/material/MenuItem';
import Menuitem from "./MenuItem";


const NavMenu: React.FC = () => {
  const { menusListing } = useMenu("menus", "menu");
  const [open, setOpen] = useState<string>("");
  const handleClick = (title:string) => {
    if(open!==title)
      setOpen(title)
    else
    setOpen("");
  };
  const handleClose = () => {
    setOpen("");
  };
  
  return (
      menusListing.map((menu: MenuItem , index:number) => (
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
  );
};

export default NavMenu;
