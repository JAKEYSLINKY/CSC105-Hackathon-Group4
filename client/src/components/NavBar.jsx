import { Box } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

function NavBar() {
  const navigate = useState();
  const [activeLink, setActiveLink] = useState("");

  const navLink = [
    { name: "Home", to: "/" },
    { name: "Message", to: "/Message" },
    { name: "About", to: "/About" },
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
          style={{ marginRight: "10%" }}
          key={name}
          to={to}
          onClick={() => setActiveLink(to)}
        >
          <h1>{name}</h1>
        </NavLink>
      ))}
    </Box>
  );
}

export default NavBar;
