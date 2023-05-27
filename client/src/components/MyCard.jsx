import React from 'react';
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function MyCard({ message }) {
  const cardBox = {
    bgcolor: "#ffffff",
    borderRadius: "5px",
    width: "90%",
    padding: "10px",
    display: "flex",
    marginBottom: "25px",
    cursor: "pointer",
    maxHeight: "80px",
    overflow: "scroll-y, hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
  };

  const textCardBox = {
    color: "black",
    wordWrap: "break-word",
    width: "90%"
  };

  const iconStyle = {
    width: "55px",
    height: "55px",
    color: "#ff0000"
  };

  return (
    <Box sx={cardBox}>
      <p style={textCardBox}>{message}</p>
      <IconButton sx={iconStyle} aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Box>
  );
}

export default MyCard;