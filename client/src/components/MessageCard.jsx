import { Box } from "@mui/material";
import React from "react";

function MessageCard({ message }) {
  const cardBox = {
    bgcolor: "#ffffff",
    borderRadius: "5px",
    width: "85%",
    padding: "10px",
    display: "flex",
    marginBottom: "25px",
    cursor: "pointer",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
  };

  const textCardBox = {
    color: "black",
    wordWrap: "break-word",
  };

  const iconStyle = {
    width: "55px",
    height: "55px",
    color: "#ff0000"
  };
  return (
    <Box sx={cardBox}>
      <p style={textCardBox}>{message}</p>
    </Box>
  );
}

export default MessageCard;
