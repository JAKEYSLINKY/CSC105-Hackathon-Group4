import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import MessageCard from "./MessageCard";
import Axios from "../AxiosInstance";

function ShowMessage() {
  const playerBox = {
    bgcolor: "rgba(255,255,255,0.5)",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
  };

  const headerStyle = {
    padding: "15px",
    paddingTop: "0",
    paddingBottom: "2%",
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("/randommsgs")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Box sx={playerBox}>
      <h1 style={headerStyle}>Note from Bottle</h1>
      {data.length > 0 ? (
        data.map(message => (
          <MessageCard key={message.id} message={message.text} />
        ))
      ) : (
        <p>No messages found.</p>
      )}
    </Box>
  );
}

export default ShowMessage;
