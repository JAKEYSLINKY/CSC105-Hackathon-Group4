import { Box } from "@mui/material";
import React from "react";

function ShowMessage() {
  const playerBox = {
    bgcolor: "rgba(255,255,255,0.5);",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
    marginTop: "30px"
  };

  const headerStyle = {
    padding: "5px",
  };
  return (
    <Box sx={playerBox}>
      <h1 style={headerStyle}>Note from Bottle</h1>
    </Box>
  );
}

export default ShowMessage;
