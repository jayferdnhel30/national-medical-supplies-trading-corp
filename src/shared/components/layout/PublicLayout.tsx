import { Outlet, Link } from "react-router-dom";
import { useEffect, useState, type CSSProperties } from "react";
import { useAuth } from "../../hooks/useAuth";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../../../shared/styles/images/logo.png";

import "../../../shared/styles/main.css";
import "../../../shared/styles/main_less.css";

export default function PublicLayout() {
  const { user, logout } = useAuth();

  const themeGradient = "linear-gradient(135deg, #0F4C81 0%, #1976d2 100%)";
  const themeWhite = "#fff";

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 840,
  );

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 840;

      setIsMobile(mobile);

      if (!mobile) {
        setMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerLinkStyle: CSSProperties = {
    color: themeWhite,
    fontWeight: 700,
    textDecoration: "none",
  };

  const closeMenu = () => setMenuOpen(false);

  const borderTopStyle = {
    borderTop: "solid 1px rgba(255, 255, 255, 0.18)",
  };

  return (
    <div>
      <header>
        <div
          id="header"
          style={{
            width: "100%",
            display: "block",
            background: themeGradient,
            color: themeWhite,
          }}
        >
          {/* TOP HEADER */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* LOGO */}
            <h1 style={{ margin: "20px 0 20px 20px" }}>
              <Link
                to="/"
                id="logo"
                style={{
                  textDecoration: "none",
                  color: themeWhite,
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  borderBottom: "none",
                }}
              >
                <img
                  src={logo}
                  alt="National Medical Supplies and Trading Corporation"
                  style={{
                    width: "56px",
                    height: "56px",
                    objectFit: "contain",
                    flexShrink: 0,
                  }}
                />

                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: 1.05,
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: themeWhite,
                      letterSpacing: "0.5px",
                    }}
                  >
                    NATIONAL MEDICAL
                  </span>

                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "rgba(255,255,255,.85)",
                      letterSpacing: "0.6px",
                    }}
                  >
                    SUPPLIES AND TRADING CORP.
                  </span>
                </span>
              </Link>
            </h1>

            {/* DESKTOP ACTIONS */}
            {!isMobile && (
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  mr: 2,
                }}
                component="div"
              >
                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  sx={{
                    borderRadius: 3,
                    px: 3,
                    fontWeight: 700,
                    textTransform: "none",
                    color: "#0F4C81",
                    backgroundColor: themeWhite,

                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,.9)",
                    },
                  }}
                >
                  Register
                </Button>

                {user ? (
                  <Button
                    onClick={logout}
                    variant="outlined"
                    sx={{
                      borderRadius: 3,
                      px: 3,
                      fontWeight: 700,
                      color: themeWhite,
                      borderColor: "rgba(255,255,255,.6)",
                      textTransform: "none",

                      "&:hover": {
                        borderColor: themeWhite,
                        backgroundColor: "rgba(255,255,255,.1)",
                      },
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  <Button
                    component={Link}
                    to="/login"
                    variant="outlined"
                    sx={{
                      borderRadius: 3,
                      px: 3,
                      fontWeight: 700,
                      color: themeWhite,
                      borderColor: "rgba(255,255,255,.6)",
                      textTransform: "none",

                      "&:hover": {
                        borderColor: themeWhite,
                        backgroundColor: "rgba(255,255,255,.1)",
                      },
                    }}
                  >
                    Login
                  </Button>
                )}
              </Stack>
            )}

            {/* MOBILE HAMBURGER */}
            {isMobile && (
              <IconButton
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                sx={{
                  width: 44,
                  height: 44,
                  minWidth: 44,
                  flex: "0 0 44px",

                  padding: 0,
                  borderRadius: 0,

                  color: themeWhite,
                  bgcolor: "rgba(255,255,255,.12)",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  "&:hover": {
                    bgcolor: "rgba(255,255,255,.2)",
                  },
                  marginRight: 2,
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </div>

          {/* DESKTOP NAVIGATION */}
          {!isMobile && (
            <nav id="nav">
              <ul>
                <li className="current">
                  <Link to="/" style={headerLinkStyle}>
                    HOME
                  </Link>
                </li>

                <li>
                  <Link to="/about" style={headerLinkStyle}>
                    ABOUT
                  </Link>
                </li>

                <li>
                  <Link to="/products" style={headerLinkStyle}>
                    PRODUCTS
                  </Link>
                </li>

                <li>
                  <Link to="/feedback" style={headerLinkStyle}>
                    FEEDBACK
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={closeMenu}
        sx={{
          zIndex: 10002,
        }}
      >
        <Box
          sx={{
            width: 280,
            height: "100%",
            background: themeGradient,
            color: themeWhite,
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/" onClick={closeMenu}>
                <ListItemText primary="HOME" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={borderTopStyle}>
              <ListItemButton component={Link} to="/about" onClick={closeMenu}>
                <ListItemText primary="ABOUT" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={borderTopStyle}>
              <ListItemButton
                component={Link}
                to="/products"
                onClick={closeMenu}
              >
                <ListItemText primary="PRODUCTS" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={borderTopStyle}>
              <ListItemButton
                component={Link}
                to="/feedback"
                onClick={closeMenu}
              >
                <ListItemText primary="FEEDBACK" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={borderTopStyle}>
              <ListItemButton
                component={Link}
                to="/register"
                onClick={closeMenu}
              >
                <ListItemText primary="REGISTER" />
              </ListItemButton>
            </ListItem>

            {user ? (
              <ListItem disablePadding sx={borderTopStyle}>
                <ListItemButton
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                >
                  <ListItemText primary="LOGOUT" />
                </ListItemButton>
              </ListItem>
            ) : (
              <ListItem disablePadding sx={borderTopStyle}>
                <ListItemButton
                  component={Link}
                  to="/login"
                  onClick={closeMenu}
                >
                  <ListItemText primary="LOGIN" />
                </ListItemButton>
              </ListItem>
            )}

            <ListItem disablePadding sx={borderTopStyle}>
              <ListItemButton component="a" href="#">
                <ListItemText primary="FACEBOOK" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={borderTopStyle}>
              <ListItemButton component="a" href="#">
                <ListItemText primary="INSTAGRAM" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <main>
        <Outlet />
      </main>

      <Box
        component="footer"
        sx={{
          background: themeGradient,
          color: themeWhite,
          pt: 8,
        }}
      >
        <div className="container">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1.5fr 1fr 1fr",
              },
              gap: 6,
            }}
          >
            {/* COMPANY */}
            <Box>
              <Box
                sx={{
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  mb: 2,
                  color: themeWhite,
                }}
              >
                NATIONAL <em>MEDICAL</em>
              </Box>

              <Box
                sx={{
                  color: "rgba(255,255,255,.82)",
                  lineHeight: 1.8,
                }}
              >
                National Medical Supplies and Trading Corp. provides dependable
                medical supplies, healthcare devices, and facility support
                products for clinics, hospitals, laboratories, and healthcare
                providers.
              </Box>
            </Box>

            {/* CONTACT */}
            <Box>
              <Box
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: "1.1rem",
                  color: themeWhite,
                }}
              >
                CONTACT US
              </Box>

              <List disablePadding>
                <ListItem
                  disableGutters
                  sx={{
                    alignItems: "flex-start",
                    color: "rgba(255,255,255,.82)",
                  }}
                >
                  Quezon City, Philippines
                </ListItem>

                <ListItem
                  disableGutters
                  sx={{
                    color: "rgba(255,255,255,.82)",
                  }}
                >
                  inquiries@nationalmedical.com
                </ListItem>

                <ListItem
                  disableGutters
                  sx={{
                    color: "rgba(255,255,255,.82)",
                  }}
                >
                  +63 912 345 6789
                </ListItem>
              </List>
            </Box>

            {/* LINKS */}
            <Box>
              <Box
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: "1.1rem",
                  color: themeWhite,
                }}
              >
                IMPORTANT LINKS
              </Box>

              <List disablePadding>
                <ListItem disableGutters>
                  <Link
                    to="/"
                    style={{
                      color: themeWhite,
                      textDecoration: "none",
                    }}
                  >
                    Home
                  </Link>
                </ListItem>

                <ListItem disableGutters>
                  <Link
                    to="/about"
                    style={{
                      color: themeWhite,
                      textDecoration: "none",
                    }}
                  >
                    About
                  </Link>
                </ListItem>

                <ListItem disableGutters>
                  <Link
                    to="/products"
                    style={{
                      color: themeWhite,
                      textDecoration: "none",
                    }}
                  >
                    Products
                  </Link>
                </ListItem>

                <ListItem disableGutters>
                  <Link
                    to="/feedback"
                    style={{
                      color: themeWhite,
                      textDecoration: "none",
                    }}
                  >
                    Feedback
                  </Link>
                </ListItem>
              </List>

              <Box
                sx={{
                  fontWeight: 700,
                  mt: 4,
                  mb: 2,
                  fontSize: "1.1rem",
                  color: themeWhite,
                }}
              >
                CONNECT WITH US
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <a
                  href="#"
                  aria-label="Facebook"
                  style={{
                    color: themeWhite,
                    borderBottom: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,.12)",
                    textDecoration: "none",
                  }}
                >
                  <FacebookIcon fontSize="medium" />
                </a>

                <a
                  href="mailto:inquiries@nationalmedical.com"
                  aria-label="Email"
                  style={{
                    color: themeWhite,
                    borderBottom: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,.12)",
                    textDecoration: "none",
                  }}
                >
                  <EmailIcon fontSize="medium" />
                </a>
              </Box>
            </Box>
          </Box>
        </div>

        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,.18)",
            mt: 6,
            py: 3,
            textAlign: "center",
            color: "rgba(255,255,255,.75)",
          }}
        >
          © {new Date().getFullYear()} National Medical Supplies and Trading
          Corp. All rights reserved.
        </Box>
      </Box>
    </div>
  );
}
