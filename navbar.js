import React, { useState } from "react";
import { Grid, Button, Menu, MenuItem } from "@mui/material";
import "./navbar.css";
import navbarLogo from "./logos/navbarLogo.png";
import fbLogo from "./logos/fbLogo.png";
import igLogo from "./logos/igLogo.png";
import twitterLogo from "./logos/twitterLogo.png";
import TiktokLogo from "./logos/tiktokLogo.png";
import LinkedInLogo from "./logos/LinkedInLogo.png";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container className="navbar" alignItems="center">
      <Grid item xs={12} sm={4} md={3}>
        <img src={navbarLogo} alt="Logo" className="logo" />
      </Grid>

      <Grid
        item
        xs={false}
        md={6}
        className="navItems"
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home">About Us</a>
          </li>
          <li className="nav-item">
            <a href="https://adstreet.com.pk/adleaks">Adleaks</a>
          </li>
          <li className="nav-item">
            <a href="#services">Adpro</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Admeet</a>
          </li>
        </ul>
        <Button className="nav-item2">
          <a href="signup">Sign Up</a>
        </Button>
      </Grid>

      <Grid
        item
        xs={12}
        md={3}
        sx={{ display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}
      >
        <ul className="social-media-list">
          <li className="social-media-item">
            <a href="https://www.facebook.com">
              <img src={fbLogo} alt="Facebook" className="social-media-logo" />
            </a>
          </li>
          <li className="social-media-item">
            <a href="https://www.instagram.com">
              <img src={igLogo} alt="Instagram" className="social-media-logo" />
            </a>
          </li>
          <li className="social-media-item">
            <a href="https://www.twitter.com">
              <img
                src={twitterLogo}
                alt="Twitter"
                className="social-media-logo"
              />
            </a>
          </li>
          <li className="social-media-item">
            <a href="https://www.tiktok.com">
              <img
                src={TiktokLogo}
                alt="Tiktok"
                className="social-media-logo"
              />
            </a>
          </li>
          <li className="social-media-item">
            <a href="https://www.linkedin.com">
              <img
                src={LinkedInLogo}
                alt="LinkedIn"
                className="social-media-logo"
              />
            </a>
          </li>
        </ul>
      </Grid>

      <Button
        className="menuButton"
        sx={{ display: { xs: "block", md: "none" } }}
        onClick={handleMenu}
      >
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="menu"
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <MenuItem onClick={handleClose}>
          <a href="#home">About Us</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="https://adstreet.com.pk/adleaks">Adleaks</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#services">Adpro</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#contact">Admeet</a>
        </MenuItem>

      </Menu>
    </Grid>
  );
}

export default Navbar;
