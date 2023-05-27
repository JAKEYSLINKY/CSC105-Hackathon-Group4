import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

function CreateMessage() {
  const [message, setMessage] = useState();
  const playerBox = {
    bgcolor: "rgba(255,255,255,0.5);",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
    marginTop: "30px",
  };

  const handleSubmit = async () => {
    try {
      await Axios.post("/sendmsg", {text: message});
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const headerStyle = {
    padding: "5px",
  };
  return (
    <Box sx={playerBox}>
      <h1 style={headerStyle}>Add Note</h1>
      <TextField
        type={"email"}
        value={message}
        fullWidth
        multiline
        rows={3}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        sx={{
          width: "90%",
          marginBottom: "10%",
          bgcolor: "white",
          borderRadius: "5px",
        }}
      />
    </Box>
  );
}

export default CreateMessage;
