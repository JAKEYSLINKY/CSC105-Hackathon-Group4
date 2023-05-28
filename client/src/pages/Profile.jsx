import React, { useEffect, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import Axios from "../AxiosInstance";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const removeCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  const handleRemoveCookie = () => {
    removeCookie("user");
    location.replace(location.href);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async () => {
    try {
      validatePassword();

      if (passwordError === "") {
        await Axios.patch("/updateprofile", { name, email, password });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      // Handle the error, show an error message, or perform any necessary actions
    }
  };

  useEffect(() => {
    Axios.get("/showprofile")
      .then((response) => {
        setName(response.data.data.name);
        setEmail(response.data.data.email);
        setPassword(response.data.data.password);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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

      <Box mt={2}>
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={handleEmailChange}
          InputProps={{
            inputProps: { style: { color: "white" } },
            style: { color: "white" },
          }}
        />
      </Box>

      <Box mt={2}>
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          InputProps={{
            inputProps: { style: { color: "white" } },
            style: { color: "white" },
          }}
        />
      </Box>

      <Box mt={2}>
        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          InputProps={{
            inputProps: { style: { color: "white" } },
            style: { color: "white" },
          }}
        />
        {passwordError && (
          <p style={{ color: "red", margin: "0", fontSize: "12px" }}>
            {passwordError}
          </p>
        )}
      </Box>

      <Button
        variant="text"
        sx={{ color: "white" }}
        onClick={handleRemoveCookie}
      >
        Sign out
      </Button>

      <div
        style={{ paddingTop: "20px", marginLeft: "40%", marginRight: "45%" }}
      >
        <Button
          variant="contained"
          onClick={handleSubmit}
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
