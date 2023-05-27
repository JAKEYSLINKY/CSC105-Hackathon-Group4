import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../AxiosInstance";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const registerBox = {
    display: "flex",
    flexDirection: "column",
  };

  const textFeildBox = {
    marginBottom: "20px",
  };

  const textError = {
    margin: "5px",
    fontSize: "14px",
    ...(error !== ""
      ? {
          display: "flex",
          justifyContent: "center",
          color: "#C41E3A",
        }
      : {
          display: "none",
        }),
  };

  const registerLink = {
    fontSize: "12px",
    marginRight: "5px",
  };

  const toRegisterBox = {
    display: "flex",
    justifyContent: "center",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (email == "" || password == "" || name == "") {
      setError("Please insert all information");
      return;
    }

    if (password != confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    Axios.post("/register", { email, password, name })
      .then((res) => {
        if (!res.data.success) {
          setError("Incorrect email or password");
          setEmail("");
          setPassword("");
          return;
        }
        navigate("/login");
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box sx={registerBox}>
      <h2>Register</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          sx={textFeildBox}
          label={"Email"}
          type={"email"}
          value={email}
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          sx={textFeildBox}
          label={"Name"}
          type={"text"}
          value={name}
          fullWidth
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          sx={textFeildBox}
          label={"Password"}
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextField
          sx={textFeildBox}
          label={"Confirm password"}
          type={"password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button type={"submit"}>Signup</Button>
        <p style={textError}>{error}</p>
      </form>
      <Box sx={toRegisterBox}>
        <p style={registerLink}>Have an account?</p>
        <Link to="/login">
          <p style={registerLink}>Login</p>
        </Link>
      </Box>
    </Box>
  );
}

export default Register;
