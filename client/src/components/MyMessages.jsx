import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Axios from "../AxiosInstance";
import MyCard from "./MyCard";

function MyMessages({ message, setMessage }) {
  const playerBox = {
    bgcolor: "rgba(255,255,255,0.5)",
    width: { xs: "85%", sm: "100%" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    marginBottom: "40px",
  };

  const headerStyle = {
    padding: "5px",
    paddingTop: "0",
    paddingBottom: "2%",
  };

  const listFrame = {
    display: "flex",
    flexDirection: "column",
    width: "92%",
    paddingLeft: "8%",
    height: "500px",
    overflowY: "scroll",
    scrollbarWidth: "thin", // Thin scrollbar for Firefox
    "&::-webkit-scrollbar": {
      width: "6px", // Thin scrollbar for Chrome, Safari, and Opera
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#888", // Color of the scrollbar thumb
      borderRadius: "3px", // Rounded corners for the scrollbar thumb
    },
  };

  // getData(a) =>[{...a, }];

  return (
    <Box sx={playerBox}>
      <h1 style={headerStyle}>My notes</h1>
      <Box sx={listFrame}>
        {message.length > 0 ? (
          message.map((message) => (
            <MyCard
              key={message.id}
              message={message.text}
              id={message.msg_id}
              setCard={setMessage}
            />
          ))
        ) : (
          <p>No messages found.</p>
        )}
        <br />
      </Box>
    </Box>
  );
}

export default MyMessages;
