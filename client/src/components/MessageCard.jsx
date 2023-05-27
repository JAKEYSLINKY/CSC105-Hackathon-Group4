import { Box } from "@mui/material";
import React from "react";

function MessageCard({ message }) {
  const cardBox = {
    bgcolor: "#ffffff",
    borderRadius: "5px",
    width: "85%",
    padding: "10px",
    marginBottom: "25px",
    cursor: "pointer",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: "100%",
  };

  const textCardBox = {
    color: "black",
  };

  return (
    <Box sx={cardBox}>
      <p style={textCardBox}>{message}</p>
    </Box>
  );
}

export default MessageCard;
