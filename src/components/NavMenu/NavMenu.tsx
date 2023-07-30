import {
  Button,
  Container,
  List,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Grid,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMenu from "@/hooks/useMenu";
import Link from "../UI/Link";
import { MenuItem1 } from "@/services/menu";
import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import MuiMenuItem from "@mui/material/MenuItem";
import Menuitem from "./MenuItem";
import useIsMobile from "@/hooks/useIsMobile";
import useApp from "@/hooks/useApp";

const NavMenu: React.FC = () => {
  const { menusListing } = useMenu("menus", "menu");
  const [open, setOpen] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleCloseAnchor = () => {
    setAnchorEl(null);
    setMobileMenuOpen(false);
  };
  const { openModal } = useApp();

  const handleClickContact = () => {
    openModal({ modalID: "contact" });
  };
  const [loading, setLoading] = useState(false);
  const { isMobile } = useIsMobile();

  return isMobile ? (
    <Box style={{ marginRight: 20, display: "flex" }}>
      <Button
        variant="contained"
        sx={{
          textTransform: "capitalize",
          boxShadow: 3,
          borderColor: "primary.light",
          marginRight: 2,
        }}
        onClick={handleClickContact}
      >
        <Typography style={{ fontSize: 15 }}>contact sales</Typography>
      </Button>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={handleClickAnchor}
      >
        {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}{" "}
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseAnchor}
        PaperProps={{
          style: {
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            transform: "translateY(2rem)",
            backgroundColor: "white",
            overflowY: "auto",
            maxHeight: "90vh",
            minWidth: "102vw",
            marginLeft: "5%",
          },
        }}
      >
        {menusListing.map((menu: MenuItem1, index: number) => (
          <Container key={index}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "3%",
              }}
            >
              <Button
                key={menu.id}
                component="li"
                disableRipple
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
                  marginBottom: 5,
                  width: "100%",
                }}
              >
                <Typography style={{ fontWeight: "bolder" }}>
                  {menu.name}
                </Typography>
              </Button>
              {menu.children.length > 0 && (
                <KeyboardArrowDownIcon
                  onClick={() => handleClick(menu.name)}
                  fontSize="small"
                  style={{
                    transform: open === menu.name ? "rotate(180deg)" : "",
                    transition: "transform 0.5s",
                  }}
                />
              )}
            </Box>

            {open === menu.name && (
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "5%",
                  marginTop: -30,
                }}
              >
                {menu.children.map((child: any, index: number) => (
                  //  loading ? <h3>loading...</h3> :
                  <Link
                    key={index}
                    href={child.path}
                    underline="none"
                    color={"inherit"}
                  >
                    <Button
                      sx={{
                        width:'100%',
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
                      - {child.name}
                    </Button>
                  </Link>
                ))}
              </Box>
            )}
          </Container>
        ))}
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            columnGap: "2vw",
            rowGap: "10vw",
            margin: "5%",
          }}
        >
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              boxShadow: 6,
              "&:hover": {
                backgroundColor: "primary.light",
                borderColor: "primary.light",
              },
            }}
          >
            <Typography style={{ fontSize: 15 }}>Login</Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              boxShadow: 6,
              "&:hover": {
                backgroundColor: "primary.light",
                borderColor: "primary.light",
              },
            }}
            onClick={handleClickContact}
          >
            <Typography style={{ fontSize: 15 }}>contact sales</Typography>
          </Button>
        </Box>
      </Menu>
    </Box>
  ) : (
    menusListing.map((menu: MenuItem1, index: number) => (
      <Container key={index} style={{}}>
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
                marginTop: "0.5rem",
              }}
            >
              {menu.children.map((child: any, index: number) =>
                loading ? (
                  <h3>loading...</h3>
                ) : (
                  <Link
                    href={child.path}
                    underline="none"
                    style={{ width: "100%" }}
                    color={"inherit"}
                  >
                    <Button
                      key={index}
                      sx={{
                        width: "100%",
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
                      {child.name}
                    </Button>
                  </Link>
                )
              )}
            </Box>
          </>
        )}
      </Container>
    ))
  );
};

export default NavMenu;
