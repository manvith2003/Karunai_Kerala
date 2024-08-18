import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import CssBaseline from "@mui/material/CssBaseline";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Logo } from "../assets";
import CloseIcon from '@mui/icons-material/Close'; 
import Login from "./Login/Login"; // Import the Login component
import Register from "./Register/register";  // Import the SignUp component

const pages = ["Home", "Get Involved", "Contribute", "Media"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

interface ResponsiveAppBarProps {
  isLoggedIn: boolean;
}

const ResponsiveAppBar: React.FC<ResponsiveAppBarProps> = ({ isLoggedIn }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [openLoginModal, setOpenLoginModal] = React.useState(false);  // State for Login modal
  const [openSignUpModal, setOpenSignUpModal] = React.useState(false);  // State for Sign Up modal
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page: string) => {
    setAnchorElNav(null);
    if (page === "Home") {
      navigate('/');
    } else if (page === "Get Involved") {
      navigate('/get-involved');
    } else if (page === "Contribute") {
      navigate('/contribute');
    } else if (page === "Media") {
      navigate('/media');
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignIn = () => {
    setOpenLoginModal(true);  // Open the Login modal
  };

  const handleSignUp = () => {
    setOpenSignUpModal(true);  // Open the Sign Up modal
  };

  const handleCloseModal = () => {
    setOpenLoginModal(false);  // Close the Login modal
    setOpenSignUpModal(false);  // Close the Sign Up modal
  };

  return (
    <AppBar
      position="static"
      sx={{ color: "black", backgroundColor: "white", boxShadow: "none" }}
    >
      <CssBaseline />
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'poppins',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={Logo} className="w-[20vw]" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }} />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={Logo} className="w-[45vw] md:w-[30vw]" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center", gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}  // Updated to pass page
                sx={{
                  my: 4,
                  color: "black",
                  display: "block",
                  fontWeight: "bold",
                  fontSize: "2rem",
                  fontFamily: "Arial, sans-serif",
                  textTransform: "none",
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h6">{page}</Typography>
                  <KeyboardArrowDownIcon />
                </Box>
              </Button>
            ))}
          </Box>

          {isLoggedIn ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
              <Button className="mb-3" onClick={handleSignIn} sx={{ color: "black", textTransform: "none", fontSize:"14px" }}>Login</Button>
              <Button
                onClick={handleSignUp}
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  textTransform: "none",
                  ml: 1,
                  fontSize:"13px",
                  padding:"4px" 
                }}
              >
                Sign Up
              </Button>
            </Box>
          )}
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Menu
              id="menu-appbar"
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                width: '100vw',
                height: '100vh',
                '& .MuiPaper-root': {
                  width: '100vw',
                  height: '100vh',
                  margin: 0,
                  borderRadius: 0
                },
              }}
            >
              <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                    <Typography textAlign="center" sx={{ fontSize: '2rem', width: '100%' }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      {/* Login Modal */}
      <Modal
        open={openLoginModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-login-title"
        aria-describedby="modal-login-description"
        BackdropProps={{
          sx: {
            backdropFilter: 'blur(3px)',  // Blur background for dull effect
            backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent black
          },
        }}
      >
        <Box
          sx={{
            boxShadow: 24,
          overflow: "auto"
          }}
        ><IconButton
        onClick={handleCloseModal}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          color: 'blue',  // Red color for the close icon
          fontSize: '2rem', 
        }}
      >
        <CloseIcon />
      </IconButton>
          <Login />
        </Box>
      </Modal>

      {/* Sign Up Modal */}
      <Modal
        open={openSignUpModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-signup-title"
        aria-describedby="modal-signup-description"
        BackdropProps={{
          sx: {
            backdropFilter: 'blur(3px)',  // Blur background for dull effect
            backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent black
          },
        }}
      >
        <Box sx={{
         boxShadow: 24,
         overflow: "auto",  // Allow sc
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'blue',  // Red color for the close icon
              fontSize: '4rem', 
            }}
          >
            <CloseIcon />
          </IconButton>
           <Register />
        </Box>
      </Modal>
    </AppBar>
  );
}

export default ResponsiveAppBar;
