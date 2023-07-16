import { Button, Container } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useMenu from "@/hooks/useMenu";
import Link from "../UI/Link";
import { Box } from "@mui/material";

function MenuItem({ menu }: any) {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container>
      <Button
        key={menu.id}
        component="li"
        disableRipple
        endIcon={
          menu.children.length > 0 && <KeyboardArrowDownIcon onClick={handleClick} fontSize="small" />
        }
        // onClick={handleClick}
        onClick={handleClick}
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
            transform: open ? "rotate(180deg)" : "",
            transition:'transform 0.5s'
          },
        }}
      >
        {/* <Link href={menu.path} underline="none" color={"inherit"}> */}
        {menu.name}
        {/* </Link> */}
      </Button>
      {open && (
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
         <Button variant="contained" key={index}  sx={{ borderRadius:0 ,textTransform: "capitalize","&:hover": {
            backgroundColor: "primary.light",
            borderColor: "primary.light",
          },}}>
            {child.name}
         </Button>))}
        </Box>
      )}
    </Container>
  );
}

export default MenuItem;
