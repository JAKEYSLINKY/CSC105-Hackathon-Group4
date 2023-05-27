import { Box, Button, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import Axios from "../AxiosInstance";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
// import AuthContext from "./context/AuthProvider";


function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const { setAuth } = useContext(authContext);


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
          setEmail("")

          setPassword("");
          return;
        }
        console.log(res.data);
        // const accessToken = response?.data?.accessToken;
        // const roles = response?.data?.roles;

        // setAuth({ user, pwd, roles, accessToken });
        // setUser("");
        // setPwd("");

        onLogin();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return ( <div style={{alignContent:"center", marginleft:"auto",marginright:"auto", justifyContent:"center"}}>
      <Box  sx={loginBox}>
      <img src={logo} alt="Logo"/>
    <h2 style={{fontFamily:"dasa", fontSize:"15px",color:"#FFFFFF",opacity:"60%"}}>(n.) an undersea virtual safe space  for your blue days </h2>
    <hr/>
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
        InputProps={{ sx: { borderRadius: 30 } }}
      />

      <TextField variant="outlined"
        sx={textFeildBox}
        label={"Password"}
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{ sx: { borderRadius: 30 } }}
      />
       <Box sx={toRegisterBox}>
      <p style={registerLink}>No account?</p>
      <Link to="/register">
        <p style={registerLink}>Signup</p>
      </Link>
    </Box>

      <Button variant="contained" type={"submit"} style={{borderRadius:"30px",background: "#FFFFFF",opacity:"0.4",color:"#695858"}}>Login</Button>
      <p style={textError}>{error}</p>
    </form>

  </Box>
  </div>

  );
}

export default Login;
