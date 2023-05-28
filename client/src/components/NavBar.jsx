import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function NavBar() {
  const navigate = useState();
  const [activeLink, setActiveLink] = useState("");

  const navLink = [
    { name: "Home", to: "/", icon: <HomeIcon /> },
    { name: "About Whal", to: "/About", icon: <InfoIcon /> },
    { name: "Profile", to: "/Profile", icon: <AccountCircleIcon /> },
  ];

  const navBar = {
    display: "flex",
    flexDirection: "row",
    width: "calc(100vw - 3rem - 17px)",
    paddingLeft: "2%",
    zInedx: "5"
  };
  const isXs = window.innerWidth < 600;
  return (
    <Box sx={navBar}>
      <NavLink
        key={"icon"}
        to={"/"}
        onClick={() => setActiveLink("/")}
        style={{ marginRight: "auto" }}
      >
        <img src={logo} style={{ width: "120px", marginTop: "10%" }} />
      </NavLink>

      {navLink.map(({ name, to, icon }) =>
        isXs ? (
          <NavLink
            style={{ width: "30px", marginRight: "7%", fontSize: "40px" }}
            key={name}
            to={to}
            onClick={() => setActiveLink(to)}
          >
            <IconButton>{icon}</IconButton>
          </NavLink>
        ) : (
          <NavLink
            style={{ marginLeft: "4%", marginRight: "2%" }}
            key={name}
            to={to}
            onClick={() => setActiveLink(to)}
          >
            <h1>{name}</h1>
          </NavLink>
        )
      )}

      <div></div>
    </Box>
  );
}

export default NavBar;
