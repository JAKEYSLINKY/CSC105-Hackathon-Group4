import { Box } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

function NavBar() {
  const navigate = useState();
  const [activeLink, setActiveLink] = useState("");

  const navLink = [
    { name: "Home", to: "/" },
    { name: "About Whal", to: "/About" },
    { name: "Profile", to: "/Profile" },
  ];

  const navBar = {
    display: "flex",
    flexDirection: "row",
    width: "98vw",
    paddingLeft: "2%",
  };

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
      {navLink.map(({ name, to }) => (
        <NavLink
          style={{ marginLeft: "4%", marginRight: "2%"}}
          key={name}
          to={to}
          onClick={() => setActiveLink(to)}
        >
          <h1>{name}</h1>
        </NavLink>
      ))}
      <div></div>
    </Box>
  );
}

export default NavBar;
