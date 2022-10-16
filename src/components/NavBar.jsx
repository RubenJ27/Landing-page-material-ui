import * as React from 'react';
import ImageLogoNav from '../assets/img/JadaLogo.png';
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Typography
} from "@mui/material";
import { Link } from "react-scroll"


export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar elevation={0} sx={{
      backgroundColor: "white",
      color: "primary.main"
    }} position="fixed">
      <Container maxWidth="full">
        <Toolbar>
          {/* Desktop name and logo  */}
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1}}>
            <img width={50} src={ImageLogoNav} />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'quicksand',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Ruben Jaramillo C
          </Typography>
            {/* mobile menu button */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Link activeClass="active" smooth spy to="home">
                <Typography sx={{
                  marginRight: 2, padding: 2, cursor: "pointer"
                }}>
                  Inicio
                </Typography>
              </Link>
              <Link activeClass="active" smooth spy to="profile">
                <Typography sx={{
                  marginRight: 2, padding: 2, cursor: "pointer"
                }}>
                  Perfil
                </Typography>
              </Link>
              <Link activeClass="active" smooth spy to="studies">
                <Typography sx={{
                  marginRight: 2, padding: 2, cursor: "pointer"
                }}>
                  Estudios
                </Typography>
              </Link>
              <Link activeClass="active" smooth spy to="experience">
                <Typography sx={{
                  marginRight: 2, padding: 2, cursor: "pointer"
                }}>
                  Experiencia
                </Typography>
              </Link>
              <Link activeClass="active" smooth spy to="portfolio">
                <Typography sx={{
                  marginRight: 2, padding: 2, cursor: "pointer"
                }}>
                  Portafolio
                </Typography>
              </Link>
              <Link activeClass="active" smooth spy to="contact">
                <Typography sx={{
                  marginRight: 2, padding: 2, cursor: "pointer"
                }}>
                  Contacto
                </Typography>
              </Link>
            </Menu>
          </Box>
          {/* logo and name on mobile */}
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 2}}>
              <img width={50} src={ImageLogoNav} />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          {/* desktop menu buttons */}
          <Box sx={{ cursor: "pointer", flex: 1, alignItems: "center", justifyContent: "end", display: { xs: 'none', md: 'flex' } }}>
           
          <Link activeClass="active" smooth spy to="home">
                <Typography sx={{ marginLeft: 6}}>
                  Inicio
                </Typography>
          </Link>
          <Link activeClass="active" smooth spy to="profile">
                <Typography sx={{ marginLeft: 6}}>
                    Perfil
                </Typography>
          </Link>
          <Link activeClass="active" smooth spy to="studies">
                <Typography sx={{ marginLeft: 6}}>
                  Estudios
                </Typography>
          </Link>
          <Link activeClass="active" smooth spy to="experience">
                <Typography sx={{ marginLeft: 6}}>
                  Experiencia
                </Typography>
          </Link>
          <Link activeClass="active" smooth spy to="portfolio">
                <Typography sx={{ marginLeft: 6}}>
                  Portafolio
                </Typography>
          </Link>
          <Link activeClass="active" smooth spy to="contact">
                <Typography sx={{ marginLeft: 6}}>
                  Contacto
                </Typography>
          </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

