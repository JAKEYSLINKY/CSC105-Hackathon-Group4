import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

function Profile() {
  const [name, setName] = useState("");

  const removeCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  // const MyComponent = () => {
  const handleRemoveCookie = () => {
    removeCookie("user");
    location.replace(location.href);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSaveEdit = () => {
    console.log("Name:", name);
  };

  return (
    <div style={{ justifyContent: "center", alignItems: "center" }}>
      <p style={{ fontSize: "24px" }}>Your Profile Information</p>
      <Box>
        <TextField
          fullWidth
          label="Name"
          id={name}
          defaultValue={name}
          style={{ width: "350px" }}
          sx={{ borderRadius: "30px" }}
          value={name}
          onChange={handleNameChange}
          InputProps={{
            inputProps: { style: { color: "white" } },
            style: { color: "white" },
          }}
        />
      </Box>

      <Button
        variant="text"
        sx={{ color: "white" }}
        onClick={handleRemoveCookie}
      >
        {" "}
        sign out
      </Button>

      <div
        style={{ paddingTop: "20px", marginLeft: "40%", marginRight: "45%" }}
      >
        <Button
          variant="contained"
          onClick={handleSaveEdit}
          style={{
            borderRadius: "30px",
            background: "#FFFFFF",
            opacity: "0.4",
            color: "#695858",
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
export default Profile;
