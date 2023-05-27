import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Axios from "../AxiosInstance";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginBox = {
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
    marginRight: "5px"
  };

  const toRegisterBox = {
    display: "flex",
    justifyContent: "center",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email == "" || password == "") {
      setError("Please insert username and password");
      return;
    }
    Axios.post("/login", { email, password })
      .then((res) => {
        if (!res.data.success) {
          setError("Incorrect email or password");
          setEmail("");
          setPassword("");
          return;
        }
        console.log(res.data);
        onLogin();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box sx={loginBox}>
      <h2>Login</h2>
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
          label={"Password"}
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type={"submit"}>Login</Button>
        <p style={textError}>{error}</p>
      </form>
      <Box sx={toRegisterBox}>
        <p style={registerLink}>No account?</p>
        <Link to="/register">
          <p style={registerLink}>Signup</p>
        </Link>
      </Box>
    </Box>
  );
}

export default Login;
